export interface SocialLink {
  platform: "x" | "youtube" | "note" | "qiita";
  url: string;
}

export interface Profile {
  name: string;
  occupation: string;
  imageUrl: string;
  socialLinks: SocialLink[];
}

