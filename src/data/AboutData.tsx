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
      period: "2023.4 - 現在",
      title: "テックリード/PL",
      company: "日系SIer",
      description: 
        <>
        テックリードとして設計や開発、テスト時のメンバー作業の支援や、テンプレートの作成や整備、運用を行いました。<br />
        またプロジェクトリーダーとしてはメンバーの進捗や課題、品質管理を実施しました。
        </>,
      achievements: [
        "チームマネジメント",
        "設計や製造、テストのチーム標準の整備や運用",
        "パフォーマンス改善",
      ],
    },
    {
      period: "2022.4 - 現在",
      title: "IT教育アシスタント",
      company: "業務委託",
      description: 
        <>
        AWSやGitの講座におけるアシスタントを担当しました。
        </>,
      achievements: [
        "受講者からの質問への回答",
        "補足教材の作成や動画編集",
        "新規教材作成のための技術検証",
      ],
    },
    {
      period: "2019.4 - 2023.3",
      title: "アプリケーションエンジニア",
      company: "日系SIer",
      description: <>会員制ポータルサイトやコーポレートサイトの構築、運用を行いました。<br/>フロントエンドからバックエンドまで幅広く担当しました。</>,
      achievements: [
        "CMSを使ったフロントエンド/バックエンドの開発",
        "要件定義〜リリース、保守運用といったシステム開発の流れを一通り経験", 
        "チームでのシステム開発の経験",
        "顧客折衝",
        "障害/セキュリティインシデント対応"
      ],
    },
    {
      period: "2015.4 - 2019.3",
      title: "学生時代",
      company: "成蹊大学理工学部情報科学科",
      description: <>情報数学やアルゴリズム、ネットワーク、データベース、セキュリティなど幅広く学びました。<br/>３年次以降は自然言語処理を専攻とし、Twitterのデータを使った言語生成モデルを構築しました。</>,
      achievements: [
        "ITに関する基礎的な知識を幅広く習得",
        "オブジェクト指向言語の習得",
        "大規模テキストデータを使った文章生成モデルの構築",
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