"use client"

import { motion } from "framer-motion"
import { ParallaxSection } from "@/components/ui/ParallaxSection"

export function MainVisual() {
  return (
    <ParallaxSection className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300"
        >
          I&apos;m a passionate developer creating amazing web experiences
        </motion.p>
      </div>
    </ParallaxSection>
  )
} 