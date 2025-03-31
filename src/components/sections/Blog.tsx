"use client"

import { motion } from "framer-motion"
import { ParallaxSection } from "@/components/ui/ParallaxSection"

export function Blog() {
  return (
    <ParallaxSection className="bg-white">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8"
        >
          Blog
        </motion.h2>
        <p className="text-gray-600">Coming soon...</p>
      </div>
    </ParallaxSection>
  )
} 