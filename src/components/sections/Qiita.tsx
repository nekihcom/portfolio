"use client"

import { lazy, Suspense } from "react"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { useQiitas } from "@/hooks/useQiita"
import QiitaArticleList from "@/components/ui/QiitaArticleList"
import { ExploreLink } from "@/components/ui/ExploreLink"

const MotionDiv = lazy(() => import("framer-motion").then((mod) => ({ default: mod.motion.div })))

export default function Qiita() {
  const { qiitas, isLoading, error } = useQiitas();

  if (isLoading) {
    return (
      <SectionContainer id="qiita" className="my-24">
        <SectionTitle>Qiita</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden w-11/12 sm:w-full md:w-[240px] animate-pulse">
              <div className="aspect-video bg-gray-200" />
            </div>
          ))}
        </div>
      </SectionContainer>
    );
  }

  if (error) {
    return (
      <SectionContainer id="qiita" className="my-24">
        <SectionTitle>Qiita</SectionTitle>
        <div className="text-center text-red-500">
          Qiita記事の取得に失敗しました。時間をおいて再度お試しください。
        </div>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer id="qiita" className="my-24">
      <SectionTitle>Qiita</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <QiitaArticleList allArticles={qiitas} />
      </div>
      <div className="mt-8">
        <ExploreLink
          href="https://qiita.com/nekihcom"
          jaText="Qiitaをもっと見る"
        />
      </div>
    </SectionContainer>
  )
} 