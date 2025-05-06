"use client"

import { useMemo, lazy, Suspense } from "react"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { WorkCard } from "@/components/ui/WorkCard"
import { useWorks } from "@/hooks/useWorks"

const MotionDiv = lazy(() => import("framer-motion").then((mod) => ({ default: mod.motion.div })))

export default function Works() {
  const { works, isLoading, error } = useWorks();

  if (isLoading) {
    return (
      <SectionContainer id="works" className="my-24">
        <SectionTitle>Works</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden w-11/12 sm:w-full md:w-[240px] animate-pulse">
              <div className="aspect-video bg-gray-200" />
            </div>
          ))}
        </div>
      </SectionContainer>
    );
  }

  if (error) {
    return (
      <SectionContainer id="works" className="my-24">
        <SectionTitle>Works</SectionTitle>
        <div className="text-center text-red-500">
          Failed to load works. Please try again later.
        </div>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer id="works" className="my-24">
      <SectionTitle>Works</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {works.map((work, index) => (
          <Suspense key={work.id} fallback={
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