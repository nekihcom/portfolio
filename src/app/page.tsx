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
    <div className="dark:bg-black">
      <HeroSection profile={profile} />
      <main className="px-8 sm:px-6">
        <ProfileSection profile={profile} />
        <ArticleListSection
          articles={displayedArticles}
          showSectionTitle={true}
          initialDisplayCount={INITIAL_DISPLAY_COUNT}
        />
      </main>
    </div>
  );
}
