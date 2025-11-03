import type { Profile } from "@/types/profile";

export const profile: Profile = {
  name: "もちけん / Masaya Kemmochi",
  occupation: "Software Engineer",
  bio: "'97 / SIer所属 / 左利き / 歯列矯正中<br>千葉ロッテマリーンズが好きで、イコラブにハマってます。",
  imageUrl: "/profile/avatar.jpg", // ダミー画像用のパス
  socialLinks: [
    {
      platform: "x",
      url: "https://x.com/nekihcom",
    },
    {
      platform: "youtube",
      url: "https://www.youtube.com/@nekihcom",
    },
    {
      platform: "note",
      url: "https://note.com/nekihcom",
    },
    {
      platform: "qiita",
      url: "https://qiita.com/nekihcom",
    },
  ],
};

