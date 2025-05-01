"use client"; 

import Link from 'next/link';
import { motion } from 'framer-motion';

import { ParsedQiitaItem } from '@/type/type';
import Image from 'next/image';


type Props = {
  qiita: ParsedQiitaItem;
  index: number;
}


const QiitaArticleCard = (props: Props) => {

  const { qiita, index } = props;
  // https://www.ey-office.com/blog_archive/2023/04/18/short-code-to-get-todays-date-in-yyyy-mm-dd-format-in-javascript/
  // sv-SEロケールはYYYY-MM-DD形式の日付文字列を戻す
  const displayqiitaCreatedDt = new Date(qiita.created_at.split('T')[0]).toLocaleDateString('sv-SE');

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
            src={qiita.ogpImageUrl}
            alt={qiita.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <time className="text-sm text-gray-500">{displayqiitaCreatedDt}</time>
          <h3 className="mt-2 text-xl font-bold">
            <Link href={qiita.url} className="hover:text-blue-600 transition-colors">
              {qiita.title}
            </Link>
          </h3>
        </div>
      </motion.article>
    </>
  );

}
export default QiitaArticleCard;