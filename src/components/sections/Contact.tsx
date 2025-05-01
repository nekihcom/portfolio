"use client"

import { motion } from "framer-motion"

import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"


export const Contact = () => {

  return (
    <section id="contact" className="min-h-screen flex items-center bg-gray-50">
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="mb-8 text-gray-600">
            ご質問やお問い合わせは、下記のフォームよりお願いいたします。
          </p>
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeRWwNv5Fyxqmv6AJQuzAJWonAyoSAd1rerzl9ncV1dyM-zgA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ちょっとしたことでもご相談ください
          </motion.a>
        </motion.div>
      </Container>
    </section>
  )
  
} 