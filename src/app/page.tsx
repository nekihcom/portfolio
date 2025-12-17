import { TopProfileSection } from "@/components/sections/TopProfileSection";
import TopArticleListSection from "@/components/sections/TopArticleListSection";
import TopWorkSection from "@/components/sections/TopWorkSection";

export const Home = () => {

  return (
    <>
      <TopProfileSection /> 
      <TopArticleListSection />
      <TopWorkSection />
    </>
  );
}

export default Home;