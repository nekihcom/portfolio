"use client"

import { ParallaxSection } from "@/components/ui/ParallaxSection"
import { Container } from "@/components/ui/Container"
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
      {/* <Container> */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* プロフィール情報 */}
            <div className="flex-[2.5] text-center md:text-left min-w-0">
              <div className="w-48 h-48 mx-auto md:mx-0 rounded-full overflow-hidden mb-6">
                <Image
                  src={profileData.image}
                  alt="プロフィール画像"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="max-w-2xl">
                <h3 className="text-2xl font-semibold mb-2">
                  <span>{profileData.name}</span>
                  <br />
                  <span>{profileData.fullName}</span>
                </h3>
                <p className="text-gray-600 mb-4 whitespace-nowrap">{profileData.title}</p>
              </div>
            </div>

            {/* SNSリンク */}
            <div className="flex-1 w-full max-w-md">
              <div className="space-y-4">
                {profileData.socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label={link.name}
                  >
                    <svg
                      className="w-6 h-6 mr-4 text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d={link.icon} />
                    </svg>
                    <span className="text-gray-600">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* 自己紹介文とプロフィールページへのリンク */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              {profileData.description}
            </p>
            <Link
              href="/profile"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              プロフィール詳細へ
            </Link>
          </motion.div>
        </motion.div>
      {/* </Container> */}
    </ParallaxSection>
  )
} 