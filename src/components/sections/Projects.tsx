"use client"

import { useMemo, lazy, Suspense } from "react"
import { projectsData } from "@/data/projects"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { ProjectCard } from "@/components/ui/ProjectCard"

const MotionDiv = lazy(() => import("framer-motion").then((mod) => ({ default: mod.motion.div })))

export default function Projects() {
  const projects = useMemo(() => projectsData, [])

  return (
    <SectionContainer id="projects" className="bg-gray-300a">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <Suspense key={index} fallback={
            <div className="bg-white rounded-lg shadow-md overflow-hidden w-11/12 sm:w-full md:w-[240px]">
              <ProjectCard {...project} />
            </div>
          }>
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.3,
                delay: Math.min(index * 0.05, 0.3),
                ease: "easeOut"
              }}
              className="bg-white rounded-lg shadow-md overflow-hidden w-11/12 sm:w-full md:w-[240px]"
            >
              <ProjectCard {...project} />
            </MotionDiv>
          </Suspense>
        ))}
      </div>
    </SectionContainer>
  )
} 