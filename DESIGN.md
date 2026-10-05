# DESIGN.md

本ドキュメントは、現在の実装内容を分析し設計として整理したものである。実装への追従が必要な生きたドキュメントであり、構造を変更した場合は本ファイルも更新すること。

## 1. 概要

個人ポートフォリオサイト。プロフィール・経歴・実績・ブログ・連絡先を表示する静的サイトであり、Astroで静的生成しCloudflare Workers（Static Assets）にデプロイする構成である。ブログ記事はNotionで執筆し、ビルド時に取得する。

| 項目           | 内容                                                                 |
| -------------- | -------------------------------------------------------------------- |
| フレームワーク | Astro 7（`output` 未指定のため静的サイト生成）                       |
| 言語           | TypeScript / Astroコンポーネント / SCSS                              |
| ホスティング   | Cloudflare Workers（`wrangler.jsonc` の `assets.directory: ./dist`） |
| ドメイン       | `www.mchkn.com`（カスタムドメインルーティング）                      |
| CI/CD          | GitHub Actions（`main` push・毎日定期・手動実行で `npm run deploy`） |
| サイトマップ   | `@astrojs/sitemap` インテグレーション                                |
| ブログ記事     | Notion データソース（`@notionhq/client` + `notion-to-md`）           |

## 2. ディレクトリ構成

```
repo/
├── astro.config.mjs        # site URL・sitemapインテグレーション
├── wrangler.jsonc           # Cloudflare Workers デプロイ設定
├── src/
│   ├── content.config.ts    # Content Collections定義（データ層のスキーマ）
│   ├── data/                # YAMLデータソース + アイコン定義
│   ├── assets/images/       # ビルド時最適化される画像
│   ├── components/
│   │   ├── atoms/           # 最小単位のUI部品
│   │   ├── molecules/       # atomsを組み合わせた部品
│   │   └── organisms/       # ページを構成するセクション単位
│   ├── layouts/Layout.astro # HTML shell + SEO meta出力
│   ├── lib/
│   │   ├── seo.ts           # SEOメタ情報の生成ロジック
│   │   ├── blog.ts          # ページ向けの記事・カテゴリ取得ヘルパー
│   │   └── notion/          # Notion 連携（環境変数・ローダー・画像保存）
│   ├── pages/
│   │   ├── index.astro      # トップページ
│   │   └── blog/            # ブログ一覧・記事詳細・カテゴリ別一覧
│   └── styles/              # SCSS（変数・mixin・コンポーネント別partial）
├── public/notion-images/    # ビルド時にNotionから保存する画像（git管理外）
└── .github/workflows/       # ci.yml（PR検証）/ deploy.yml（デプロイ）
```

## 3. アーキテクチャ

### 3.1 レンダリングモデル

- Astroのデフォルト（SSG）で全ページをビルド時に静的HTML化する。クライアントサイドJSはスクロール連動モーション（`scripts/reveal.ts`）のみで、hydrationディレクティブは使っていない。
- 各ページは `Layout` の中に `organisms` を並べる構成。

| ルート                      | ファイル                               | 内容                                                   |
| --------------------------- | -------------------------------------- | ------------------------------------------------------ |
| `/`                         | `pages/index.astro`                    | トップページ                                           |
| `/blog`                     | `pages/blog/index.astro`               | 全記事一覧（公開日の降順）                             |
| `/blog/[slug]`              | `pages/blog/[slug].astro`              | 記事詳細。`slug` は Notion の Slug プロパティ          |
| `/blog/category/[category]` | `pages/blog/category/[category].astro` | カテゴリ別一覧。`categories.yaml` の定義ごとに生成する |

```
index.astro
└── Layout.astro (HTML shell, <head> SEOタグ)
    └── main.wrap
        ├── Hero        (id="home")
        ├── Career      (id="about")
        ├── Work        (id="work")    ※現在は非表示
        ├── Blog        (id="blog")    最新3件 + 一覧への導線
        └── Connect     (id="contact")
    └── SiteFooter
```

ブログ系ページは本文やコードが `$container-width`（350px）では窮屈なため、`main.wrap.wrap--wide`（最大 `$article-width` = 680px）を使う。

### 3.2 コンポーネント設計（Atomic Design）

`atoms → molecules → organisms` の3階層で構成し、下位層は上位層の詳細を知らない一方向依存になっている。

| 階層      | コンポーネント  | 役割                                                                                         |
| --------- | --------------- | -------------------------------------------------------------------------------------------- |
| atoms     | `Avatar`        | `astro:assets` の `Image` によるプロフィール画像最適化表示                                   |
| atoms     | `Button`        | `variant: 'pill' \| 'solid'` を `button--<variant>` のモディファイアで出し分けるリンクボタン |
| atoms     | `Icon`          | `data/icons.ts` のSVGパス定義を `stroke`/`fill` モードで描画                                 |
| atoms     | `SectionLabel`  | セクション見出しラベル                                                                       |
| atoms     | `CategoryBadge` | カテゴリ表示。リンク先と現在地表示（`current`）を受け取る                                    |
| molecules | `HeroMetaItem`  | アイコン+テキストの1行（所在地・生年月日）                                                   |
| molecules | `PostCard`      | 記事カード（公開日+カテゴリ+タイトル+概要）                                                  |
| molecules | `CategoryNav`   | 「すべて」+全カテゴリの切替ナビ                                                              |
| molecules | `WorkCard`      | 実績カード（画像+タイトル+説明）                                                             |
| molecules | `SocialLink`    | `Button(variant="pill")` + `Icon` の合成                                                     |
| molecules | `TimelineItem`  | 経歴タイムラインの1エントリ                                                                  |
| organisms | `Hero`          | プロフィール表示 + Contactボタン                                                             |
| organisms | `Career`        | 経歴タイムライン一覧                                                                         |
| organisms | `Work`          | 実績一覧（取得失敗時のフォールバック表示あり）                                               |
| organisms | `Blog`          | トップ用の最新記事3件 + 一覧への導線                                                         |
| organisms | `PostList`      | 記事カードのリスト。0件時は「記事はまだありません」を表示                                    |
| organisms | `Connect`       | SNSリンク一覧 + Contactボタン                                                                |
| organisms | `SiteFooter`    | コピーライト表示                                                                             |

Props型は各コンポーネントで `CollectionEntry<'xxx'>['data']` を参照しており、データ層のZodスキーマがそのままUI層の型として再利用されている（型定義の重複を避ける設計）。

### 3.3 データ層（Content Collections）

`src/content.config.ts` でコレクションを定義し、Zodスキーマでバリデーションしている。`blog` 以外は YAML ファイルを `astro/loaders` の `file()` ローダーで読み込む。

| コレクション  | ソース                                        | スキーマ概要                                                         | 利用箇所                      |
| ------------- | --------------------------------------------- | -------------------------------------------------------------------- | ----------------------------- |
| `profile`     | `data/profile.yaml`                           | name / role / location / birthday / seo                              | Hero, SiteFooter, Layout(SEO) |
| `career`      | `data/career.yaml`                            | order / period / role / org                                          | Career                        |
| `works`       | `data/works.yaml`（**未作成**）               | order / title / description / image / alt                            | Work                          |
| `socialLinks` | `data/social.yaml`                            | order / label / href / icon                                          | Hero, Connect                 |
| `blog`        | Notion データソース（`lib/notion/loader.ts`） | title / category / description / publishedAt / updatedAt。id は Slug | ブログ系ページ, Blog          |
| `categories`  | `data/categories.yaml`                        | order / label。id は Notion の Category の選択肢名                   | ブログ系ページ, Blog          |

`icons` オブジェクト（`data/icons.ts`）のキー集合がそのまま `socialLinks.icon` のZod enumに使われており、アイコン追加時の一元管理点になっている。

#### 3.3.1 Notion ローダー

`lib/notion/loader.ts` は Content Layer のカスタムローダーである。ビルド時（`astro build` / `astro check` / `astro dev` の content sync）に次の処理を行う。

1. `Status = Published` のページだけを Notion データソースから取得する
2. プロパティを読み取り、必須項目（Title / Slug / Category / PublishedAt）の欠落と Slug の形式（英小文字・数字・ハイフン）・重複を検証する。違反があればビルドを失敗させる
3. 本文ブロックを `notion-to-md` で Markdown にし、Astro の `renderMarkdown`（Shiki でコードをハイライト）で HTML にする
4. Notion にアップロードされた画像は URL が約1時間で失効するため、`public/notion-images/` にダウンロードして `/notion-images/<hash>.<ext>` に置き換える。ファイル名は URL のパス部分（署名クエリを除く）のハッシュで、同じ画像の再ダウンロードを避ける
5. 非公開に戻された記事・削除された記事をストアから除く

未編集の記事は `last_edited_time` の digest で本文の再取得を省く（ローカル開発時の API 呼び出し削減。CI では毎回全件取得する）。

| 環境変数                | 用途                                                                        |
| ----------------------- | --------------------------------------------------------------------------- |
| `NOTION_TOKEN`          | Notion インテグレーションのトークン                                         |
| `NOTION_DATA_SOURCE_ID` | 記事データソースの ID                                                       |
| `NOTION_REQUIRED`       | `true` のとき、上記が未設定ならビルドを失敗させる（デプロイ時のみ設定する） |

トークン未設定時は警告を出して記事 0 件で続行する。ローカルや PR の CI を Notion なしでも動かすためであり、本番だけは `NOTION_REQUIRED` で記事 0 件のサイトの公開を防ぐ。ローカルでは `repo/.env` を Node 標準の `process.loadEnvFile()` で読む。

カテゴリの存在チェックはローダーではなく `lib/blog.ts` の `getPosts()` で行う。ページは記事を必ず `getPosts()` 経由で取得し、`categories.yaml` に未定義のカテゴリを持つ記事があればビルドを失敗させる。

### 3.4 SEO

`src/lib/seo.ts` の `buildSeoMeta()` が、`profile` コレクションと呼び出し元の `SeoInput`（title/description/path/ogType省略可）からタイトル・description・canonical URL・OGP・JSON-LD（`schema.org/Person`）をまとめて生成し、`Layout.astro` の `<head>` に展開する。ページ固有のSEO上書きは `<Layout {...seoProps}>` で行う。

- `title` を渡すと `<title>` は `<title> | <name>` になる。省略時は `<name> | <role>`（トップページ）
- `ogType` の既定は `profile`。ブログ一覧・カテゴリ一覧は `website`、記事詳細は `article`
- 記事の Description が空のときは、サイト全体の description が使われる

### 3.5 スタイル

- SCSSを厳密BEM（`Block__Element--Modifier`。要素は`__`、モディファイアは`--`で連結）の命名（`.hero__inner` 等）でコンポーネント単位のpartialに分割し、`style.scss` で `@use` している。
- `_variables.scss` に配色・フォント・コンテナ幅・トランジションのデザイントークンを集約。
- `_mixins.scss` に共通化されたmixinを定義。
- コンポーネント側（`.astro`）にはstyleブロックを持たず、クラス名経由でグローバルSCSSと結合する設計（Astroのscoped styleは不使用）。
- ブログは `_blog.scss`（一覧・カード・カテゴリ）と `_post.scss`（記事本文）に分ける。記事本文は Notion から生成した HTML でクラスを付けられないため、`.post__body` 配下だけは要素セレクタで組版する。

### 3.6 デプロイ

- `npm run deploy` = `astro build && wrangler deploy`。
- GitHub Actions（`.github/workflows/deploy.yml`）が次のいずれかをトリガに、Node 22.19.0でビルドし `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` を用いてデプロイする。
  - `main` ブランチへの push
  - 毎日 06:00 JST の定期実行（`schedule`）。Notion の記事更新は push を伴わないため
  - Actions 画面からの手動実行（`workflow_dispatch`）。記事をすぐ反映したいとき
- デプロイは `concurrency: deploy` で直列化し、古いビルドが後から上書きしないようにしている。
- デプロイ時は `NOTION_TOKEN` / `NOTION_DATA_SOURCE_ID` を Secrets から渡し、`NOTION_REQUIRED=true` とする。
- PR の CI（`ci.yml`）にも Notion の Secrets を渡し、実データでビルドを検証する。
- Cloudflare側は静的アセット配信のみ（Workers上でのAPI等は未使用）。

## 4. 既知の課題・未実装点

実装調査の過程で確認した、設計上の注意点。リファクタリング対象ではなくドキュメント化のみだが、今後の変更時に踏まえるべき事項として記載する。

1. **`works` コレクションのデータ未整備**: `content.config.ts` にスキーマは定義済みだが `src/data/works.yaml` が存在しない。`Work.astro` は `try/catch` でロード失敗を吸収し `"Cannot fetch Work informations."` を表示するフォールバック実装がある。（`blog` は Notion ローダーで実装済み）
