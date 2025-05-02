import NoteArticleCard from "./NoteArticleCard";
import { ParsedNoteItem } from "@/type/type";

interface NoteArticleListProps {
  allArticles: ParsedNoteItem[];
}

export default function NoteArticleList({ allArticles }: NoteArticleListProps) {
  return (
    <>
      {allArticles.map((article, index) => (
        <div key={article.guid} className="w-[300px]">
          <NoteArticleCard note={article} index={index} />
        </div>
      ))}
    </>
  );
}