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


export type QiitaItemResponse = {
  coediting: boolean;
  comments_count: number;
  created_at: string;
  id: string;
  likes_count: number;
  page_views_count: number;
  private: boolean;
  reactions_count: number;
  rendered_body: string;
  tags: { name: string; versions: [] }[];
  title: string;
  updated_at: string;
  url: string;
  user: {
    description: string;
    facebook_id: string;
    followees_count: number;
    followers_count: number;
    github_login_name: string;
    id: string;
    items_count: number;
    linkedin_id: string;
    location: string;
    name: string;
    organization: string;
    permanent_id: number;
    profile_image_url: string;
    team_only: boolean;
    twitter_screen_name: string;
    website_url: string;
  };
};

export type ParsedQiitaItem = {
  coediting: boolean;
  comments_count: number;
  created_at: string;
  id: string;
  likes_count: number;
  ogpImageUrl: string;
  page_views_count: number;
  private: boolean;
  reactions_count: number;
  tags: { name: string; versions: [] }[];
  title: string;
  updated_at: string;
  url: string;
};

export type ParsedNoteItem = {
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
  updatedAt: string;
};

export interface UnifiedArticle {
  uuid: string;
  title: string;
  url: string;
  thumbnailUrl: string;
  updatedAt: string;
  source: "note" | "qiita";
}