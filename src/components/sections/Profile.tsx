"use client"

import { cn } from "@/lib/utils"
import { ParallaxSection } from "@/components/ui/ParallaxSection"
import { motion } from "framer-motion"
import Image from "next/image"

export function Profile() {
  return (
    <ParallaxSection
      className="min-h-screen flex items-center justify-center"
      backgroundClassName="bg-gradient-to-br from-blue-50 to-indigo-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">Profile</h2>
          <div className="space-y-6">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
              <Image
                src="https://placeholder.jp/192×192.png"
                alt="プロフィール画像"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Your Name</h3>
              <p className="text-gray-600">Full Stack Developer</p>
            </div>
            <p className="text-gray-600">
              ここに自己紹介文を記載します。
            </p>
          </div>
        </motion.div>
      </div>
    </ParallaxSection>
  )
} 