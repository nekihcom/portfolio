import { Github, Mail, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

export interface SocialLink {
  name: string;
  iconName: 'github' | 'twitter' | 'linkedin' | 'mail';
  href: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    iconName: 'github',
    href: 'https://github.com/nekihcom',
  },
  {
    name: 'Twitter',
    iconName: 'twitter',
    href: 'https://twitter.com/mochiken',
  },
  {
    name: 'LinkedIn',
    iconName: 'linkedin',
    href: 'https://linkedin.com/in/mochiken',
  },
  {
    name: 'メール',
    iconName: 'mail',
    href: 'mailto:contact@example.com',
  },
]; 