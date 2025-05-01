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
] 