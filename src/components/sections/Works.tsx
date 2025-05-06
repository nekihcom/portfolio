"use client"

import { useMemo, lazy, Suspense } from "react"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { WorkCard } from "@/components/ui/WorkCard"

const MotionDiv = lazy(() => import("framer-motion").then((mod) => ({ default: mod.motion.div })))

type Work = {
  title: string
  description: string
  image: string
  technologies: string[]
  url?: string
  path: string
  detailFlg: boolean
}

const worksData: Work[] = [
  {
    title: "note2Wordpress",
    description: "noteの記事をWordpressに移行するためのツール",
    image: "/portfolio/note2wordpress.jpeg",
    technologies: ["Python", ],
    url: "https://github.com/nekihcom/note2wordpress",
    path: "note2wordpress",
    detailFlg: false
  },
  {
    title: "Qiita2Wordpress",
    description: "Qiitaの記事をWordpressに移行するためのツール",
    image: "/portfolio/qiita2wordpress.jpeg",
    technologies: ["Python", ],
    url: "https://github.com/nekihcom/qiita2wordpress",
    path: "qiita2wordpress",
    detailFlg: false
  },
  {
    title: "ポートフォリオサイト",
    description: "Next.jsとTypeScriptを使用したポートフォリオサイト",
    image: "/portfolio/mchkn.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://www.mchkn.com",
    path: "portfolio",
    detailFlg: false
  },
] 

export default function Works() {
  const works = useMemo(() => worksData, [])

  return (
    <SectionContainer id="works" className="my-24">
      <SectionTitle>Works</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {works.map((work, index) => (
          <Suspense key={index} fallback={
            <div className="bg-white rounded-lg shadow-md overflow-hidden w-11/12 sm:w-full md:w-[240px]">
              <WorkCard {...work} />
            </div>
          }>
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ 
                duration: 0.3,
                delay: Math.min(index * 0.05, 0.3),
                ease: "easeOut"
              }}
              className="bg-white rounded-lg shadow-md overflow-hidden w-11/12 sm:w-full md:w-[240px]"
            >
              <WorkCard {...work} />
            </MotionDiv>
          </Suspense>
        ))}
      </div>
    </SectionContainer>
  )
} 