"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ArticleCard } from "@/components/common/ArticleCard";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { UnifiedArticle } from "@/types/type";

const sectionTitle = "ARTICLES";
const INITIAL_DISPLAY_COUNT = 6;
const LOAD_MORE_COUNT = 12;

interface ArticleListSectionProps {
  articles: UnifiedArticle[];
  itemsPerRow?: number;
  showSectionTitle?: boolean;
  initialDisplayCount?: number;
}

export function ArticleListSection({
  articles,
  itemsPerRow = 2,
  showSectionTitle = true,
  initialDisplayCount = INITIAL_DISPLAY_COUNT,
}: ArticleListSectionProps) {
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const displayedArticles = articles.slice(0, displayCount);
  const hasMore = displayCount < articles.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + LOAD_MORE_COUNT);
  };

  if (articles.length === 0) {
    return (
      <SectionContainer
        sectionTitle={showSectionTitle ? sectionTitle : undefined}
        className="space-y-6"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">
          記事がありません。
        </p>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer
      sectionTitle={showSectionTitle ? sectionTitle : undefined}
      className="space-y-6 mb-[150px]"
    >
      <div
        className={cn(
          "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        )}
      >
        {displayedArticles.map((article) => (
          <ArticleCard key={article.uuid} article={article} />
        ))}
      </div>
      {hasMore && (
        <div className="flex justify-center pt-6">
          <Button
            onClick={handleLoadMore}
            variant="outline"
            className="text-sm"
          >
            もっと見る
          </Button>
        </div>
      )}
    </SectionContainer>
  );
}

