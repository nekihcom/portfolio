import { microCMSClient } from './microcms';
import { Work } from '@/types/type';

/**
 * 作品詳細を取得する関数
 * @param id - 作品のID
 */
export async function fetchWork(id: string): Promise<Work | null> {
  try {
    const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY;
    const serviceDomain = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN;
    
    if (!apiKey || !serviceDomain) {
      console.warn('microCMS environment variables are not configured');
      return null;
    }

    const work = await microCMSClient.getWork(id);
    return work;
  } catch (error) {
    console.error('Failed to fetch work:', error);
    return null;
  }
}

/**
 * 作品一覧を取得する関数
 * @param limit - 取得件数（デフォルト: 50）
 */
export async function fetchWorks(limit: number = 50): Promise<Work[]> {
  try {
    const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY;
    const serviceDomain = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN;
    
    if (!apiKey || !serviceDomain) {
      console.warn('microCMS environment variables are not configured');
      return [];
    }

    const works = await microCMSClient.getWorks(limit);
    return works;
  } catch (error) {
    console.error('Failed to fetch works:', error);
    return [];
  }
} 