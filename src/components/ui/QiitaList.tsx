import QiitaCard from "./QiitaCard";
import { ParsedQiitaItem } from "@/type/type";

interface QiitaListProps {
  allQiitaArticles: ParsedQiitaItem[];
}

export default function QiitaList({ allQiitaArticles }: QiitaListProps) {
  return (
    <>
      {allQiitaArticles.map((article, index) => (
        <div key={article.id} className="w-11/12 sm:w-full md:w-[300px]">
          <QiitaCard qiita={article} index={index} />
        </div>
      ))}
    </>
  );
} 