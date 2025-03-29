"use client"

import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  backgroundClassName?: string
}

export function ParallaxSection({
  children,
  className,
  backgroundClassName,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <section ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        className={cn("absolute inset-0", backgroundClassName)}
        style={{ y, opacity }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  )
} 