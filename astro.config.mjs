// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { SITE_URL } from './src/lib/link.ts';
import { externalLinksPlugin } from './src/lib/markdown.ts';

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	integrations: [sitemap()],
	markdown: {
		processor: satteri({ hastPlugins: [externalLinksPlugin] }),
	},
});
