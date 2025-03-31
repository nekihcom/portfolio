"use client"

import { cn } from "@/lib/utils"
import { Parallax } from "react-scroll-parallax"

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
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <Parallax
        translateY={[-20, 20]}
        className={cn("absolute inset-0", backgroundClassName)}
      />
      <div className="relative z-10">{children}</div>
    </section>
  )
} 