export interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
}

export const projectsData: Project[] = [
  {
    title: "ポートフォリオサイト",
    description: "Next.jsとTypeScriptを使用したポートフォリオサイト",
    image: "https://placehold.jp/800x450.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "ECサイト",
    description: "ReactとFirebaseを使用したECサイト",
    image: "https://placehold.jp/800x450.png",
    technologies: ["React", "Firebase", "Stripe"]
  },
  {
    title: "タスク管理アプリ",
    description: "Vue.jsとNode.jsを使用したタスク管理アプリ",
    image: "https://placehold.jp/800x450.png",
    technologies: ["Vue.js", "Node.js", "MongoDB"]
  }
] 