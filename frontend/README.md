# ポートフォリオサイト フロントエンド

Next.js + TypeScript + shadcn/ui + Storybook で構築されたポートフォリオサイトのフロントエンドです。

## 技術スタック

- **Next.js 15** (App Router)
- **TypeScript**
- **shadcn/ui** (Tailwind CSS + Radix UI)
- **Storybook**
- **microCMS** (ヘッドレスCMS)
- **GoogleForm** (お問い合わせ)

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. 環境変数の設定

`.env.local`ファイルを作成し、以下の環境変数を設定してください：

```bash
# GoogleForm Settings
NEXT_PUBLIC_GOOGLE_FORM_URL=https://forms.google.com/your-form-id

# microCMS Settings
NEXT_PUBLIC_MICROCMS_API_KEY=your-microcms-api-key
NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN=mchkn
NEXT_PUBLIC_MICROCMS_BLOG_ENDPOINT=https://mchkn.microcms.io/api/v1/blog
NEXT_PUBLIC_MICROCMS_WORK_ENDPOINT=https://mchkn.microcms.io/api/v1/work
```

サンプルファイル `env.example` を参考にしてください。

### 3. 開発サーバーの起動

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 利用可能なスクリプト

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番サーバー起動
npm run start

# 型チェック
npm run type-check

# Storybook起動
npm run storybook

# Storybookビルド
npm run build-storybook
```

## プロジェクト構造

```
frontend/
├── src/
│   ├── app/                 # Next.js App Router
│   │   └── page.tsx       # Next.js page
│   ├── components/          # UIコンポーネント
│   │   └── ui/             # shadcn/uiコンポーネント
│   ├── stories/            # Storybookストーリー
│   └── types/              # TypeScript型定義
├── .storybook/             # Storybook設定
├── public/                 # 静的ファイル
└── env.example            # 環境変数サンプル
```

## デプロイ

このプロジェクトは [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) で簡単にデプロイできます。

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
