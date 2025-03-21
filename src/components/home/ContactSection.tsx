'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Mail, Linkedin, Twitter } from 'lucide-react';

export function ContactSection() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com/nekihcom',
    },
    {
      name: 'Twitter',
      icon: <Twitter className="h-5 w-5" />,
      href: 'https://twitter.com/mochiken',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://linkedin.com/in/mochiken',
    },
    {
      name: 'メール',
      icon: <Mail className="h-5 w-5" />,
      href: 'mailto:contact@example.com',
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">お問い合わせ</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            お仕事のご依頼、ご質問などがありましたら、お気軽にご連絡ください。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <Button variant="outline" className="gap-2">
                {link.icon}
                {link.name}
              </Button>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-card p-8 rounded-xl shadow-sm max-w-xl mx-auto"
        >
          <p className="mb-4 text-muted-foreground">
            現在、新しい挑戦の機会を探しています。一緒に素晴らしいプロジェクトを作りましょう！
          </p>
          <Button size="lg">お問い合わせフォーム</Button>
        </motion.div>
      </div>
    </section>
  );
} 