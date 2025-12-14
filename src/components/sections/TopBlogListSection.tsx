import UnderlinedTextWithArrowLink from "@/components/ui/links/UnderlinedTextWithArrowLink";
import SectionContainer from "@/components/common/SectionContainer";
import BlogRowWithThumbnailList from "@/components/features/blog/BlogRowWithThumbnailList";
import { getBlogArticlesList } from "@/services/blog";

const TopBlogListSection = async () => {
  const articles = await getBlogArticlesList(3);

  return (
    <SectionContainer className="py-10 px-4 md:px-0">
      <BlogRowWithThumbnailList articles={articles} />
      <div className="py-8 text-end">
        <UnderlinedTextWithArrowLink href="/blog">ブログ一覧へ</UnderlinedTextWithArrowLink>
      </div>
    </SectionContainer>
  );
};

export default TopBlogListSection;