import type { satteri } from '@astrojs/markdown-satteri';
import { isExternalLink } from './link';

type HastPlugin = NonNullable<
	NonNullable<Parameters<typeof satteri>[0]>['hastPlugins']
>[number];

// Markdown 本文の外部リンクを別タブで開く。本文に埋め込んだ生の HTML はこの対象外
export const externalLinksPlugin = {
	name: 'external-links',
	element: {
		filter: ['a'],
		visit(node, ctx) {
			const href = node.properties.href;
			if (typeof href !== 'string' || !isExternalLink(href)) return;
			ctx.setProperty(node, 'target', '_blank');
			ctx.setProperty(node, 'rel', ['noopener', 'noreferrer']);
		},
	},
} satisfies HastPlugin;
