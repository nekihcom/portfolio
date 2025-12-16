'use client';

import { useState } from "react";
import { IArticle } from "@/types/type";
import ArticleRowWithThumbnail from "@/components/features/article/ArticleRowWithThumbnail";

type Props = {
  articles: IArticle[];
}

const INITIAL_DISPLAY_COUNT = 6;
const LOAD_MORE_COUNT = 6;

const ArticleRowWithThumbnailListWithLoadMore = ({ articles }: Props) => {
  const [displayedCount, setDisplayedCount] = useState(INITIAL_DISPLAY_COUNT);

  const displayedArticles = articles.slice(0, displayedCount);
  const hasMore = displayedCount < articles.length;

  const handleLoadMore = () => {
    setDisplayedCount(prev => prev + LOAD_MORE_COUNT);
  };

  return (
    <>
      {articles.length > 0 ? (
        <>
          <ul className="">
            {displayedArticles.map((article) => (
              <li key={article.id} className="mb-4 last:mb-0 sm:max-w-none mx-auto">
                <ArticleRowWithThumbnail article={article} />
              </li>
            ))}
          </ul>
          {hasMore && (
            <div className="mt-8 text-center">
              <button
                onClick={handleLoadMore}
                className="inline-block px-6 py-3 text-gray-900 font-medium border-2 border-gray-900 rounded-md transition-all duration-200 hover:bg-gray-900 hover:text-white active:bg-gray-800"
              >
                もっと見る
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center text-gray-500">
          <p>ブログ記事の準備中です</p>
        </div>
      )}
    </>
  );
};

export default ArticleRowWithThumbnailListWithLoadMore;
