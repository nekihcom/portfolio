import { SectionTitle } from "@/components/ui/SectionTitle"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { ExploreLink } from "@/components/ui/ExploreLink";
import NoteList from "@/components/ui/NoteList";
import data from "@/lib/rss/data.json";

export default async function Note() {

  // 表示するブログ記事を最大6件に制限
  const displayNoteItems = data.slice(0, 6);
  // 7件以上あるかどうかを判定
  const hasMoreNoteItems = data.length > 6;
  return (
    <SectionContainer id="note" className="my-24">
      <SectionTitle>Note</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <NoteList allArticles={displayNoteItems} />
      </div>
      {hasMoreNoteItems && (
        <div className="mt-8">
          <ExploreLink
            href="https://note.com/nekihcom"
            jaText="Noteの記事をもっと見る"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      )}
    </SectionContainer>
  )
} 
