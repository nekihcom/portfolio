"use client"

import { motion } from "framer-motion"

import { projectsData } from "@/data/projects"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { ProjectCard } from "@/components/ui/ProjectCard"

export const Projects = () => {
  return (
    <SectionContainer id="projects" className="bg-gray-300a">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  )
} 