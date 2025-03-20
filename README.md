# ポートフォリオサイト スターターテンプレート

このプロジェクトは以下の技術スタックを使用しています：

- [Next.js](https://nextjs.org/) - React フレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全な JavaScript
- [shadcn/ui](https://ui.shadcn.com/) - 美しいUIコンポーネント
- [framer-motion](https://www.framer.com/motion/) - アニメーションライブラリ
- [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファーストCSS

## 始め方

まず、開発サーバーを起動します：

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くと結果が表示されます。

`src/app/page.tsx` を編集することでページの編集を開始できます。ファイルを編集すると、ページは自動的に更新されます。

## コンポーネントの追加

このプロジェクトでは [shadcn/ui](https://ui.shadcn.com/) を使用しています。新しいコンポーネントを追加するには以下のコマンドを実行します：

```bash
npx shadcn@latest add [コンポーネント名]
```

例：

```bash
npx shadcn@latest add card
npx shadcn@latest add dropdown-menu
npx shadcn@latest add dialog
```

## アニメーションの追加

[framer-motion](https://www.framer.com/motion/) を使ってアニメーションを追加できます。基本的な使い方は以下の通りです：

```tsx
import { motion } from 'framer-motion';

// 要素をアニメーション化
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  コンテンツ
</motion.div>
```

## デプロイ

Next.jsアプリをデプロイする最も簡単な方法は、Next.jsの作成者による[Vercelプラットフォーム](https://vercel.com/new)を使用することです。

詳細については、[Next.jsデプロイドキュメント](https://nextjs.org/docs/app/building-your-application/deploying)をご覧ください。
