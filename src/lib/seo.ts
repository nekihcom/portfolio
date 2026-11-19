export type OgType = 'profile' | 'website' | 'article';

export interface SeoInput {
	/** ページ固有の名前。サイト名は自動で後ろに付く */
	title?: string;
	description?: string;
	path?: string;
	ogType?: OgType;
}

export interface ProfileSeoSource {
	name: string;
	role: string;
	seo: {
		description: string;
		locale: string;
	};
}

export interface SeoMeta {
	title: string;
	description: string;
	canonicalUrl: URL;
	ogLocale: string;
	ogType: OgType;
	ogImage: URL;
	jsonLd: string;
}

export function buildSeoMeta(
	site: URL | undefined,
	profile: ProfileSeoSource,
	input: SeoInput = {},
): SeoMeta {
	const title = input.title
		? `${input.title} | ${profile.name}`
		: `${profile.name} | ${profile.role}`;
	const description = input.description ?? profile.seo.description;
	const canonicalUrl = new URL(input.path ?? '/', site);
	// X は相対パスを読めないので絶対URLにする
	const ogImage = new URL('/ogp.png', site);

	const jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: profile.name,
		jobTitle: profile.role,
		url: canonicalUrl.toString(),
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Tokyo',
			addressCountry: 'JP',
		},
	});

	return {
		title,
		description,
		canonicalUrl,
		ogLocale: profile.seo.locale,
		ogType: input.ogType ?? 'profile',
		ogImage,
		jsonLd,
	};
}
