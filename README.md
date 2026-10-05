# Astro Starter Kit: Basics

## ブログ（Notion 連携）のセットアップ

ブログ記事は Notion で書き、ビルド時に取得して静的ページにする。仕組みは [DESIGN.md](./DESIGN.md) の「3.3.1 Notion ローダー」を参照。

Notion の設定がなくてもビルドは通る（記事 0 件になる）。ただし本番デプロイは、設定がないと失敗する。

### 1. Notion データベースを作る

次のプロパティを持つデータベースを作る。プロパティ名は大文字・小文字を含めて一致させる（`src/lib/notion/loader.ts` の `PROP` で変更できる）。

| プロパティ  | 種類       | 必須 | 内容                                                                    |
| ----------- | ---------- | ---- | ----------------------------------------------------------------------- |
| Title       | タイトル   | ○    | 記事タイトル                                                            |
| Slug        | テキスト   | ○    | URL（`/blog/<Slug>`）。英小文字・数字・ハイフンのみ。記事間で重複不可   |
| Category    | セレクト   | ○    | カテゴリ。選択肢名は `src/data/categories.yaml` の `id` と一致させる    |
| Description | テキスト   |      | 一覧に出す概要と、記事ページの meta description                         |
| PublishedAt | 日付       | ○    | 公開日。一覧はこの降順に並ぶ                                            |
| Status      | ステータス | ○    | `Published` の記事だけを公開する。下書きは `Draft` など別の値にしておく |

`Published` の記事で必須項目が欠けている場合や、Slug の形式・重複に問題がある場合は、ビルドが失敗する。

### 2. インテグレーションを作り、データベースに接続する

1. [Notion のインテグレーション管理画面](https://www.notion.so/profile/integrations) で Internal インテグレーションを作る。権限は「コンテンツを読み取る」だけでよい
2. 表示されたトークンを控える（`NOTION_TOKEN`）
3. データベースのページ右上「…」→「接続」から、作ったインテグレーションを追加する
4. データベースの「…」→「データソースを管理」から、データソースの ID をコピーする（`NOTION_DATA_SOURCE_ID`）

### 3. ローカルの環境変数を設定する

`repo/.env` に次を書く。`.env` は `.gitignore` 済みなので、コミットされない。

```sh
NOTION_TOKEN=<インテグレーションのトークン>
NOTION_DATA_SOURCE_ID=<データソースの ID>
```

### 4. GitHub Secrets を設定する

リポジトリの Settings → Secrets and variables → Actions に、同じ 2 つ（`NOTION_TOKEN` / `NOTION_DATA_SOURCE_ID`）を登録する。

- 本番デプロイ（`deploy.yml`）は、未登録だと失敗する。記事 0 件のサイトが公開されるのを防ぐためである
- 記事の更新は毎日 06:00 JST に自動で反映される。すぐ反映したいときは Actions → Deploy →「Run workflow」で手動実行する

### カテゴリを追加・変更する

カテゴリは Notion と `src/data/categories.yaml` の両方で管理する。URL には Notion の選択肢名を、画面表示には `categories.yaml` の `label` を使う。

1. `categories.yaml` に `id`（英小文字の URL 用の名前）・`order`（表示順）・`label`（表示名）を追加する
2. Notion の Category に、`id` と同じ名前の選択肢を追加する

`categories.yaml` にないカテゴリの記事が公開されていると、ビルドが失敗する。カテゴリを削除するときは、先に Notion 側で該当記事のカテゴリを付け替える。

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
