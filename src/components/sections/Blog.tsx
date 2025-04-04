"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { blogData } from "@/data/blog"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "../../components/ui/SectionTitle"
import { formatDate } from "@/lib/utils"
import Link from "next/link"

export const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle>Blog</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
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
                <time className="text-sm text-gray-500">{formatDate(post.date)}</time>
                <h3 className="mt-2 text-xl font-bold">
                  <Link href={post.url} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-4 text-gray-600">{post.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
} 