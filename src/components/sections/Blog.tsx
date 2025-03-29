"use client"

import { cn } from "@/lib/utils"
import { ParallaxSection } from "@/components/ui/ParallaxSection"
import { motion } from "framer-motion"
import Image from "next/image"

const posts = [
  {
    title: "ブログ記事1",
    date: "2024-03-29",
    excerpt: "ブログ記事の抜粋がここに入ります。",
    image: "https://placehold.jp/800x450.png",
  },
  {
    title: "ブログ記事2",
    date: "2024-03-28",
    excerpt: "ブログ記事の抜粋がここに入ります。",
    image: "https://placehold.jp/800x450.png",
  },
  {
    title: "ブログ記事3",
    date: "2024-03-27",
    excerpt: "ブログ記事の抜粋がここに入ります。",
    image: "https://placehold.jp/800x450.png",
  },
]

export function Blog() {
  return (
    <ParallaxSection
      className="min-h-screen py-20"
      backgroundClassName="bg-gradient-to-br from-purple-50 to-pink-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Blog</h2>
          <p className="text-gray-600">技術記事や日々の学びを発信しています。</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-video relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-500 mb-2 block">{post.date}</time>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </ParallaxSection>
  )
} 