import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

// 本文の Markdown に埋め込む HTML ブロックは Markdown として解釈されないため、自前で組み立てる

const ESCAPE: Record<string, string> = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#39;',
};

export function escapeHtml(text: string): string {
	return text.replace(/[&<>"']/g, (c) => ESCAPE[c]);
}

export function richTextToHtml(richText: RichTextItemResponse[]): string {
	return richText
		.map(({ plain_text, annotations, href }) => {
			let html = escapeHtml(plain_text).replace(/\n/g, '<br>');
			if (annotations.code) html = `<code>${html}</code>`;
			if (annotations.bold) html = `<strong>${html}</strong>`;
			if (annotations.italic) html = `<em>${html}</em>`;
			if (annotations.strikethrough) html = `<del>${html}</del>`;
			if (annotations.underline) html = `<u>${html}</u>`;
			if (href) html = `<a href="${escapeHtml(href)}">${html}</a>`;
			return html;
		})
		.join('');
}

export interface LinkPreview {
	title?: string;
	description?: string;
	image?: string;
	icon?: string;
}

// リンク先の応答が遅くてもビルド全体を待たせすぎないための上限。
// YouTube のようにページが重いサイトでも取得できるよう余裕を持たせる
const PREVIEW_TIMEOUT_MS = 10000;

const ENTITY: Record<string, string> = {
	amp: '&',
	lt: '<',
	gt: '>',
	quot: '"',
	apos: "'",
	nbsp: ' ',
};

function decodeEntities(text: string): string {
	return text.replace(/&(#x[0-9a-f]+|#\d+|\w+);/gi, (match, code: string) => {
		if (code[0] !== '#') return ENTITY[code.toLowerCase()] ?? match;
		const n =
			code[1].toLowerCase() === 'x'
				? parseInt(code.slice(2), 16)
				: parseInt(code.slice(1), 10);
		return Number.isNaN(n) ? match : String.fromCodePoint(n);
	});
}

function readAttr(tag: string, name: string): string | undefined {
	const m = tag.match(
		new RegExp(`\\s${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'),
	);
	const value = m?.[1] ?? m?.[2] ?? m?.[3];
	return value === undefined ? undefined : decodeEntities(value).trim();
}

function readMeta(head: string, keys: string[]): string | undefined {
	for (const tag of head.match(/<meta\s[^>]*>/gi) ?? []) {
		const key = (
			readAttr(tag, 'property') ?? readAttr(tag, 'name')
		)?.toLowerCase();
		if (key && keys.includes(key)) {
			const content = readAttr(tag, 'content');
			if (content) return content;
		}
	}
	return undefined;
}

function readIcon(head: string): string | undefined {
	for (const tag of head.match(/<link\s[^>]*>/gi) ?? []) {
		const rel = readAttr(tag, 'rel')?.toLowerCase().split(/\s+/) ?? [];
		if (rel.includes('icon')) return readAttr(tag, 'href');
	}
	return undefined;
}

function decodeBody(buf: ArrayBuffer, contentType: string | null): string {
	const ascii = new TextDecoder('latin1').decode(buf.slice(0, 4096));
	const charset =
		contentType?.match(/charset=([\w-]+)/i)?.[1] ??
		ascii.match(/<meta[^>]+charset=["']?([\w-]+)/i)?.[1] ??
		'utf-8';
	try {
		return new TextDecoder(charset).decode(buf);
	} catch {
		return new TextDecoder().decode(buf);
	}
}

// data: などの埋め込み値は空の画像になることが多いため、http(s) の URL だけを使う
function toAbsoluteUrl(src: string | undefined, base: string) {
	if (!src) return undefined;
	try {
		const url = new URL(src, base);
		return url.protocol === 'https:' || url.protocol === 'http:'
			? url.href
			: undefined;
	} catch {
		return undefined;
	}
}

// リンク先の都合（停止・ボット拒否など）で記事のビルドを失敗させないよう、取得できなければ空で返す
export async function fetchLinkPreview(url: string): Promise<LinkPreview> {
	try {
		const res = await fetch(url, {
			signal: AbortSignal.timeout(PREVIEW_TIMEOUT_MS),
			headers: { accept: 'text/html' },
		});
		if (!res.ok || !res.headers.get('content-type')?.includes('html')) {
			return {};
		}
		const html = decodeBody(
			await res.arrayBuffer(),
			res.headers.get('content-type'),
		);
		const head = html.split(/<\/head>/i)[0];
		const title =
			readMeta(head, ['og:title', 'twitter:title']) ??
			head.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1];
		return {
			title: title ? decodeEntities(title).trim() : undefined,
			description: readMeta(head, [
				'og:description',
				'twitter:description',
				'description',
			]),
			image: toAbsoluteUrl(
				readMeta(head, ['og:image', 'twitter:image']),
				res.url,
			),
			icon: toAbsoluteUrl(readIcon(head), res.url),
		};
	} catch {
		return {};
	}
}
