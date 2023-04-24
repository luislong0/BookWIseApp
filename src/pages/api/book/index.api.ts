// /api/book?bookId=48b86ac2-014e-401d-bcbb-331ce5f4a457

import { prisma } from '@/src/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const bookTitle = String(req.query.bookTitle)

  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  if (bookTitle === 'undefined') {
    const book = await prisma.book.findMany({
      include: {
        avaliations: {
          select: {
            ratingNumber: true,
            User: {
              select: {
                id: true,
              },
            },
          },
        },
      },
      orderBy: {
        title: 'asc',
      },
    })
    return res.json({ book })
  } else {
    const book = await prisma.book.findMany({
      where: {
        title: {
          contains: bookTitle,
        },
      },
      include: {
        avaliations: {
          select: {
            ratingNumber: true,
            User: {
              select: {
                id: true,
              },
            },
          },
        },
      },
      orderBy: {
        title: 'asc',
      },
    })
    return res.json({ book })
  }
}
