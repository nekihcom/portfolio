export const SITE_URL = 'https://www.mchkn.com';

// www なしのドメインも自サイトとして扱う
const SITE_HOSTS = new Set(['www.mchkn.com', 'mchkn.com']);

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
		!SITE_HOSTS.has(url.host)
	);
}
