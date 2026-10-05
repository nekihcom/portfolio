import type { Loader } from 'astro/loaders';
import { type Client, isFullPage, iteratePaginatedAPI } from '@notionhq/client';
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { NotionToMarkdown } from 'notion-to-md';
import { createNotionClient, readNotionEnv } from './client';
import { createImageSaver } from './images';

// Notion DB のプロパティ名。DB 側で名前を変えた場合はここだけを直す
const PROP = {
	title: 'Title',
	slug: 'Slug',
	category: 'Category',
	description: 'Description',
	publishedAt: 'PublishedAt',
	status: 'Status',
} as const;

const PUBLISHED = 'Published';

// URL に使うため、大文字・記号・日本語を許すと表記揺れや URL エンコードの問題が出る
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

// Notion のコード言語名のうち Shiki が解釈できないものだけを読み替える
const CODE_LANG: Record<string, string> = {
	'plain text': 'plaintext',
	'c++': 'cpp',
	'c#': 'csharp',
	'f#': 'fsharp',
	'objective-c': 'objc',
	'vb.net': 'vb',
	'java/c/c++/c#': 'java',
};

type Property = PageObjectResponse['properties'][string];

function plainText(prop: Property | undefined): string {
	if (prop?.type === 'title')
		return prop.title.map((t) => t.plain_text).join('');
	if (prop?.type === 'rich_text')
		return prop.rich_text.map((t) => t.plain_text).join('');
	return '';
}

function readPost(page: PageObjectResponse) {
	const p = page.properties;
	const category = p[PROP.category];
	const publishedAt = p[PROP.publishedAt];
	const post = {
		title: plainText(p[PROP.title]).trim(),
		slug: plainText(p[PROP.slug]).trim(),
		category: category?.type === 'select' ? (category.select?.name ?? '') : '',
		description: plainText(p[PROP.description]).trim(),
		publishedAt:
			publishedAt?.type === 'date' ? publishedAt.date?.start : undefined,
		updatedAt: page.last_edited_time,
	};

	// 公開記事の必須項目欠落は、壊れたページを本番に出すより失敗させて気付かせる方を選ぶ
	const missing = (
		[
			[PROP.title, post.title],
			[PROP.slug, post.slug],
			[PROP.category, post.category],
			[PROP.publishedAt, post.publishedAt],
		] as const
	)
		.filter(([, v]) => !v)
		.map(([k]) => k);
	if (missing.length > 0) {
		throw new Error(
			`Notion 記事の必須項目が未入力: ${missing.join(', ')} (${page.url})`,
		);
	}
	if (!SLUG_PATTERN.test(post.slug)) {
		throw new Error(
			`Slug は英小文字・数字・ハイフンのみ使用できる: "${post.slug}" (${page.url})`,
		);
	}
	return post;
}

function createMarkdownConverter(notion: Client, publicDir: URL) {
	const n2m = new NotionToMarkdown({ notionClient: notion });
	const saveImage = createImageSaver(publicDir);

	n2m.setCustomTransformer('image', async (block) => {
		if (!('image' in block)) return false;
		const { image } = block;
		const alt = image.caption
			.map((t) => t.plain_text)
			.join('')
			.replace(/[[\]]/g, '');
		// Notion にアップロードされた画像の URL は約 1 時間で失効するため、自サイトに保存して配信する
		const src =
			image.type === 'file'
				? await saveImage(image.file.url)
				: image.external.url;
		return `![${alt}](${src})`;
	});

	n2m.setCustomTransformer('code', async (block) => {
		if (!('code' in block)) return false;
		const { code } = block;
		const lang = CODE_LANG[code.language] ?? code.language;
		const body = code.rich_text.map((t) => t.plain_text).join('');
		return `\`\`\`${lang}\n${body}\n\`\`\``;
	});

	return async (pageId: string) =>
		n2m.toMarkdownString(await n2m.pageToMarkdown(pageId)).parent ?? '';
}

export function notionLoader(): Loader {
	return {
		name: 'notion-blog-loader',
		load: async ({
			store,
			logger,
			config,
			parseData,
			renderMarkdown,
			generateDigest,
		}) => {
			const env = readNotionEnv(config.root);

			if (!env.token || !env.dataSourceId) {
				// 本番で記事が全消えしたサイトを公開しないよう、デプロイ時だけは失敗させる
				if (env.required) {
					throw new Error(
						'NOTION_TOKEN / NOTION_DATA_SOURCE_ID が未設定のためブログ記事を取得できない',
					);
				}
				logger.warn(
					'NOTION_TOKEN / NOTION_DATA_SOURCE_ID が未設定のため、ブログ記事 0 件でビルドする',
				);
				store.clear();
				return;
			}

			const notion = createNotionClient(env.token);
			const toMarkdown = createMarkdownConverter(notion, config.publicDir);
			const seen = new Set<string>();

			const pages = iteratePaginatedAPI(notion.dataSources.query, {
				data_source_id: env.dataSourceId,
				filter: { property: PROP.status, status: { equals: PUBLISHED } },
			});

			for await (const page of pages) {
				if (!isFullPage(page)) continue;

				const { slug, ...post } = readPost(page);
				if (seen.has(slug)) {
					throw new Error(`Slug が重複している: "${slug}" (${page.url})`);
				}
				seen.add(slug);

				// 本文の再取得は Notion API の呼び出し回数が多いため、未編集の記事は前回の結果を使い回す
				const digest = generateDigest(`${page.id}:${page.last_edited_time}`);
				if (store.get(slug)?.digest === digest) continue;

				const markdown = await toMarkdown(page.id);
				const data = await parseData({ id: slug, data: post });
				store.set({
					id: slug,
					data,
					digest,
					rendered: await renderMarkdown(markdown),
				});
			}

			// 非公開に戻された・削除された記事を残さない
			for (const id of store.keys()) {
				if (!seen.has(id)) store.delete(id);
			}

			logger.info(`Notion からブログ記事を ${seen.size} 件取得した`);
		},
	};
}
