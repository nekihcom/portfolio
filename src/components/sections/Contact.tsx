"use client"

import { motion } from "framer-motion"
import { ParallaxSection } from "@/components/ui/ParallaxSection"

export function Contact() {
  return (
    <ParallaxSection className="bg-gray-50">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8"
        >
          Contact
        </motion.h2>
        <p className="text-gray-600">Coming soon...</p>
      </div>
    </ParallaxSection>
  )
} 