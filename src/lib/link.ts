export const SITE_URL = 'https://www.mchkn.com';

// 外部リンクは別タブで開く。mailto: や相対パス、自サイトの絶対 URL は同じタブのままにする
export function isExternalLink(href: string): boolean {
	let url: URL;
	try {
		url = new URL(href);
	} catch {
		return false;
	}
	return (
		(url.protocol === 'http:' || url.protocol === 'https:') &&
		url.host !== new URL(SITE_URL).host
	);
}
