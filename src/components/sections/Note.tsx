import { getMyAllNotePosts } from "@/lib/hook/useArticle"
import { SectionTitle } from "@/components/ui/SectionTitle"
import NoteArticleList from "@/components/ui/NoteArticleList"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { BgLink } from "@/components/ui/BgLink"

export default async function Note() {
  const { noteItems } = await getMyAllNotePosts()

  return (
    <SectionContainer id="note" className="bg-gray-300a">
      <SectionTitle>note</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NoteArticleList allArticles={noteItems} />
      </div>
      <div className="text-center mt-8">
        <BgLink
          href="https://note.com/nekihcom"
          target="_blank"
          rel="noopener noreferrer"
          text="noteを見てみる"
          style="bg-gray-600 text-white hover:bg-gray-700"
        />
      </div>
    </SectionContainer>
  )
} 