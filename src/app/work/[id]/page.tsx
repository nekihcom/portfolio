import { fetchWork, fetchWorks } from "@/lib/fetchWorkData";
import { WorkDetailSection } from "@/components/sections/WorkDetailSection";
import { notFound } from "next/navigation";

interface WorkDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

/**
 * 作品詳細ページ
 * @param params - URLパラメータ（作品ID）
 */
export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { id } = await params;
  const work = await fetchWork(id);

  if (!work) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <WorkDetailSection work={work} />
    </main>
  );
}

/**
 * 静的パスを生成する関数
 * ビルド時に既存の作品のパスを生成
 */
export async function generateStaticParams() {
  try {
    const works = await fetchWorks(50); // 最大50件の作品パスを生成
    return works.map((work) => ({
      id: work.id,
    }));
  } catch (error) {
    console.error('Failed to generate static params:', error);
    return [];
  }
}

/**
 * ISRの再生成間隔を設定（秒単位）
 * 1時間（3600秒）ごとに再生成
 */
export const revalidate = 3600; 