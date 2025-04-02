"use client"

import { ParallaxSection } from "@/components/ui/ParallaxSection"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { profileData } from "@/data/profile"

export function Profile() {
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
          className="max-w-3xl mx-auto text-center"
        >
          {/* <h2 className="text-4xl font-bold mb-8">Profile</h2> */}
          <div className="space-y-6">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
              <Image
                src={profileData.image}
                alt="プロフィール画像"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">{profileData.name}</h3>
              <p className="text-gray-600">{profileData.title}</p>
            </div>
            <p className="text-gray-600">
              {profileData.description}
            </p>
            <div className="flex justify-center space-x-4">
              {profileData.socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label={link.name}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d={link.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                href="/profile"
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                プロフィール詳細へ
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </ParallaxSection>
  )
} 