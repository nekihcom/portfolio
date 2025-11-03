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

