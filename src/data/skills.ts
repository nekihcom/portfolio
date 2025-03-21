export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'app' | 'infrastructure' | 'other';
  level: number; // 1-5
}

export const skills: Skill[] = [
  // フロントエンド
  { name: 'HTML/CSS', category: 'frontend', level: 5 },
  { name: 'JavaScript', category: 'frontend', level: 5 },
  { name: 'TypeScript', category: 'frontend', level: 4 },
  { name: 'React', category: 'frontend', level: 4 },
  { name: 'Next.js', category: 'frontend', level: 4 },
  { name: 'Tailwind CSS', category: 'frontend', level: 5 },
  
  // バックエンド
  { name: 'Node.js', category: 'backend', level: 4 },
  { name: 'Express', category: 'backend', level: 4 },
  { name: 'Python', category: 'backend', level: 3 },
  { name: 'Java', category: 'backend', level: 3 },
  { name: 'SQL', category: 'backend', level: 4 },
  
  // アプリ
  { name: 'React Native', category: 'app', level: 3 },
  { name: 'Flutter', category: 'app', level: 2 },
  
  // インフラ
  { name: 'AWS', category: 'infrastructure', level: 3 },
  { name: 'Docker', category: 'infrastructure', level: 4 },
  { name: 'Kubernetes', category: 'infrastructure', level: 3 },
  { name: 'CI/CD', category: 'infrastructure', level: 4 },
  
  // その他
  { name: 'Git', category: 'other', level: 5 },
  { name: 'Agile/Scrum', category: 'other', level: 4 },
];

export const skillCategories = [
  { id: 'frontend', name: 'フロントエンド' },
  { id: 'backend', name: 'バックエンド' },
  { id: 'app', name: 'アプリ開発' },
  { id: 'infrastructure', name: 'インフラ' },
  { id: 'other', name: 'その他' },
]; 