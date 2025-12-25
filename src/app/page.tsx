import { TopProfileSection } from "@/components/sections/TopProfileSection";
import TopArticleListSection from "@/components/sections/TopArticleListSection";
import WorkSection from "@/components/sections/WorkSection";

export const Home = () => {

  return (
    <>
      <TopProfileSection /> 
      <TopArticleListSection />
      <WorkSection />
    </>
  );
}

export default Home;