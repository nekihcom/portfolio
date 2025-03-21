type BlogPost = {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  tags: string[];
  url: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: '2024年に学ぶべきフロントエンド技術',
    description: '最新のフロントエンド開発トレンドと、効率的な学習方法について解説します。',
    date: '2024-03-15',
    imageUrl: '/blog-frontend.jpg',
    tags: ['フロントエンド', 'React', 'Next.js'],
    url: '/blog/frontend-tech-2024',
  },
  {
    id: 'blog-2',
    title: 'TypeScriptの実践的な使い方',
    description: '実際のプロジェクトで使えるTypeScriptのテクニックとベストプラクティスを紹介します。',
    date: '2024-02-28',
    imageUrl: '/blog-typescript.jpg',
    tags: ['TypeScript', '開発効率'],
    url: '/blog/typescript-best-practices',
  },
  {
    id: 'blog-3',
    title: 'Webアプリのパフォーマンス最適化',
    description: 'ユーザー体験を向上させるための具体的なパフォーマンス最適化手法を解説します。',
    date: '2024-01-20',
    tags: ['パフォーマンス', 'Web開発'],
    url: '/blog/web-performance-optimization',
  },
  {
    id: 'blog-4',
    title: 'フリーランスエンジニアとして働く方法',
    description: '独立して5年目のエンジニアが語る、フリーランスとしての仕事の探し方と継続のコツ。',
    date: '2023-12-10',
    imageUrl: '/blog-freelance.jpg',
    tags: ['キャリア', 'フリーランス'],
    url: '/blog/freelance-engineer-guide',
  },
]; 