'use client';

import { motion } from 'framer-motion';
import { skills, skillCategories, Skill } from '@/data/skills';
import { Star } from 'lucide-react';

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="bg-card rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-medium mb-2">{skill.name}</h3>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < skill.level ? 'text-primary fill-primary' : 'text-muted'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// レートの凡例コンポーネント
function SkillLevelLegend() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-card p-4 rounded-lg shadow-sm mb-12 max-w-lg mx-auto"
    >
      <h3 className="text-center font-medium mb-4">スキルレベルの凡例</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <div className="flex">
            {Array.from({ length: 1 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 text-primary fill-primary" />
            ))}
            {Array.from({ length: 4 }).map((_, i) => (
              <Star key={i + 1} className="h-4 w-4 text-muted" />
            ))}
          </div>
          <span className="text-sm">基礎知識あり</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex">
            {Array.from({ length: 2 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 text-primary fill-primary" />
            ))}
            {Array.from({ length: 3 }).map((_, i) => (
              <Star key={i + 2} className="h-4 w-4 text-muted" />
            ))}
          </div>
          <span className="text-sm">実務経験あり</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex">
            {Array.from({ length: 3 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 text-primary fill-primary" />
            ))}
            {Array.from({ length: 2 }).map((_, i) => (
              <Star key={i + 3} className="h-4 w-4 text-muted" />
            ))}
          </div>
          <span className="text-sm">一人で実装可能</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex">
            {Array.from({ length: 4 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 text-primary fill-primary" />
            ))}
            {Array.from({ length: 1 }).map((_, i) => (
              <Star key={i + 4} className="h-4 w-4 text-muted" />
            ))}
          </div>
          <span className="text-sm">チーム内で指導可能</span>
        </div>
        <div className="flex items-center gap-2 sm:col-span-2 mx-auto">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 text-primary fill-primary" />
            ))}
          </div>
          <span className="text-sm">エキスパート</span>
        </div>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills-section" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          スキルセット
        </motion.h2>

        <SkillLevelLegend />

        <div className="space-y-16">
          {skillCategories.map((category) => (
            <div key={category.id}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xl font-semibold mb-6 border-l-4 border-primary pl-3"
              >
                {category.name}
              </motion.h3>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <motion.div key={skill.name} variants={item}>
                      <SkillCard skill={skill} />
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 