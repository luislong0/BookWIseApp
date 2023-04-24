// /api/book?bookId=48b86ac2-014e-401d-bcbb-331ce5f4a457

import { prisma } from '@/src/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const userName = String(req.query.userName)

  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  if (userName !== 'undefined') {
    const response = await prisma.avaliation.groupBy({
      by: ['userId'],
      _count: {
        id: true,
      },
      orderBy: {
        _count: {
          created_at: 'asc',
        },
      },
      take: 1,
    })
    return res.json({ avaliations: response[0]._count })
  } else {
    return res.status(405).end()
  }
}
