"use client"; 

import Link from 'next/link';
import Image from 'next/image';
import { ParsedQiitaItem } from '@/type/type';

type Props = {
  qiita: ParsedQiitaItem;
  index: number;
}

const QiitaArticleCard = (props: Props) => {
  const { qiita, index } = props;
  // https://www.ey-office.com/blog_archive/2023/04/18/short-code-to-get-todays-date-in-yyyy-mm-dd-format-in-javascript/
  // sv-SEロケールはYYYY-MM-DD形式の日付文字列を戻す
  const displayQiitaCreatedDt = new Date(qiita.created_at.split('T')[0]).toLocaleDateString('sv-SE');

  return (
    <Link
      href={qiita.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="aspect-video relative">
        <Image
          src={qiita.ogpImageUrl}
          alt={qiita.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={index < 2}
        />
      </div>
      <div className="p-6">
        <time className="text-sm text-gray-500">{displayQiitaCreatedDt}</time>
        <h3 className="mt-2 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
          {qiita.title}
        </h3>
      </div>
    </Link>
  );
}

export default QiitaArticleCard;