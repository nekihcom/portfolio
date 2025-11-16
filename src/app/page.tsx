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
    <div className="min-h-screen dark:bg-black">
      <HeroSection profile={profile} />
      <main className="mx-auto w-full max-w-3xl px-8 py-10 sm:px-6 sm:py-12 md:py-16">
        <ProfileSection profile={profile} />
        <div className="space-y-12 pt-8 sm:pt-12">
          <ArticleListSection title="note" articles={noteArticles} />
          <ArticleListSection title="Qiita" articles={qiitaArticles} />
        </div>
      </main>
    </div>
  );
}
