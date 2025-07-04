import { fetchWorks } from "@/lib/fetchWorkData";
import { WorksSection } from "@/components/sections/WorksSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/**
 * 作品一覧ページ
 */
export default async function WorksPage() {
  const works = await fetchWorks(50); // 最大50件の作品を取得

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto max-w-[1150px] px-4 py-16">
        {/* ページヘッダー */}
        <div>
          <Link href="/">
            <Button variant="outline" className="mb-20">
              ← トップページに戻る
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Work
          </h1>
          <p className="text-lg text-slate-600 mb-2">
            各作品をクリックすると詳細をご覧いただけます。
          </p>
        </div>

        {/* 作品セクション */}
        <WorksSection 
          works={works} 
          viewAllButtonText=""
          isDisplaySectionTtl={false}
        />
      </div>
    </main>
  );
}

/**
 * ISRの再生成間隔を設定（秒単位）
 * 1時間（3600秒）ごとに再生成
 */
export const revalidate = 3600; 