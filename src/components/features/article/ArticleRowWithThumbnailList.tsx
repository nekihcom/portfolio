import { IArticle } from "@/types/type";
import ArticleRowWithThumbnail from "@/components/features/article/ArticleRowWithThumbnail";


type Props = {
  articles: IArticle[];
}

const ArticleRowWithThumbnailList = ( { articles }: Props ) => {

  return (
    <>
      {articles.length > 0 ? (
        <ul className="">
          {articles.map((article) => (
            <li key={article.id} className="mb-4 last:mb-0 sm:max-w-none mx-auto">
              <ArticleRowWithThumbnail article={article} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-gray-500">
          <p>ブログ記事の準備中です</p>
        </div>
      )}
    </>
  );
};

export default ArticleRowWithThumbnailList;