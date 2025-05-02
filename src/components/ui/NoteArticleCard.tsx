"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ParsedNoteItem } from '@/type/type';

type Props = {
  note: ParsedNoteItem;
  index: number;
}

const NoteArticleCard = (props: Props) => {
  const { note, index } = props;
  // https://www.ey-office.com/blog_archive/2023/04/18/short-code-to-get-todays-date-in-yyyy-mm-dd-format-in-javascript/
  // sv-SEロケールはYYYY-MM-DD形式の日付文字列を戻す
  const displayNoteCreatedDt = new Date(note.pubDate).toLocaleDateString('sv-SE');

  return (
    <Link
      href={note.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={note.ogpImageUrl}
          alt={note.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
          priority={index < 2}
        />
      </div>
      <div className="p-6">
        <time className="text-sm text-gray-500">{displayNoteCreatedDt}</time>
        <h3 className="mt-2 text-xl font-bold text-gray-900 hover:text-gray-500 transition-all duration-300">
          {note.title}
        </h3>
      </div>
    </Link>
  );
}

export default NoteArticleCard;