'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { profile } from '@/data/profile';

export function HeroSection() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6 max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          {profile.name}
          <span className="text-base md:text-xl font-normal ml-2 opacity-70">
            ({profile.englishName})
          </span>
        </h1>

        <motion.p 
          className="text-xl md:text-2xl font-light text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {profile.catchphrase}
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-3 justify-center items-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="bg-muted p-3 px-6 rounded-full text-sm">
            {profile.birthYear}年生まれ
          </div>
          <div className="bg-muted p-3 px-6 rounded-full text-sm">
            {profile.birthPlace}出身
          </div>
          <div className="bg-muted p-3 px-6 rounded-full text-sm">
            {profile.currentPlace}在住
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="pt-8"
        >
          <Button size="lg" className="mt-4 group" onClick={() => {
            document.getElementById('skills-section')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            スキルを見る
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
} 