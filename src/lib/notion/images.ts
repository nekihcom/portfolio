import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { extname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const IMAGE_PUBLIC_PATH = '/notion-images';

const CONTENT_TYPE_EXT: Record<string, string> = {
	'image/png': '.png',
	'image/jpeg': '.jpg',
	'image/gif': '.gif',
	'image/webp': '.webp',
	'image/svg+xml': '.svg',
	'image/avif': '.avif',
};

// Notion の署名付き URL はクエリ（署名）が毎回変わるが、パス部分はファイルごとに不変である。
// パスからファイル名を決めることで、再ビルドのたびに同じ画像を別名で保存し直すのを避ける。
function fileBaseName(url: URL): string {
	return createHash('sha256')
		.update(url.origin + url.pathname)
		.digest('hex')
		.slice(0, 16);
}

export function createImageSaver(publicDir: URL) {
	const outDir = fileURLToPath(new URL(`.${IMAGE_PUBLIC_PATH}/`, publicDir));

	return async function saveImage(src: string): Promise<string> {
		const url = new URL(src);
		const base = fileBaseName(url);
		const knownExt = extname(url.pathname).toLowerCase();

		if (knownExt && existsSync(`${outDir}/${base}${knownExt}`)) {
			return `${IMAGE_PUBLIC_PATH}/${base}${knownExt}`;
		}

		const res = await fetch(url);
		if (!res.ok) {
			throw new Error(
				`Notion 画像の取得に失敗した (${res.status}): ${url.pathname}`,
			);
		}
		const ext =
			knownExt ||
			CONTENT_TYPE_EXT[res.headers.get('content-type')?.split(';')[0] ?? ''] ||
			'';

		await mkdir(outDir, { recursive: true });
		await writeFile(
			`${outDir}/${base}${ext}`,
			Buffer.from(await res.arrayBuffer()),
		);
		return `${IMAGE_PUBLIC_PATH}/${base}${ext}`;
	};
}
