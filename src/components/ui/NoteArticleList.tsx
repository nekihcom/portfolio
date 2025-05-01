import NoteArticleCard from "./NoteArticleCard";
import { ParsedNoteItem } from "@/type/type";


const NoteArticleList = (props:{allArticles:Array<ParsedNoteItem>}) => {

  const { allArticles } = props;

  return (
    <>
      {allArticles && allArticles.map((article, index) => (
        <NoteArticleCard key={index} note={article} index={index} />
      ))}
    </>
  );
}
export default NoteArticleList;