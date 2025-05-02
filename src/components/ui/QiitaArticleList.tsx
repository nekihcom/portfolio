import QiitaArticleCard from "./QiitaArticleCard";
import { ParsedQiitaItem } from "@/type/type";

interface QiitaArticleListProps {
  allArticles: ParsedQiitaItem[]
}

export default function QiitaArticleList({ allArticles }: QiitaArticleListProps) {
  return (
    <>
      {allArticles.map((article, index) => (
        <div key={article.url} className="w-[300px]">
          <QiitaArticleCard qiita={article} index={index} />
        </div>
      ))}
    </>
  );
}