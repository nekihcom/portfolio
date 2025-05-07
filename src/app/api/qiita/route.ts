import { NextResponse } from 'next/server';
import { getQiitas } from '@/lib/qiita';

export async function GET() {
  try {
    const data = await getQiitas();
    return NextResponse.json({ qiitas: data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch Qiita articles' }, 
      { status: 500 }
    );
  }
} 