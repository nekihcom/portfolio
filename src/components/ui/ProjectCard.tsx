import Image from "next/image"

import { Project } from "@/data/projects"

export const ProjectCard = (project: Project) => {
  return (
    <>
      <div className="aspect-video relative">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
      />
    </div>
    {/* <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <Tag key={techIndex} tech={tech} />
          ))}
      </div>
    </div> */}
    </>
  )
}