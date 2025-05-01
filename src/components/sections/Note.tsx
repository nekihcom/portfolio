import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import NoteArticleList from "@/components/ui/NoteArticleList"
import { getMyAllNotePosts } from "@/lib/hook/useArticle"
import Link from "next/link"

export default async function Note() {
  const { noteItems } = await getMyAllNotePosts()

  return (
    <section id="note" className="min-h-screen flex items-center bg-gray-50">
      <Container>
        <SectionTitle>note</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NoteArticleList allArticles={noteItems} />
        </div>
        <div className="mt-8 text-center">
          <Link
            href="https://note.com/nekihcom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm"
          >
            noteのプロフィールを見る
          </Link>
        </div>
      </Container>
    </section>
  )
} 