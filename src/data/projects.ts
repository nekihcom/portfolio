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
    image: "/images/projects/portfolio.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "ECサイト",
    description: "ReactとFirebaseを使用したECサイト",
    image: "/images/projects/ec-site.jpg",
    technologies: ["React", "Firebase", "Stripe"]
  },
  {
    title: "タスク管理アプリ",
    description: "Vue.jsとNode.jsを使用したタスク管理アプリ",
    image: "/images/projects/task-app.jpg",
    technologies: ["Vue.js", "Node.js", "MongoDB"]
  }
] 