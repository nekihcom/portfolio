import { NextResponse } from 'next/server';
import { getMyAllQiitaPosts } from '@/lib/hook/useArticle';

export async function GET() {
  try {
    const data = await getMyAllQiitaPosts();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Qiita API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Qiita articles' }, 
      { status: 500 }
    );
  }
} 