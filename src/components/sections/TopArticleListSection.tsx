import UnderlinedTextWithArrowLink from "@/components/ui/links/UnderlinedTextWithArrowLink";
import SectionContainer from "@/components/common/SectionContainer";
import ArticleRowWithThumbnailList from "@/components/features/article/ArticleRowWithThumbnailList";
import { getArticlesList } from "@/services/article";

const TopArticleListSection = async () => {
  const articles = await getArticlesList(3);

  return (
    <SectionContainer className="py-10 px-4 md:px-0">
      <ArticleRowWithThumbnailList articles={articles} />
      <div className="py-8 text-end">
        <UnderlinedTextWithArrowLink href="/article">もっと読む</UnderlinedTextWithArrowLink>
      </div>
    </SectionContainer>
  );
};

export default TopArticleListSection;