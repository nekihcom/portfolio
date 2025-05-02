import NoteArticleCard from "./NoteArticleCard";
import { ParsedNoteItem } from "@/type/type";

interface NoteArticleListProps {
  allArticles: ParsedNoteItem[];
}

export default function NoteArticleList({ allArticles }: NoteArticleListProps) {
  return (
    <>
      {allArticles.map((article, index) => (
        <div key={article.guid} className="w-11/12 sm:w-full md:w-[240px]">
          <NoteArticleCard note={article} index={index} />
        </div>
      ))}
    </>
  );
}