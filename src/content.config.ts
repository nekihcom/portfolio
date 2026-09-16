import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';
import { icons, type IconName } from './data/icons';

const iconNames = Object.keys(icons) as [IconName, ...IconName[]];

const profile = defineCollection({
	loader: file('src/data/profile.yaml'),
	schema: z.object({
		name: z.string(),
		role: z.string(),
		location: z.string(),
		birthday: z.string(),
		seo: z.object({
			description: z.string(),
			locale: z.string(),
		}),
	}),
});

const career = defineCollection({
	loader: file('src/data/career.yaml'),
	schema: z.object({
		order: z.number(),
		period: z.string(),
		role: z.string(),
		org: z.string(),
	}),
});

const works = defineCollection({
	loader: file('src/data/works.yaml'),
	schema: ({ image }) =>
		z.object({
			order: z.number(),
			title: z.string(),
			description: z.string(),
			image: image(),
			alt: z.string(),
		}),
});

const socialLinks = defineCollection({
	loader: file('src/data/social.yaml'),
	schema: z.object({
		order: z.number(),
		label: z.string(),
		href: z.string(),
		icon: z.enum(iconNames),
	}),
});

const blog = defineCollection({
	loader: file('src/data/blog.yaml'),
	schema: z.object({
		label: z.string(),
		href: z.string(),
	}),
});

export const collections = { profile, career, projects, socialLinks, blog };
