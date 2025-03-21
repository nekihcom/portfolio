type TechArticle = {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  tags: string[];
  url: string;
  source: string;
};

export const techArticles: TechArticle[] = [
  {
    id: 'tech-1',
    title: 'JavaScriptでのパフォーマンス最適化テクニック',
    description: 'メモリリークを防ぎ、実行速度を向上させるための実践的なテクニックを紹介します。',
    date: '2024-03-10',
    imageUrl: '/tech-javascript.jpg',
    tags: ['JavaScript', 'パフォーマンス'],
    url: 'https://zenn.dev/mochiken/articles/js-performance',
    source: 'Zenn',
  },
  {
    id: 'tech-2',
    title: 'React Hooksの深掘り解説',
    description: 'useEffect、useMemo、useCallbackの正しい使い方と実装パターンを解説します。',
    date: '2024-02-15',
    imageUrl: '/tech-react-hooks.jpg',
    tags: ['React', 'Hooks', 'フロントエンド'],
    url: 'https://qiita.com/mochiken/items/react-hooks-deep-dive',
    source: 'Qiita',
  },
  {
    id: 'tech-3',
    title: 'Next.jsとFirebaseで作るJamstackアプリケーション',
    description: '認証からデータベースまで、フルスタックなWebアプリケーションの構築手法を紹介します。',
    date: '2024-01-05',
    tags: ['Next.js', 'Firebase', 'Jamstack'],
    url: 'https://note.com/mochiken/n/nextjs-firebase-jamstack',
    source: 'note',
  },
  {
    id: 'tech-4',
    title: 'GraphQLとTypeScriptの統合ガイド',
    description: '型安全なAPIクエリを実現するための設計パターンと実装例を紹介します。',
    date: '2023-12-20',
    imageUrl: '/tech-graphql.jpg',
    tags: ['GraphQL', 'TypeScript', 'API'],
    url: 'https://dev.to/mochiken/graphql-typescript-integration',
    source: 'dev.to',
  },
]; 