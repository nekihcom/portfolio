"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ParsedQiitaItem } from '@/type/type';

type Props = {
  qiita: ParsedQiitaItem;
  index: number;
}

const QiitaCard = (props: Props) => {
  const { qiita, index } = props;
  // sv-SEロケールはYYYY-MM-DD形式の日付文字列を戻す
  const displayQiitaPostDt = new Date(qiita.created_at).toLocaleDateString('sv-SE');
  // デフォルト画像のURL
  const defaultImageUrl = "https://placehold.jp/300x200.png";

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-all duration-300">
      <Link
        href={qiita.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div className="flex flex-col h-full">
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={qiita.ogpImageUrl || defaultImageUrl}
              alt={qiita.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 2}
            />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <div className="flex justify-between items-center">
              <time className="text-sm text-gray-500">{displayQiitaPostDt}</time>
              {qiita.tags && (
                <span className="text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-full">{qiita.tags[0].name}</span>
              )}
            </div>
            <h3 className="mt-2 text-sm font-bold line-clamp-2 hover:text-gray-600 transition-colors duration-300">{qiita.title}</h3>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default QiitaCard; 