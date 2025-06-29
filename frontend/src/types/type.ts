// microCMS 型定義

export interface Work {
  id: string;
  title: string;
  description: string;
  content: string;
  thumbnail?: {
    url: string;
    width: number;
    height: number;
  };
  technologies?: string[];
  url?: string;
  github?: string;
  publishedAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  thumbnail?: {
    url: string;
    width: number;
    height: number;
  };
  publishedAt: string;
  updatedAt: string;
}

export interface MicroCMSResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
} 