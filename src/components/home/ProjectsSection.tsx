'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
}

const projects: Project[] = [
  {
    title: 'ポートフォリオサイト',
    description: 'Next.js、TypeScript、Tailwind CSS、shadcn/ui、framer-motionを使用して作成した自己紹介サイトです。',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'framer-motion'],
    imageUrl: '/project-portfolio.png',
  },
  {
    title: 'ECサイト管理システム',
    description: '受注管理、在庫管理、顧客管理を一元化したバックオフィスシステムを開発しました。',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker'],
  },
  {
    title: 'スマホアプリ開発',
    description: 'クロスプラットフォーム対応の健康管理アプリを開発しました。',
    technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
  },
];

export function ProjectsSection() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">プロジェクト</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            これまでに手がけた代表的なプロジェクトです。詳細は各プロジェクトページをご覧ください。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-4xl font-bold text-primary/40">{project.title.charAt(0)}</div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button variant="ghost" size="sm" className="group">
                  詳細を見る
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button variant="outline" size="lg">
            すべてのプロジェクトを見る
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 