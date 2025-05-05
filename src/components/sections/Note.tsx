import { getMyAllNotePosts } from "@/lib/hook/useArticle"
import { SectionTitle } from "@/components/ui/SectionTitle"
import NoteArticleList from "@/components/ui/NoteArticleList"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { ExploreLink } from "@/components/ui/ExploreLink"

export default async function Note() {
  const { noteItems } = await getMyAllNotePosts()

  return (
    <SectionContainer id="note" className="mt-24 mb-36">
      <SectionTitle>note</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <NoteArticleList allArticles={noteItems} />
      </div>
      <div className="mt-8">
        <ExploreLink
          href="https://note.com/nekihcom"
          jaText="noteをもっと見る"
        />
      </div>
    </SectionContainer>
  )
} 