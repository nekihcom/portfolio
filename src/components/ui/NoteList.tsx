import NoteCard from "./NoteCard";
import { Note } from "@/type/type";

interface NoteListProps {
  allArticles: Note[];
}

export default function NoteList({ allArticles }: NoteListProps) {
  return (
    <>
      {allArticles.map((article, index) => (
        <div key={article.link} className="w-11/12 sm:w-full md:w-[300px]">
          <NoteCard note={article} index={index} />
        </div>
      ))}
    </>
  );
} 