"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { profileData } from "@/data/profile"


export const Profile = () => {

  // SNSリンクのスタイルを定義
  const getSnsStyle = (name: string) => {
    switch (name) {
      case "X (Twitter)":
        return "bg-gray-900 hover:bg-gray-800 text-white"
      case "GitHub":
        return "bg-gray-700 hover:bg-gray-600 text-white"
      case "LinkedIn":
        return "bg-blue-800 hover:bg-blue-700 text-white"
      case "Qiita":
        return "bg-green-600 hover:bg-green-500 text-white"
      default:
        return "bg-gray-50 hover:bg-gray-100 text-gray-900"
    }
  }

  return (
    <section id="profile" className="bg-gray-50 min-h-screen flex items-center">
      <Container>
        <SectionTitle>Profile</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* プロフィールブロック */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:ml-[200px]"
          >
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image
                src={profileData.image}
                alt={profileData.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-1">{profileData.name}</h3>
            <p className="text-gray-600 mb-1">{profileData.fullName}</p>
            <p className="text-teal-600 font-medium">{profileData.title}</p>
          </motion.div>

          {/* SNSブロック */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4 max-w-[330px]">
              {profileData.socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-sm ${getSnsStyle(link.name)}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {link.iconImage ? (
                    <Image
                      src={link.iconImage}
                      alt={link.name}
                      width={24}
                      height={24}
                      className="mr-3"
                    />
                  ) : (
                    <svg
                      className="w-6 h-6 mr-3"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d={link.icon} />
                    </svg>
                  )}
                  <span className="font-medium">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 自己紹介文ブロック */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <p
            className="text-gray-600 mb-6"
            dangerouslySetInnerHTML={{ __html: profileData.description }}
          />
          <Link
            href="/about"
            className="inline-block px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            もっと知る
          </Link>
        </motion.div>
      </Container>
    </section>
  )
  
} 