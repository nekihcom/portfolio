"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ARTICLE_SOURCE_IDS,
  getArticleSourceMeta,
  isValidArticleSource,
} from "@/constants/article-sources";
import type { ArticleSourceId } from "@/constants/article-sources";

interface SourceFilterProps {
  currentSource?: ArticleSourceId;
}

export function SourceFilter({ currentSource }: SourceFilterProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleFilterChange = (source?: ArticleSourceId) => {
    const url = source ? `${pathname}?source=${source}` : pathname;
    // replaceを使用することで、ブラウザ履歴を汚さずにURLを更新し、Server Componentを再レンダリングする
    router.replace(url, { scroll: false });
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 px-8 pt-8">
      {/* All ボタン */}
      <Button
        onClick={() => handleFilterChange()}
        variant={!currentSource ? "default" : "outline"}
        size="default"
      >
        All
      </Button>

      {/* 各ソースのボタン（動的生成） */}
      {ARTICLE_SOURCE_IDS.map((sourceId) => {
        const meta = getArticleSourceMeta(sourceId);
        const isActive = currentSource === sourceId;

        return (
          <Button
            key={sourceId}
            onClick={() => handleFilterChange(sourceId)}
            variant={isActive ? "default" : "outline"}
            size="default"
          >
            <Image
              src={meta.iconPath}
              alt={meta.label}
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span>{meta.label}</span>
          </Button>
        );
      })}
    </div>
  );
}

