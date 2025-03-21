'use client';

import { motion } from 'framer-motion';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'app' | 'infrastructure' | 'other';
  level: number; // 1-5
}

const skills: Skill[] = [
  // フロントエンド
  { name: 'HTML/CSS', category: 'frontend', level: 5 },
  { name: 'JavaScript', category: 'frontend', level: 5 },
  { name: 'TypeScript', category: 'frontend', level: 4 },
  { name: 'React', category: 'frontend', level: 4 },
  { name: 'Next.js', category: 'frontend', level: 4 },
  { name: 'Tailwind CSS', category: 'frontend', level: 5 },
  
  // バックエンド
  { name: 'Node.js', category: 'backend', level: 4 },
  { name: 'Express', category: 'backend', level: 4 },
  { name: 'Python', category: 'backend', level: 3 },
  { name: 'Java', category: 'backend', level: 3 },
  { name: 'SQL', category: 'backend', level: 4 },
  
  // アプリ
  { name: 'React Native', category: 'app', level: 3 },
  { name: 'Flutter', category: 'app', level: 2 },
  
  // インフラ
  { name: 'AWS', category: 'infrastructure', level: 3 },
  { name: 'Docker', category: 'infrastructure', level: 4 },
  { name: 'Kubernetes', category: 'infrastructure', level: 3 },
  { name: 'CI/CD', category: 'infrastructure', level: 4 },
  
  // その他
  { name: 'Git', category: 'other', level: 5 },
  { name: 'Agile/Scrum', category: 'other', level: 4 },
];

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="bg-card rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-medium mb-2">{skill.name}</h3>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 w-full rounded-full ${
              i < skill.level ? 'bg-primary' : 'bg-muted'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  const categories = [
    { id: 'frontend', name: 'フロントエンド' },
    { id: 'backend', name: 'バックエンド' },
    { id: 'app', name: 'アプリ開発' },
    { id: 'infrastructure', name: 'インフラ' },
    { id: 'other', name: 'その他' },
  ];

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

        <div className="space-y-16">
          {categories.map((category) => (
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