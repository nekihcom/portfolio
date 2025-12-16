import Image from "next/image";
import Link from "next/link";

import { IArticle } from "@/types/type";
import { formatDate } from "@/lib/utils";


type Props = {
  article: IArticle;
}

const ArticleRowWithThumbnail = ( { article }: Props ) => {
  const content =  (
    <div className="p-4 relative group">
      {/* 上辺の枠線（中央から広がる） */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
      {/* 右辺の枠線（中央から広がる） */}
      <div className="absolute top-0 right-0 bottom-0 w-0.5 bg-gray-200 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"></div>
      {/* 下辺の枠線（中央から広がる） */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
      {/* 左辺の枠線（中央から広がる） */}
      <div className="absolute top-0 left-0 bottom-0 w-0.5 bg-gray-200 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"></div>
      {/* 日付（左上） */}
      <div className="mb-4">
        <time className="text-gray-600">
          {formatDate(article.created_dt)}
        </time>
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-4 hover:opacity-50 transition-opacity duration-200">
        {/* サムネイル画像 */}
        <div className="relative w-full sm:w-[40%] h-48 mb-4 sm:mb-0 overflow-hidden shrink-0">
          <Image
            src={article.thumbnail ?? ""}
            alt={article.title ?? ""}
            fill
            className="object-cover"
          />
        </div>
      
        {/* タイトルとカテゴリ */}
        <div className="flex flex-col sm:flex-1 relative">
          {/* タイトル */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
            {article.title}
          </h3>
          
          {/* カテゴリラベル */}
          {article.source && (
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span className="text-sm text-gray-500">
                {article.source}
              </span>
            </div>
          )}
        
          {/* 右矢印（右下に配置） */}
          <div className="text-right sm:text-start sm:absolute sm:bottom-0 sm:right-[10px] text-gray-900 group-hover:translate-x-[10px] transition-transform duration-200 mt-auto sm:mt-0">
            →
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Link
      href={`${article.url}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block group bg-white"
    >
      {content}
    </Link>
  );
};

export default ArticleRowWithThumbnail;