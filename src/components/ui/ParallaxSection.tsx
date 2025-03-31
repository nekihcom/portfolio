"use client"

import { Parallax } from "react-scroll-parallax"
import { motion } from "framer-motion"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
  id?: string
}

export function ParallaxSection({
  children,
  className = "",
  speed = -20,
  id,
}: ParallaxSectionProps) {
  return (
    <Parallax speed={speed}>
      <motion.div
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={className}
      >
        {children}
      </motion.div>
    </Parallax>
  )
} 