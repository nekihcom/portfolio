export type Work = {
  title: string
  description: string
  image: string
  technologies: string[]
  url?: string
}

export const worksData: Work[] = [
  {
    title: "note2Wordpress",
    description: "noteの記事をWordpressに移行するためのツール",
    image: "/portfolio/note2wordpress.jpeg",
    technologies: ["Python", ],
    url: "https://github.com/nekihcom/note2wordpress"
  },
  {
    title: "Qiita2Wordpress",
    description: "Qiitaの記事をWordpressに移行するためのツール",
    image: "/portfolio/qiita2wordpress.jpeg",
    technologies: ["Python", ],
    url: "https://github.com/nekihcom/qiita2wordpress"
  },
  {
    title: "ポートフォリオサイト",
    description: "Next.jsとTypeScriptを使用したポートフォリオサイト",
    image: "/portfolio/mchkn.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://www.mchkn.com"
  },
] 