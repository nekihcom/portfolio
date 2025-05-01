import QiitaArticleCard from "./QiitaArticleCard";
import { ParsedQiitaItem } from "@/type/type";

interface QiitaArticleListProps {
  allArticles: ParsedQiitaItem[]
}

export default function QiitaArticleList({ allArticles }: QiitaArticleListProps) {
  return (
    <>
      {allArticles.map((article, index) => (
        <QiitaArticleCard key={article.id} qiita={article} index={index} />
      ))}
    </>
  );
}