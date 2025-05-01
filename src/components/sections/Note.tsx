import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import NoteArticleList from "@/components/ui/NoteArticleList"
import { getMyAllNotePosts } from "@/lib/hook/useArticle"

export default async function Note() {
  const { noteItems } = await getMyAllNotePosts()

  return (
    <section id="note" className="min-h-screen flex items-center bg-gray-50">
      <Container>
        <SectionTitle>Note</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NoteArticleList allArticles={noteItems} />
        </div>
      </Container>
    </section>
  )
} 