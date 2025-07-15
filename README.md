# Mochiken Portfolio

フロントエンドエンジニア Mochiken のポートフォリオサイトです。  
Next.js + TypeScript + shadcn/ui で構築され、ブログ記事、作品紹介、自己紹介機能を備えています。

## 🌟 特徴

- **モダンな技術スタック**: Next.js 15 (App Router) + TypeScript + Tailwind CSS
- **高品質なUI**: shadcn/ui による統一感のあるデザイン
- **コンテンツ管理**: microCMS によるヘッドレスCMS
- **お問い合わせ**: GoogleForm による運用コストの削減
- **パフォーマンス**: ISR/SSG による高速な表示
- **アクセシビリティ**: 適切なセマンティックHTMLとARIA属性

## 🛠️ 技術スタック

### フロントエンド
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (Radix UI + Tailwind CSS)
- **Storybook**

### コンテンツ管理・外部サービス
- **microCMS** (ヘッドレスCMS)
- **GoogleForm** (お問い合わせフォーム)
- **AWS Amplify** (デプロイ・ホスティング)

### 開発ツール
- **ESLint** + **Prettier** (コード品質)
- **Vitest** (テスト)
- **GitHub Actions** (CI/CD)

## 📁 プロジェクト構造

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/             # 自己紹介ページ
│   │   ├── blog/              # ブログ一覧・詳細ページ
│   │   ├── work/              # 作品一覧・詳細ページ
│   │   ├── globals.css        # グローバルスタイル
│   │   ├── layout.tsx         # ルートレイアウト
│   │   └── page.tsx           # トップページ
│   ├── components/             # UIコンポーネント
│   │   ├── ui/                # shadcn/ui コンポーネント
│   │   ├── sections/          # ページセクション
│   │   ├── features/          # 機能コンポーネント
│   │   ├── layout/            # レイアウトコンポーネント
│   │   └── seo/               # SEO関連コンポーネント
│   ├── data/                  # 静的データ
│   ├── lib/                   # ユーティリティ関数
│   ├── types/                 # TypeScript型定義
│   └── stories/               # Storybookストーリー
├── docs/                      # プロジェクトドキュメント
│   ├── requirements.md        # 要件定義書
│   └── git-workflow.md        # Git運用ルール
├── public/                    # 静的ファイル
├── .storybook/                # Storybook設定
└── README.md                  # このファイル
```

## 🚀 セットアップ

### 1. リポジトリのクローン

```bash
git clone https://github.com/nekihcom/portfolio.git
cd portfolio
```

### 2. 依存関係のインストール

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. 環境変数の設定

`.env.local`ファイルを作成し、以下の環境変数を設定してください：

```bash
# GoogleForm Settings
NEXT_PUBLIC_GOOGLE_FORM_URL=https://forms.google.com/your-form-id

# microCMS Settings
NEXT_PUBLIC_MICROCMS_API_KEY=your-microcms-api-key
NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN=your-domain
NEXT_PUBLIC_MICROCMS_BLOG_ENDPOINT=your-blog-endpoint
NEXT_PUBLIC_MICROCMS_WORK_ENDPOINT=your-work-endpoint
```

サンプルファイル `env.example` を参考にしてください。

### 4. 開発サーバーの起動

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 利用可能なスクリプト

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番サーバー起動
npm run start

# 型チェック
npm run type-check

# テスト実行
npm run test

# Storybook起動
npm run storybook

# Storybookビルド
npm run build-storybook
```

## 📄 ページ構成

### トップページ (`/`)
- ヒーローセクション（自己紹介・スキルタグ）
- 最新ブログ記事のピックアップ
- 最新作品のピックアップ
- SNSリンク

### 自己紹介ページ (`/about`)
- プロフィール情報
- 経歴・スキル詳細
- 目標・価値観
- 趣味・興味

### ブログ一覧ページ (`/blog`)
- ブログ記事一覧表示
- カテゴリ別フィルタリング
- 検索機能

### ブログ詳細ページ (`/blog/[id]`)
- 記事本文表示
- メタ情報（投稿日、カテゴリ等）
- 関連記事への導線

### 作品一覧ページ (`/work`)
- 作品一覧表示
- 技術スタック別フィルタリング

### 作品詳細ページ (`/work/[id]`)
- 作品詳細情報
- 技術スタック
- デモ・GitHubリンク

## 🎨 デザインシステム

### カラーパレット
- **Primary**: Teal系（#0d9488）
- **Background**: Slate系（#f8fafc）
- **Text**: Gray系（#374151）

### コンポーネント
- shadcn/ui による統一感のあるデザイン
- レスポンシブ対応
- ダークモード対応（準備中）

## 🔧 実装済み機能

### ✅ 完了済み
- [x] Next.js 15 (App Router) プロジェクト構築
- [x] TypeScript設定
- [x] Tailwind CSS + shadcn/ui 設定
- [x] Storybook設定
- [x] トップページ実装
- [x] 自己紹介ページ実装
- [x] ブログ一覧・詳細ページ実装
- [x] 作品一覧・詳細ページ実装
- [x] microCMS連携
- [x] GoogleForm連携
- [x] スクロールボタン実装
- [x] SEO対策（メタタグ、JSON-LD）
- [x] レスポンシブデザイン
- [x] アニメーション効果
- [x] アクセシビリティ対応

### 🔄 開発中
- [ ] ダークモード対応
- [ ] パフォーマンス最適化
- [ ] テスト実装

## 📚 ドキュメント

- [要件定義書](./docs/requirements.md) - プロジェクトの要件と技術選定
- [Git運用ルール](./docs/git-workflow.md) - ブランチ戦略とコミット規約

## 🚀 デプロイ

このプロジェクトは [AWS Amplify](https://aws.amazon.com/amplify/) でデプロイされています。

### デプロイ手順

1. AWS Amplifyコンソールにアクセス
2. GitHubリポジトリと連携
3. 環境変数を設定
4. 自動デプロイ開始

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトは個人のポートフォリオサイトとして作成されています。

## 👨‍💻 作者

**Mochiken** - フロントエンドエンジニア

- GitHub: [@nekihcom](https://github.com/nekihcom)
- ポートフォリオ: [https://mchkn.com](https://mchkn.com)

---

⭐ このリポジトリが役に立ったら、スターを押してください！ 