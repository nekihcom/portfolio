"use client";

import { useState } from "react";
import { ArticleCard } from "@/components/common/ArticleCard";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { UnifiedArticle } from "@/types/type";

const sectionTitle = "ARTICLES";
const DEFAULT_INITIAL_DISPLAY_COUNT = 6;
const DEFAULT_LOAD_MORE_COUNT = 12;
const DEFAULT_DETAIL_LINK = "/articles";
const DEFAULT_DETAIL_LINK_LABEL = "Read More Articles →";

interface ArticleListSectionProps {
  articles: UnifiedArticle[];
  showSectionTitle?: boolean;
  initialDisplayCount?: number;
  loadMoreCount?: number;
  detailLink?: string;
  detailLinkLabel?: string;
}

export function ArticleListSection({
  articles,
  showSectionTitle = true,
  initialDisplayCount = DEFAULT_INITIAL_DISPLAY_COUNT,
  loadMoreCount = DEFAULT_LOAD_MORE_COUNT,
  detailLink = DEFAULT_DETAIL_LINK,
  detailLinkLabel = DEFAULT_DETAIL_LINK_LABEL,
}: ArticleListSectionProps) {
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const displayedArticles = articles.slice(0, displayCount);
  const hasMore = displayCount < articles.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + loadMoreCount);
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
      detailLink={detailLink}
      detailLinkLabel={detailLinkLabel}
      detailLinkVariant="outline"
      detailLinkSize="lg"
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

