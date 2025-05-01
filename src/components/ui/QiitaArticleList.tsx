import QiitaArticleCard from "./QiitaArticleCard";
import { ParsedQiitaItem } from "@/type/type";


const QiitaArticleList = (props:{allArticles:Array<ParsedQiitaItem>}) => {

  const { allArticles } = props;

  return (
    <>
      {allArticles && allArticles.map((article, index) => (
          <QiitaArticleCard key={index} qiita={article} index={index} />
      ))}
    </>
  );
}
export default QiitaArticleList;