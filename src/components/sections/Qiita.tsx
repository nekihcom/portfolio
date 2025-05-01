import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import QiitaArticleList from "@/components/ui/QiitaArticleList"
import { getMyAllQiitaPosts } from "@/lib/hook/useArticle"
import Link from "next/link"

export default async function Qiita() {
  const { qiitaItems } = await getMyAllQiitaPosts()

  return (
    <section id="qiita" className="min-h-screen flex items-center bg-gray-50">
      <Container>
        <SectionTitle>Qiita</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <QiitaArticleList allArticles={qiitaItems} />
        </div>
        <div className="text-center mt-8">
          <Link
            href="https://qiita.com/nekihcom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Qiitaプロフィールを見る
          </Link>
        </div>
      </Container>
    </section>
  )
} 