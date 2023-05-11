import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  name: string;
}

// TODO: remove
export async function GET(_: NextApiRequest, res: NextApiResponse<Data>) {
  return res.status(200).json({ name: 'John Doe' });
}
