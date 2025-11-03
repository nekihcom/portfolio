import { ProfileSection } from "@/components/sections/ProfileSection";
import { ArticleListSection } from "@/components/sections/ArticleListSection";
import { profile } from "@/constants/profile";
import { getNoteArticles } from "@/services/note";
import { getQiitaArticles } from "@/services/qiita";

export default async function Home() {
  const [noteArticles, qiitaArticles] = await Promise.all([
    getNoteArticles(5),
    getQiitaArticles(5),
  ]);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6 sm:py-12 md:py-16">
        <ProfileSection profile={profile} />
        <div className="space-y-12 pt-8 sm:pt-12">
          <ArticleListSection title="note" articles={noteArticles} />
          <ArticleListSection title="Qiita" articles={qiitaArticles} />
        </div>
      </main>
    </div>
  );
}
