'use client';

import { HeroSection } from './HeroSection';
import { ProjectsSection } from './ProjectsSection';
import { BlogSection } from './BlogSection';
import { TechArticlesSection } from './TechArticlesSection';
import { ContactSection } from './ContactSection';

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <BlogSection />
      <TechArticlesSection />
      <ContactSection />
    </main>
  );
} 