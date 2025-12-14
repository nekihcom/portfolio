// src/services/profile.ts
import type { IProfile, TSocialLinksObject } from "@/types/type";


/**
 * Drupal上のリンク型フィールドをオブジェクトで使えるように変換する
 */

const parseSocialLinksToObject = (htmlString: string): TSocialLinksObject => {
  const socialLinks: TSocialLinksObject = {};
  // 正規表現で「プラットフォーム名<a href="URL">...</a>」のパターンを検索
  const regex = /(?:^|,\s*)([^<]+?)\s*<a href="([^"]+)">[^<]+<\/a>/g;
  let match;

  // 全てのマッチを処理
  while ((match = regex.exec(htmlString)) !== null) {
    const platform = match[1].trim(); // プラットフォーム名 (例: "X", "note")
    const url = match[2];             // URL (例: "https://x.com/nekihcom")
    socialLinks[platform] = url;
  }
  return socialLinks;
}


/**
 * プロフィール情報を取得
 */
export async function getProfile(): Promise<IProfile | null> {
  try {
    const response = await fetch(`${process.env.API_ENDPOINT}/get/profile`, {
      next: { revalidate: false } // SSG（デフォルト）
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch profile: ${response.status}`);
    }
    
    const data = (await response.json())[0];

    const field_link_obj = parseSocialLinksToObject(data.field_link);
    const profile: IProfile = {
      ...data,
      field_link: field_link_obj
    };
    return profile;
  } catch (error) {
    console.error("Failed to fetch profile:", error);
    return null;
  }
}