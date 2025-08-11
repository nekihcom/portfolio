import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogPost } from "@/types/type";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui/badge";

interface BlogCardProps {
  post: BlogPost;
}

/**
 * ブログ記事情報を表示するカードコンポーネント
 * ブログ詳細ページへのリンクとして機能
 * 
 * @param post - ブログ記事情報
 */
export function BlogCard({ post }: BlogCardProps) {
  const cardContent = (
    <Card className="overflow-hidden pt-0 h-full">
      <CardHeader className="relative h-48">
        <Image src={post.thumbnail?.url || ""} alt="Card Image" fill />
      </CardHeader>
      <CardContent className="h-2/5">
        <div className="flex flex-col h-full justify-between">
          <div className="flex-1">
            <div className="mb-2">
              <time className="text-sm text-gray-500">{post.publishedAt.split("T")[0]}</time>
            </div>
            <CardTitle className="mb-2">{post.title}</CardTitle>
          </div>
          <Badge variant="default" className="self-start">{post.id}</Badge>
        </div>
      </CardContent>
    </Card>
  );

  // ブログ詳細ページへのリンク
  return (
    <Link 
      href={`/blog/${post.id}`}
      className="block h-full"
    >
      {cardContent}
    </Link>
  );
} 