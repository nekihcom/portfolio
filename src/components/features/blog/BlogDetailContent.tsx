import { IBlogArticle } from "@/types/type";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
type Props = {
  article?: IBlogArticle;
}

const BlogDetailContent = ({ article }: Props) => {
  return (
    <article className="@bg-gray-300">
      <div className="mb-2">
        <h1 className="text-4xl font-bold">{article?.title}</h1>
      </div>
      <div className="mb-4 flex items-center gap-2">
        <time className="">{formatDate(article?.created ?? "")}</time>
        <p>{article?.field_category}</p>
      </div>
      <div className="mb-8">
        <div className="flex justify-center">
          <Image 
            src={"https://placehold.jp/1024x453.png"} 
            alt={article?.title ?? ""} 
            width={1024} 
            height={453} 
            className=""
          />
        </div>
      </div>
      <div 
        id="BlogBody"
        dangerouslySetInnerHTML={{ __html: article?.body ?? "" }} 
      />
    </article>
  );
};

export default BlogDetailContent;