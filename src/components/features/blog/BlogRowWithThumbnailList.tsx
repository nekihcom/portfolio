import { IBlogArticle } from "@/types/type";
import BlogRowWithThumbnail from "@/components/features/blog/BlogRowWithThumbnail";


type Props = {
  articles: IBlogArticle[];
}

const BlogRowWithThumbnailList = ( { articles }: Props ) => {

  return (
    <>
      {articles.length > 0 ? (
        <ul className="">
          {articles.map((article) => (
            <li key={article.nid} className="mb-4 last:mb-0 sm:max-w-none mx-auto">
              <BlogRowWithThumbnail article={article} />
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

export default BlogRowWithThumbnailList;