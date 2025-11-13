import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { ArticleListSection } from "@/components/sections/ArticleListSection";
import { Button } from "@/components/ui/button";
import { profile } from "@/constants/profile";
import { getNoteArticles } from "@/services/note";
import { getQiitaArticles } from "@/services/qiita";

export default async function Home() {
  const noteArticles = await getNoteArticles(5);
  const qiitaArticles = await getQiitaArticles(5);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <HeroSection profile={profile} />
      <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-12 md:py-16">
        <ProfileSection profile={profile} />
        <div className="flex justify-center pt-6">
          <Button asChild className="transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
            <Link href="/profile" className="bg-black/95">プロフィールを詳しく見てみる</Link>
          </Button>
        </div>
        <div className="space-y-12 pt-8 sm:pt-12">
          <ArticleListSection title="note" articles={noteArticles} />
          <ArticleListSection title="Qiita" articles={qiitaArticles} />
        </div>
      </main>
    </div>
  );
}
