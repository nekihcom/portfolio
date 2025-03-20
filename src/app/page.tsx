'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Next.js + TypeScript + shadcn/ui + framer-motion</h1>
        <p className="text-xl mb-8">ポートフォリオサイトのスターターテンプレート</p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Image
          className="dark:invert mb-8"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </motion.div>

      <motion.div
        className="flex flex-col gap-4 sm:flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Button size="lg" onClick={() => window.open('https://nextjs.org/docs', '_blank')}>
          ドキュメントを見る
        </Button>
        <Button size="lg" variant="outline" onClick={() => window.open('https://ui.shadcn.com', '_blank')}>
          shadcn/ui を探索する
        </Button>
        <Button size="lg" variant="secondary" onClick={() => window.open('https://www.framer.com/motion/', '_blank')}>
          framer-motion を学ぶ
        </Button>
      </motion.div>

      <motion.footer
        className="mt-16 text-center text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <p>Next.js + TypeScript + shadcn/ui + framer-motion でポートフォリオを始めましょう</p>
      </motion.footer>
    </div>
  );
}
