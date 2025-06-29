// microCMS API クライアント
import { Work, BlogPost, MicroCMSResponse } from '../types/type';

class MicroCMSClient {
  private apiKey: string;
  private serviceDomain: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY || '';
    this.serviceDomain = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || '';
    this.baseUrl = `https://${this.serviceDomain}.microcms.io/api/v1`;
    
    // デバッグ情報（開発環境のみ）
    if (process.env.NODE_ENV === 'development') {
      console.log('microCMS Client initialized:');
      console.log('- Service Domain:', this.serviceDomain);
      console.log('- API Key configured:', !!this.apiKey);
      console.log('- Base URL:', this.baseUrl);
    }
  }

  private async fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const response = await fetch(url, {
      headers: {
        'X-MICROCMS-API-KEY': this.apiKey,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`microCMS API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // 作品一覧を取得
  async getWorks(limit: number = 3): Promise<Work[]> {
    try {
      const response = await this.fetchAPI<MicroCMSResponse<Work>>(
        `/work?limit=${limit}&orders=-publishedAt`
      );
      return response.contents;
    } catch (error) {
      console.error('Failed to fetch works from microCMS:', error);
      if (error instanceof Error) {
        console.error('Error details:', error.message);
      }
      return [];
    }
  }

  // ブログ記事一覧を取得
  async getBlogPosts(limit: number = 3): Promise<BlogPost[]> {
    try {
      const response = await this.fetchAPI<MicroCMSResponse<BlogPost>>(
        `/blog?limit=${limit}&orders=-publishedAt`
      );
      return response.contents;
    } catch (error) {
      console.error('Failed to fetch blog posts from microCMS:', error);
      if (error instanceof Error) {
        console.error('Error details:', error.message);
      }
      return [];
    }
  }

  // 特定の作品を取得
  async getWork(id: string): Promise<Work | null> {
    try {
      return await this.fetchAPI<Work>(`/work/${id}`);
    } catch (error) {
      console.error(`Failed to fetch work ${id}:`, error);
      return null;
    }
  }

  // 特定のブログ記事を取得
  async getBlogPost(id: string): Promise<BlogPost | null> {
    try {
      return await this.fetchAPI<BlogPost>(`/blog/${id}`);
    } catch (error) {
      console.error(`Failed to fetch blog post ${id}:`, error);
      return null;
    }
  }
}

export const microCMSClient = new MicroCMSClient(); 