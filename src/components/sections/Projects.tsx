"use client"

import { ParallaxSection } from "@/components/ui/ParallaxSection"
import { Container } from "@/components/ui/Container"
import { motion } from "framer-motion"
import Image from "next/image"
import { projectsData } from "@/data/projects"
import { containerWidth } from "@/lib/utils"

export function Projects() {
  return (
    <ParallaxSection
      className="min-h-screen flex items-center justify-center"
      backgroundClassName="bg-white"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-gray-600">これまでに制作したプロジェクト一覧です。</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-video relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </ParallaxSection>
  )
} 