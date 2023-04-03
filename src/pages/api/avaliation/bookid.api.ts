// /api/book?bookId=48b86ac2-014e-401d-bcbb-331ce5f4a457

import { prisma } from '@/src/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const bookId = String(req.query.bookId)

  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  if (bookId === 'undefined') {
    return res
      .status(401)
      .json({ Message: 'A book id has not been established' })
  }

  const avaliations = await prisma.avaliation.findMany({
    where: {
      bookId,
    },
    include: {
      User: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  })

  if (!avaliations) {
    return res.status(401).json({ Message: 'BookID not found' })
  } else {
    return res.json({ avaliations })
  }
}
