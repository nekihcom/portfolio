"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ParsedNoteItem } from '@/type/type';
import { Tag } from "./Tag";

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
    <article className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-all duration-300">
      <Link
        href={note.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div className="flex flex-col h-full">
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={note.ogpImageUrl}
              alt={note.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 2}
            />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <time className="text-sm text-gray-500">{displayNoteCreatedDt}</time>
            <h3 className="mt-2 text-lg font-bold line-clamp-2 hover:text-gray-600 transition-colors duration-300">{note.title}</h3>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default NoteArticleCard;