export type TSocialLinksObject = {
  [key: string]: string;
};

export interface ICareerItem {
  name: string;
  period: string;
  role: string;
  description: string;
}

export interface ISkillItem {
  name: string;
}

export interface ISkillCategory {
  category: string;
  items: ISkillItem[];
}

export interface ICertification {
  name: string;
  date: string;
}

export interface IProfile {
  name: string;
  thumbnail: string;
  job: string;
  bio: string;
  link: TSocialLinksObject;
  career: ICareerItem[];
  skills: ISkillCategory[];
  certifications?: ICertification[];
}

export interface IArticle {
  id: string;
  title: string;
  created_dt: string;
  thumbnail?:string;
  url:string;
  source: string;
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

export interface ITechStack {
  category: string;
  items: string[];
}

export interface IThumbnail {
  url: string;
  height: number;
  width: number;
}

export interface IWork {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  created_dt: string;
  thumbnails: IThumbnail[];
  description: string;
  description2?: string;
  frontend?: string;
  backend?: string;
  infra?: string;
  deploy?: string;
  cicd?: string;
  version?: string;
}