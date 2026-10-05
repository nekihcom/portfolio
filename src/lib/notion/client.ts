import { fileURLToPath } from 'node:url';
import { Client } from '@notionhq/client';

export interface NotionEnv {
	token?: string;
	dataSourceId?: string;
	required: boolean;
}

// CI では Secrets が process.env に直接入るが、ローカルでは .env を読む必要がある。
// Vite の import.meta.env は content.config の実行文脈で確実に使える保証がないため、Node 標準の loadEnvFile を使う。
export function readNotionEnv(root: URL): NotionEnv {
	try {
		process.loadEnvFile(fileURLToPath(new URL('.env', root)));
	} catch {
		// .env が無い（または読めない）環境では process.env の値だけで判定する
	}

	return {
		token: process.env.NOTION_TOKEN || undefined,
		dataSourceId: process.env.NOTION_DATA_SOURCE_ID || undefined,
		required: process.env.NOTION_REQUIRED === 'true',
	};
}

export function createNotionClient(token: string): Client {
	return new Client({ auth: token });
}
