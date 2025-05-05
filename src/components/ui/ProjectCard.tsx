import Image from "next/image"
import Link from "next/link"
import { Project } from "@/data/projects"

export const ProjectCard = (project: Project) => {
  return (
    <Link 
      href={project.url || "#"} 
      target={project.url ? "_blank" : undefined}
      rel={project.url ? "noopener noreferrer" : undefined}
      className="group relative block"
    >
      <div className="aspect-video relative">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <h3 className="text-white text-xl font-semibold">{project.title}</h3>
        </div>
      </div>
    </Link>
  )
}