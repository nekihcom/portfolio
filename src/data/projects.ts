import { getPlaceholderImageUrl, imageSizes } from "@/config/images"

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
    image: "/portfolio/mchkn.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "ECサイト",
    description: "ReactとFirebaseを使用したECサイト",
    image: getPlaceholderImageUrl(imageSizes.project.width, imageSizes.project.height),
    technologies: ["React", "Firebase", "Stripe"]
  },
  {
    title: "タスク管理アプリ",
    description: "Vue.jsとNode.jsを使用したタスク管理アプリ",
    image: getPlaceholderImageUrl(imageSizes.project.width, imageSizes.project.height),
    technologies: ["Vue.js", "Node.js", "MongoDB"]
  }
] 