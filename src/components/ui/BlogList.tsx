import BlogCard from "./BlogCard";
import { ParsedBlogItem } from "@/type/type";

interface BlogListProps {
  allArticles: ParsedBlogItem[];
}

export default function BlogList({ allArticles }: BlogListProps) {
  return (
    <>
      {allArticles.map((article, index) => (
        <div key={article.id} className="w-11/12 sm:w-full md:w-[240px]">
          <BlogCard blog={article} index={index} />
        </div>
      ))}
    </>
  );
} 