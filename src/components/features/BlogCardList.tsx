import { BlogPost } from "@/types/type";
import { BlogCard } from "./BlogCard";

interface BlogCardListProps {
  posts: BlogPost[];
}

/**
 * ブログ記事情報を表示するカードコンポーネント
 * ブログ詳細ページへのリンクとして機能
 * 
 * @param posts - ブログ記事情報
 */
export function BlogCardList({ posts }: BlogCardListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 justify-items-center">
      {posts.map((post) => (
        <div 
          key={post.id} 
          className="group w-full max-w-[345px]"
        >
          <BlogCard post={post} />
        </div>
      ))}
    </div>
  );
} 