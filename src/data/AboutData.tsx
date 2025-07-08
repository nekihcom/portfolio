/**
 * 自己紹介ページのデータ定義
 * プロフィール、スキル、経歴、趣味などの詳細情報を管理
 */
export const aboutData = {
  // 基本プロフィール
  profile: {
    profileImage: "/image.webp",
    name: "もちけん / Mochiken",
    jobTitle: "Application Engineer",
    location: "Tokyo, Japan",
    email: "mchkn.dev@gmail.com",
    description: <>toC向けWebアプリケーションや業務システムなど幅広く開発を行っています。<br />フロントエンド・バックエンド問わず、また要件定義からリリースまで一気通貫で対応できることが強みです。</>,
  },

  // 経歴
  experience: [
    {
      period: "2023 - 現在",
      title: "フリーランスエンジニア",
      company: "フリーランス",
      description: "フロントエンド開発を中心としたWebアプリケーション開発。React、Next.js、TypeScriptを使用したモダンな開発を行っています。",
      achievements: [
        "ポートフォリオサイトの構築・運用",
        "ブログシステムの開発",
        "パフォーマンス最適化の実装",
      ],
    },
    {
      period: "2022 - 2023",
      title: "Webエンジニア",
      company: "IT企業",
      description: "企業向けWebアプリケーションの開発・保守。フロントエンドからバックエンドまで幅広く担当。",
      achievements: [
        "React/TypeScriptを使用したSPA開発",
        "RESTful APIの設計・実装",
        "CI/CDパイプラインの構築",
      ],
    },
    {
      period: "2021 - 2022",
      title: "プログラミング学習",
      company: "独学",
      description: "Web開発の基礎から応用まで独学で学習。個人プロジェクトを通じて実践的なスキルを身につけました。",
      achievements: [
        "HTML/CSS/JavaScriptの基礎習得",
        "React、Vue.jsの学習",
        "個人プロジェクトの開発",
      ],
    },
  ],

  // 主なプロジェクト
  projects: [
    {
      name: "ポートフォリオサイト",
      period: "2024",
      description: "Next.js + TypeScript + Tailwind CSSで構築した個人ポートフォリオサイト",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "microCMS", "Vercel"],
      url: "https://mchkn.com",
    },
    {
      name: "ECサイト管理システム",
      period: "2023",
      description: "React + Node.jsで開発したECサイトの管理画面システム",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "AWS"],
      url: null,
    },
    {
      name: "社内勤怠管理アプリ",
      period: "2022",
      description: "Vue.js + PHPで開発した社内勤怠管理Webアプリケーション",
      technologies: ["Vue.js", "PHP", "MySQL", "Apache"],
      url: null,
    },
    {
      name: "ブログプラットフォーム",
      period: "2021",
      description: "WordPressをカスタマイズした企業向けブログプラットフォーム",
      technologies: ["WordPress", "PHP", "MySQL", "CSS"],
      url: null,
    },
  ],

  // 目標・価値観
  goals: [
    { title: "技術向上", emoji: "📈", description: "常に新しい技術を学び、より良いユーザー体験の提供や課題解決を実行できるエンジニアを目指しています。" },
    { title: "最適化", emoji: "♻️", description: "何事も「より良いやり方は無いか？」という視点で取り組み、最適なソリューションを提供することを意識しています。" },
  ],

  // 趣味・興味
  hobbies: <>⚾️野球 / 🏸バドミントン / 🚶散歩 / 📷YouTube</>,

  // スキルカテゴリリスト
  skillList: [
    {
      category: "🎨 フロントエンド",
      items: [
        "HTML / CSS / Javascript / TypeScript", 
        "React / Next.js / Tailwind CSS / Sass / jQuery"
      ]
    },
    {
      category: "⚙️ バックエンド",
      items: [
        "Java / PHP / Python", 
        "Symfony / Django"
      ]
    },
    {
      category: "🗂️ CMS",
      items: [
        "Drupal / Wordpress / microCMS"
      ]
    },
    {
      category: "🔧 ミドルウェア",
      items: [
        "Apache / SQL / MySQL / PostgreSQL"
      ]
    },
    {
      category: "☁️ インフラ",
      items: [
        "AWS(VPC / EC2 / Route53 / RDS / S3 / Cloudwatch / Redshift / Lightsail / Amplify)"
      ]
    },
    {
      category: "🔖 その他",
      items: [
        "Git / GitHub / GitHub Actions",
        "Vercel / Netlify",
        "Linux / Windows / MacOS",
        "Figma / Adobe XD / Canva",
        "GoogleAnalytics / GoogleTagManager",
        "PowerBI"
      ]
    }
  ],
}; 