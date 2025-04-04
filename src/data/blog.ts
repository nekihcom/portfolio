export interface BlogPost {
  title: string
  date: string
  excerpt: string
  image: string
  url: string
}

export const blogData: BlogPost[] = [
  {
    title: "Next.jsでポートフォリオサイトを作成する方法",
    date: "2023-05-15",
    excerpt: "Next.jsとTypeScriptを使用してポートフォリオサイトを作成する方法を解説します。",
    image: "/images/blog/nextjs-portfolio.jpg",
    url: "https://example.com/blog/nextjs-portfolio"
  },
  {
    title: "Tailwind CSSの使い方と便利なテクニック",
    date: "2023-04-20",
    excerpt: "Tailwind CSSの基本的な使い方と、効率的にスタイリングするためのテクニックを紹介します。",
    image: "/images/blog/tailwind-css.jpg",
    url: "https://example.com/blog/tailwind-css"
  },
  {
    title: "TypeScriptで型安全なコードを書く",
    date: "2023-03-10",
    excerpt: "TypeScriptを使用して型安全なコードを書く方法と、そのメリットについて解説します。",
    image: "/images/blog/typescript.jpg",
    url: "https://example.com/blog/typescript"
  }
] 