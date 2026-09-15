# DESIGN.md

本ドキュメントは、現在の実装内容を分析し設計として整理したものである。実装への追従が必要な生きたドキュメントであり、構造を変更した場合は本ファイルも更新すること。

## 1. 概要

個人ポートフォリオサイト（1ページ構成）。プロフィール・経歴・実績・連絡先を表示する静的サイトであり、Astroで静的生成しCloudflare Workers（Static Assets）にデプロイする構成である。

| 項目           | 内容                                                                 |
| -------------- | -------------------------------------------------------------------- |
| フレームワーク | Astro 7（`output` 未指定のため静的サイト生成）                       |
| 言語           | TypeScript / Astroコンポーネント / SCSS                              |
| ホスティング   | Cloudflare Workers（`wrangler.jsonc` の `assets.directory: ./dist`） |
| ドメイン       | `www.mchkn.com`（カスタムドメインルーティング）                      |
| CI/CD          | GitHub Actions（`main` push契機で `npm run deploy`）                 |
| サイトマップ   | `@astrojs/sitemap` インテグレーション                                |

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
│   ├── lib/seo.ts           # SEOメタ情報の生成ロジック
│   ├── pages/index.astro    # 唯一のページ（トップページ）
│   └── styles/              # SCSS（変数・mixin・コンポーネント別partial）
└── .github/workflows/deploy.yml
```

## 3. アーキテクチャ

### 3.1 レンダリングモデル

- Astroのデフォルト（SSG）で全ページをビルド時に静的HTML化する。クライアントサイドJSは出力していない（`.astro`コンポーネントのみ、hydrationディレクティブ不使用）。
- `src/pages/index.astro` が唯一のルートであり、`Layout` の中に `organisms` を並べる構成。

```
index.astro
└── Layout.astro (HTML shell, <head> SEOタグ)
    └── main.wrap
        ├── Hero        (id="home")
        ├── Career      (id="about")
        ├── Work        (id="work")
        └── Connect     (id="contact")
    └── SiteFooter
```

### 3.2 コンポーネント設計（Atomic Design）

`atoms → molecules → organisms` の3階層で構成し、下位層は上位層の詳細を知らない一方向依存になっている。

| 階層      | コンポーネント | 役割                                                         |
| --------- | -------------- | ------------------------------------------------------------ |
| atoms     | `Avatar`       | `astro:assets` の `Image` によるプロフィール画像最適化表示   |
| atoms     | `Button`       | `variant: 'pill' \| 'blog'` でクラス出し分けするリンクボタン |
| atoms     | `Icon`         | `data/icons.ts` のSVGパス定義を `stroke`/`fill` モードで描画 |
| atoms     | `SectionLabel` | セクション見出しラベル                                       |
| molecules | `HeroMetaItem` | アイコン+テキストの1行（所在地・生年月日）                   |
| molecules | `ProjectCard`  | 実績カード（画像+タイトル+説明）                             |
| molecules | `SocialLink`   | `Button(variant="pill")` + `Icon` の合成                     |
| molecules | `TimelineItem` | 経歴タイムラインの1エントリ                                  |
| organisms | `Hero`         | プロフィール表示 + Contactボタン                             |
| organisms | `Career`       | 経歴タイムライン一覧                                         |
| organisms | `Work`         | 実績一覧（取得失敗時のフォールバック表示あり）               |
| organisms | `Connect`      | SNSリンク一覧 + Contactボタン                                |
| organisms | `SiteFooter`   | コピーライト表示                                             |

Props型は各コンポーネントで `CollectionEntry<'xxx'>['data']` を参照しており、データ層のZodスキーマがそのままUI層の型として再利用されている（型定義の重複を避ける設計）。

### 3.3 データ層（Content Collections）

`src/content.config.ts` でYAMLファイルを `astro/loaders` の `file()` ローダーで読み込み、Zodスキーマでバリデーションしている。

| コレクション  | ソース                             | スキーマ概要                              | 利用箇所                      |
| ------------- | ---------------------------------- | ----------------------------------------- | ----------------------------- |
| `profile`     | `data/profile.yaml`                | name / role / location / birthday / seo   | Hero, SiteFooter, Layout(SEO) |
| `career`      | `data/career.yaml`                 | order / period / role / org               | Career                        |
| `projects`    | `data/projects.yaml`（**未作成**） | order / title / description / image / alt | Work                          |
| `socialLinks` | `data/social.yaml`                 | order / label / href / icon               | Hero, Connect                 |
| `blog`        | `data/blog.yaml`（**未作成**）     | label / href                              | 参照コンポーネントなし        |

`icons` オブジェクト（`data/icons.ts`）のキー集合がそのまま `socialLinks.icon` のZod enumに使われており、アイコン追加時の一元管理点になっている。

### 3.4 SEO

`src/lib/seo.ts` の `buildSeoMeta()` が、`profile` コレクションと呼び出し元の `SeoInput`（title/description/path省略可）からタイトル・description・canonical URL・OGP・JSON-LD（`schema.org/Person`）をまとめて生成し、`Layout.astro` の `<head>` に展開する。ページ固有のSEO上書きは `<Layout {...seoProps}>` で行う設計だが、現状 `index.astro` は上書きなし（デフォルト値を使用）。

### 3.5 スタイル

- SCSSを厳密BEM（`Block__Element--Modifier`。要素は`__`、モディファイアは`--`で連結）の命名（`.hero__inner` 等）でコンポーネント単位のpartialに分割し、`style.scss` で `@use` している。
- `_variables.scss` に配色・フォント・コンテナ幅・トランジションのデザイントークンを集約。
- `_mixins.scss` に共通化されたmixinを定義。
- コンポーネント側（`.astro`）にはstyleブロックを持たず、クラス名経由でグローバルSCSSと結合する設計（Astroのscoped styleは不使用）。

### 3.6 デプロイ

- `npm run deploy` = `astro build && wrangler deploy`。
- GitHub Actions（`.github/workflows/deploy.yml`）が `main` ブランチへのpushをトリガに、Node 22.19.0でビルドし `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` を用いてデプロイする。
- Cloudflare側は静的アセット配信のみ（Workers上でのAPI等は未使用）。

## 4. 既知の課題・未実装点

実装調査の過程で確認した、設計上の注意点。リファクタリング対象ではなくドキュメント化のみだが、今後の変更時に踏まえるべき事項として記載する。

1. **`projects` / `blog` コレクションのデータ未整備**: `content.config.ts` にスキーマは定義済みだが `src/data/projects.yaml` と `src/data/blog.yaml` が存在しない。`Work.astro` は `try/catch` でロード失敗を吸収し `"Cannot fetch Work informations."` を表示するフォールバック実装があるが、`blog` コレクションは参照箇所自体が存在しない（未使用の定義）。
2. **`socialLinks[2]` のインデックス直書き**: `Hero.astro` / `Connect.astro` の両方で、Contactボタンのhrefを `socialLinks` ソート結果の3番目（`order: 5` のEmail想定）に固定でアクセスしている。`social.yaml` の並び順や件数を変更すると意図しないリンクになる暗黙の結合がある。
3. **`Button` の `variant="blog"` 命名とButton用途の乖離**: Contact用ボタンに `variant="blog"`（CSSクラス `blog-button`）を使っており、命名とセマンティクスが一致していない。
4. **`Button` のクラス出し分けが厳密BEMのモディファイア規約から外れている**: `variant` によって `social-pill` / `blog-button` という無関係な別クラス名を出力しており、`.button--pill` / `.button--blog` のようなモディファイア（`--`連結）にはなっていない。
