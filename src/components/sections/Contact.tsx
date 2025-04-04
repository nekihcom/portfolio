"use client"

import { Container } from "@/components/ui/Container"
import { SectionTitle } from "../../components/ui/SectionTitle"

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle>お問い合わせ</SectionTitle>
        <div className="text-center">
          <p className="mb-8 text-gray-600">
            ご質問やお問い合わせは、下記のフォームよりお願いいたします。
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeRWwNv5Fyxqmv6AJQuzAJWonAyoSAd1rerzl9ncV1dyM-zgA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            お問い合わせフォーム
          </a>
        </div>
      </Container>
    </section>
  )
} 