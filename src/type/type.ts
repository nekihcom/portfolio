type tag = {
  name: string;
  versions: string[];
}

type QiitaUser = {
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
}

export type QiitaResponse = {
  rendered_body: string;
  body: string;
  coediting: boolean;
  comments_count: number;
  created_at: string;
  group: string | null;
  id: string;
  likes_count: number;
  private: boolean;
  reactions_count: number;
  stocks_count: number;
  tags: tag[];
  title: string;
  updated_at: string;
  url: string; 
  user: QiitaUser;
  page_views_count: number;
  team_membership: string | null;
  organization_url_name: string | null;
  slide: boolean;
}

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
  tags: tag[];
  title: string;
  updated_at: string;
  url: string;
};

export type Work = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  keywords: string;
  url: string;
  path: string;
  body: string;
}

export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  post_dt: string;
  title: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  body: string;
  keywords: string;
  category: string;
}

export type ParsedBlogItem = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  post_dt: string;
  ogpImageUrl: string;
  link: string;
  category: string;
}