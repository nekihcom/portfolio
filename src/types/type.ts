export type TSocialLinksObject = {
  [key: string]: string;
};

export interface IProfile {
  name: string;
  title: string;
  created: string;
  field_bio: string;
  field_thumbnail: string;
  field_link: TSocialLinksObject;
  field_job: string;
}

export interface IBlogArticle {
  nid: string;
  title: string;
  created: string;
  field_category?: string;
  field_url?: string;
  field_thumbnail?: string;
  body?: string;
}