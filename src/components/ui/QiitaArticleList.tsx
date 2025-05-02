import QiitaArticleCard from "./QiitaArticleCard";
import { ParsedQiitaItem } from "@/type/type";

interface QiitaArticleListProps {
  allArticles: ParsedQiitaItem[]
}

export default function QiitaArticleList({ allArticles }: QiitaArticleListProps) {
  return (
    <>
      {allArticles.map((article, index) => (
        <div key={article.url} className="w-11/12 sm:w-full md:w-[240px]">
          <QiitaArticleCard qiita={article} index={index} />
        </div>
      ))}
    </>
  );
}