import type { Profile, DetailedProfile } from "@/types/type";

export const profile: Profile = {
  name: "もちけん",
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

export const detailedProfile: DetailedProfile = {
  ...profile,
  skills: [
    // 言語
    { name: "PHP", category: "language", level: 3 },
    { name: "JavaScript", category: "language", level: 3 },
    { name: "Python", category: "language", level: 3 },
    { name: "SQL", category: "language", level: 3 },
    { name: "Java", category: "language", level: 2 },
    { name: "TypeScript", category: "language", level: 2 },
    { name: "Go", category: "language", level: 1 },
    { name: "Ruby", category: "language", level: 1 },
    // フレームワーク
    { name: "Symfony", category: "framework", level: 3 },
    { name: "Next.js", category: "framework", level: 3 },
    { name: "React", category: "framework", level: 3 },
    { name: "jQuery", category: "framework", level: 3 },
    { name: "Django", category: "framework", level: 1 },
    { name: "Rails", category: "framework", level: 1 },
    // ミドルウェア
    { name: "MySQL", category: "middleware", level: 3 },
    { name: "PostgreSQL", category: "middleware", level: 3 },
    { name: "Apache", category: "middleware", level: 3 },
    // CMS
    { name: "Drupal", category: "cms", level: 3 },
    { name: "WordPress", category: "cms", level: 3 },
    // CI/CD
    { name: "GitHub Actions", category: "cicd", level: 3 },
    { name: "Vercel", category: "cicd", level: 3 },
    // インフラ
    { name: "AWS", category: "infrastructure", level: 3 },
    { name: "CloudFlare", category: "infrastructure", level: 3 },
    // ツール
    { name: "Git", category: "tool", level: 3 },
    { name: "GitHub", category: "tool", level: 2 },
    { name: "Figma", category: "tool", level: 2 },
    { name: "Docker", category: "tool", level: 1 },
    { name: "Storybook", category: "tool", level: 1 },
  ],
  workExperience: [
    {
      company: "成蹊大学理工学部情報科学科",
      position: "学生",
      startDate: "2015-04",
      endDate: "2019-03",
      description: [
        "アルゴリズム、プログラミング、ネットワーク、セキュリティ等、情報科学に関することを広く学習",
        "人工知能、特に自然言語処理に関する研究",
        "卒業研究：X(Twitter)のデータを学習したモデルによる文章生成モデルの構築",
      ],
      technologies: ["Python", "Tensorflow", "Keras", "Java", "C++"],
    },
    {
      company: "日系システムインテグレーター（SIer）",
      position: "ソフトウェアエンジニア",
      startDate: "2019-04",
      description: [
        "Webアプリケーションの開発・保守運用",
        "フロントエンド・バックエンドの設計・実装",
        "チームリーダーとしてのプロジェクトマネジメント",
      ],
      technologies: ["Drupal", "PHP", "JavaScript", "MySQL", "AWS", "PowerBI"],
    },
  ],
  projects: [
    {
      title: "ポートフォリオサイト",
      description: "エンジニアとしての実績をまとめたポートフォリオサイト",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      url: "https://www.mchkn.com",
      startDate: "2025-11",
      endDate: "2025-11",
    },
  ],
  certifications: [
    {
      name: "基本情報技術者",
      issuedDate: "2018-11",
      issuer: "IPA",
    },
    {
      name: "応用情報技術者",
      issuedDate: "2020-12",
      issuer: "IPA",
    },
    {
      name: "Drupal Site Builder",
      issuedDate: "2022-03",
      issuer: "Acquia",
    },
    {
      name: "統計検定3級",
      issuedDate: "2024-04",
      issuer: "日本統計学会",
    },
    {
      name: "TOEIC 655点",
      issuedDate: "2025-02",
      issuer: "IIBC",
    },
    {
      name: "統計検定2級",
      issuedDate: "2025-04",
      issuer: "日本統計学会",
    },
  ],
};

