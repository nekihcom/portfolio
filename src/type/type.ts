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