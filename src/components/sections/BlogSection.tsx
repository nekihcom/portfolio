import { BlogPost } from "@/types/type";
import { BlogCardList } from "../features/BlogCardList";
import { SectionContainer } from "../features/SectionContainer";

interface BlogSectionProps {
  posts?: BlogPost[];
  maxCount?: number;
}

/**
 * ブログセクションコンポーネント
 * ブログ記事一覧を表示し、データがない場合は執筆中メッセージを表示
 * 
 * @param posts - ブログ記事情報の配列
 * @param title - セクションタイトル
 * @param viewAllButtonText - 「すべて見る」ボタンのテキスト
 * @param className - 追加のCSSクラス
 * @param maxCount - 表示する記事の最大件数
 */
export function BlogSection({
  posts = [],
  maxCount,
}: BlogSectionProps) {
  const displayPosts = maxCount ? posts.slice(0, maxCount) : posts;
  
  return (
    <SectionContainer titleEn="BLOG">
      {displayPosts.length > 0 ? (
        <BlogCardList posts={displayPosts} />
      ) : (
        <p>執筆中です<br />もうしばらくお待ちください </p>
      )}
    </SectionContainer>
  );
} 