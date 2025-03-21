export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'ポートフォリオサイト',
    description: 'Next.js、TypeScript、Tailwind CSS、shadcn/ui、framer-motionを使用して作成した自己紹介サイトです。',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'framer-motion'],
    imageUrl: '/project-portfolio.png',
  },
  {
    title: 'ECサイト管理システム',
    description: '受注管理、在庫管理、顧客管理を一元化したバックオフィスシステムを開発しました。',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker'],
  },
  {
    title: 'スマホアプリ開発',
    description: 'クロスプラットフォーム対応の健康管理アプリを開発しました。',
    technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
  },
]; 