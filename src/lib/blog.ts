import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;
export type Category = CollectionEntry<'categories'>;

export async function getCategories(): Promise<Category[]> {
	return (await getCollection('categories')).sort(
		(a, b) => a.data.order - b.data.order,
	);
}

// ページから記事を取るときは必ずここを通し、カテゴリ未定義の記事を含んだままビルドが通るのを防ぐ
export async function getPosts(): Promise<Post[]> {
	const [posts, categories] = await Promise.all([
		getCollection('blog'),
		getCategories(),
	]);
	const ids = new Set(categories.map((c) => c.id));
	const unknown = posts.filter((p) => !ids.has(p.data.category));
	if (unknown.length > 0) {
		const detail = unknown.map((p) => `${p.id}: ${p.data.category}`).join(', ');
		throw new Error(
			`categories.yaml に未定義のカテゴリを持つ記事がある (${detail})`,
		);
	}
	return posts.sort(
		(a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
	);
}

export function findCategory(
	categories: Category[],
	id: string,
): Category['data'] & { id: string } {
	// getPosts で存在を検証済みのため、見つからないのはこの関数の誤用である
	const category = categories.find((c) => c.id === id);
	if (!category) throw new Error(`未定義のカテゴリ: ${id}`);
	return { id: category.id, ...category.data };
}

// ビルド環境（CI は UTC）に関係なく、日本時間の日付で表示する
const dateFormatter = new Intl.DateTimeFormat('ja-JP', {
	timeZone: 'Asia/Tokyo',
	year: 'numeric',
	month: '2-digit',
	day: '2-digit',
});

export function formatDate(date: Date): string {
	return dateFormatter.format(date).replaceAll('/', '.');
}
