import { HeroSection } from "@/components/sections/HeroSection";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { profile } from "@/constants/profile";
import { ArticleListSection } from "@/components/sections/ArticleListSection";
import { loadArticlesFromJson } from "@/services/unified-articles";

const INITIAL_DISPLAY_COUNT = 6;
export default async function Home() {
  const articles = await loadArticlesFromJson();
  const displayedArticles = articles.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <div className="min-h-screen dark:bg-black">
      <HeroSection profile={profile} />
      <main className="px-8 py-10 sm:px-6 sm:py-12 md:py-16">
        <div className="mx-auto w-full max-w-2xl sm:max-w-3xl lg:max-w-5xl mb-[300px]">
          <ProfileSection profile={profile} />
        </div>
        <ArticleListSection
          articles={displayedArticles}
          showSectionTitle={true}
          initialDisplayCount={INITIAL_DISPLAY_COUNT}
        />
      </main>
    </div>
  );
}
