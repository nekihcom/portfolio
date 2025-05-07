import type { NextApiRequest, NextApiResponse } from 'next';
import { getQiitas } from '@/lib/qiita';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await getQiitas();
    res.status(200).json({ qiitas: data });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Qiita articles' });
  }
} 