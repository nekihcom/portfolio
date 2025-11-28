"use client";

import { useState } from "react";
import { ArticleCard } from "@/components/common/ArticleCard";
import { SectionContainer } from "@/components/common/SectionContainer";
import { cn } from "@/lib/utils";
import type { UnifiedArticle } from "@/types/type";
import { MoreLink } from "@/components/common/MoreLink";

const sectionTitle = "ARTICLES";
const DEFAULT_INITIAL_DISPLAY_COUNT = 6;
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
  detailLink = DEFAULT_DETAIL_LINK,
  detailLinkLabel = DEFAULT_DETAIL_LINK_LABEL,
}: ArticleListSectionProps) {
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const displayedArticles = articles.slice(0, displayCount);

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
      className="space-y-6 min-h-screen"
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
      <div className="flex justify-end">
        <MoreLink href={detailLink} children={detailLinkLabel} className="text-md" />
      </div>
    </SectionContainer>
  );
}

