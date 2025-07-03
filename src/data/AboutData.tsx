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
    location: "日本",
    email: "contact@mchkn.com",
    description: "フロントエンド開発を中心に、ユーザー体験を重視したWebアプリケーションの開発を行っています。React、Next.js、TypeScriptを得意とし、パフォーマンスとアクセシビリティを意識した開発を心がけています。",
  },

  // スキル
  skills: {
    frontend: [
      { name: "React", level: 5, emoji: "⚛️" },
      { name: "Next.js", level: 4, emoji: "🚀" },
      { name: "TypeScript", level: 4, emoji: "📘" },
      { name: "JavaScript", level: 5, emoji: "🟨" },
      { name: "HTML/CSS", level: 5, emoji: "🎨" },
      { name: "Tailwind CSS", level: 3, emoji: "🎯" },
    ],
    backend: [
      { name: "Node.js", level: 3, emoji: "🟢" },
      { name: "Express", level: 2, emoji: "⚡" },
      { name: "PostgreSQL", level: 2, emoji: "🐘" },
      { name: "MongoDB", level: 1, emoji: "🍃" },
    ],
    tools: [
      { name: "Git", level: 4, emoji: "📝" },
      { name: "Docker", level: 2, emoji: "🐳" },
      { name: "AWS", level: 1, emoji: "☁️" },
      { name: "Vercel", level: 5, emoji: "▲" },
    ],
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

  // 趣味・興味
  hobbies: [
    { name: "野球", emoji: "⚾️", description: "学生時代から続けている野球。技術向上とチームワークの大切さを学びました。" },
    { name: "バドミントン", emoji: "🏸", description: "週末の運動として楽しんでいます。集中力と反射神経の向上に役立っています。" },
    { name: "散歩", emoji: "🚶", description: "新しいアイデアを考える時間として活用。自然の中を歩くことでリフレッシュできます。" },
    { name: "YouTube", emoji: "📷", description: "技術動画やエンターテイメント動画を視聴。新しい技術トレンドの情報収集に役立っています。" },
  ],

  // 目標・価値観
  goals: [
    { title: "技術向上", emoji: "📈", description: "常に新しい技術を学び、より良いユーザー体験を提供できるエンジニアを目指します。" },
    { title: "ユーザー第一", emoji: "👥", description: "ユーザーのニーズを最優先に考え、使いやすく価値のあるアプリケーションを開発します。" },
    { title: "継続的改善", emoji: "🔄", description: "コードの品質向上とパフォーマンス最適化を継続的に行い、より良いプロダクトを作り続けます。" },
  ],
}; 