export interface SocialLink {
  platform: "x" | "youtube" | "note" | "qiita";
  url: string;
}

export interface Profile {
  name: string;
  occupation: string;
  bio?: string; // 自己紹介文（最大150文字）
  imageUrl: string;
  socialLinks: SocialLink[];
}


export interface Article {
  id: string;
  title: string;
  url: string;
  createdAt: string;
  thumbnail?: string;
}

export interface Skill {
  name: string;
  category: "language" | "framework" | "tool" | "infrastructure" | "middleware" | "cms" | "cicd" | "other";
  level?: 1 | 2 | 3; // スキルレベル（1: 学習経験or個人開発での使用経験あり, 2: 実務経験あり, 3: 実務で自走でき、他者にもレクチャー可能）
}

export interface WorkExperience {
  company: string;
  position: string;
  startDate: string; // YYYY-MM形式
  endDate?: string; // YYYY-MM形式（現在勤務中の場合はundefined）
  description: string[];
  technologies?: string[]; // 使用技術
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  startDate?: string; // YYYY-MM形式
  endDate?: string; // YYYY-MM形式
}

export interface Certification {
  name: string;
  issuedDate: string; // YYYY-MM形式
  issuer?: string; // 発行機関
  url?: string; // 資格の詳細ページURL
}

export interface DetailedProfile extends Profile {
  skills?: Skill[];
  workExperience?: WorkExperience[];
  projects?: Project[];
  certifications?: Certification[];
}