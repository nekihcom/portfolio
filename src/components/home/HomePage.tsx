'use client';

import { HeroSection } from './HeroSection';
import { SkillsSection } from './SkillsSection';
import { ProjectsSection } from './ProjectsSection';
import { ContactSection } from './ContactSection';

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
} 