// /api/book?bookId=48b86ac2-014e-401d-bcbb-331ce5f4a457

import { prisma } from '@/src/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const bookTitle = String(req.query.bookTitle)

  if (bookTitle === 'undefined') {
    const book = await prisma.book.findMany()
    return res.json({ book })
  } else {
    const book = await prisma.book.findMany({
      where: {
        title: {
          contains: bookTitle,
        },
      },
    })

    return res.json({ book })
  }
}
