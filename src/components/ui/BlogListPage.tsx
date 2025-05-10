"use client";

import { useState, useCallback } from "react";
import { Blog, ParsedBlogItem } from "@/type/type";
import BlogList from "@/components/ui/BlogList";
import { getPaginatedBlogs } from "@/lib/microcms";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

// ブログデータをParsedBlogItem型に変換する関数
const parseBlogData = (blogs: Blog[]): ParsedBlogItem[] => {
  return blogs.map(blog => ({
    id: blog.id,
    title: blog.title,
    content: blog.body,
    createdAt: blog.createdAt,
    updatedAt: blog.updatedAt,
    publishedAt: blog.publishedAt,
    post_dt: blog.post_dt,
    ogpImageUrl: blog.thumbnail?.url || 'https://placehold.jp/300x200.png',
    link: `/blog/${blog.id}`,
    category: blog.category,
  }));
};

interface BlogListPageProps {
  initialBlogs: Blog[];
}

export default function BlogListPage({ initialBlogs }: BlogListPageProps) {
  const [offset, setOffset] = useState(9); // 次に取得するデータの開始位置
  const parsedInitialBlogs = parseBlogData(initialBlogs);

  // 次のデータを取得する関数
  const loadMoreBlogs = useCallback(async () => {
    try {
      const newBlogs = await getPaginatedBlogs(offset, 9);
      setOffset(prev => prev + 9);
      return parseBlogData(newBlogs);
    } catch (error) {
      console.error("ブログ記事の取得に失敗しました", error);
      return [];
    }
  }, [offset]);

  // 無限スクロールフックを使用
  const { displayedItems, isLoading, hasMore, containerRef } = useInfiniteScroll(
    parsedInitialBlogs,
    loadMoreBlogs,
    9
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <BlogList allArticles={displayedItems} />
      </div>
      
      {/* ロード中の表示 */}
      {isLoading && (
        <div className="flex justify-center my-8">
          <div className="loader w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* 次のコンテンツを読み込むための要素 */}
      {hasMore && <div ref={containerRef} className="h-10 mt-8" />}
      
      {/* もう記事がない場合 */}
      {!hasMore && !isLoading && displayedItems.length > 0 && (
        <p className="text-center text-gray-500 my-8">すべての記事を表示しました</p>
      )}
    </>
  );
} 