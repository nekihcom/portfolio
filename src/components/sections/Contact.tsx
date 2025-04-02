"use client"

import { ParallaxSection } from "@/components/ui/ParallaxSection"
import { motion } from "framer-motion"
import { containerWidth } from "@/lib/utils"

export function Contact() {
  return (
    <ParallaxSection
      className="min-h-screen flex items-center justify-center"
      backgroundClassName="bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`${containerWidth.sm} md:${containerWidth.md} lg:${containerWidth.lg} mx-auto`}
        >
          <h2 className="text-4xl font-bold mb-8">お問い合わせ</h2>
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeRWwNv5Fyxqmv6AJQuzAJWonAyoSAd1rerzl9ncV1dyM-zgA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            お問い合わせフォームへ
          </motion.a>
        </motion.div>
      </div>
    </ParallaxSection>
  )
} 