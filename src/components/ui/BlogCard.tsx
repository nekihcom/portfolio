"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ParsedBlogItem } from '@/type/type';

type Props = {
  blog: ParsedBlogItem;
  index: number;
}

const BlogCard = (props: Props) => {
  const { blog, index } = props;
  // sv-SEロケールはYYYY-MM-DD形式の日付文字列を戻す
  const displayBlogCreatedDt = new Date(blog.publishedAt).toLocaleDateString('sv-SE');
  // デフォルト画像のURL
  const defaultImageUrl = "https://placehold.jp/300x200.png";

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-all duration-300">
      <Link
        href={blog.link}
        className="block h-full"
      >
        <div className="flex flex-col h-full">
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={blog.ogpImageUrl || defaultImageUrl}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 2}
            />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <time className="text-sm text-gray-500">{displayBlogCreatedDt}</time>
            <h3 className="mt-2 text-lg font-bold line-clamp-2 hover:text-gray-600 transition-colors duration-300">{blog.title}</h3>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default BlogCard; 