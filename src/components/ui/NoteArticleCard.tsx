"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { ParsedNoteItem } from '@/type/type';



type Props = {
  note: ParsedNoteItem;
  index: number;
}


const NoteArticleCard = (props: Props) => {

  const { note, index } = props;
  // https://www.ey-office.com/blog_archive/2023/04/18/short-code-to-get-todays-date-in-yyyy-mm-dd-format-in-javascript/
  // sv-SEロケールはYYYY-MM-DD形式の日付文字列を戻す
  const displaynoteCreatedDt = new Date(note.pubDate).toLocaleDateString('sv-SE');

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div className="aspect-video relative">
          <Image
            src={note.ogpImageUrl}
            alt={note.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <time className="text-sm text-gray-500">{displaynoteCreatedDt}</time>
          <h3 className="mt-2 text-xl font-bold">
            <Link href={note.link} className="hover:text-blue-600 transition-colors">
              {note.title}
            </Link>
          </h3>
        </div>
    </motion.article>
    </>
  );
}
export default NoteArticleCard;