'use client';

import { HeroSection } from './HeroSection';
import { ProjectsSection } from './ProjectsSection';
import { ContactSection } from './ContactSection';

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
} 