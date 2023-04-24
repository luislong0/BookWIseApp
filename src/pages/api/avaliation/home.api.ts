// /api/book?bookId=48b86ac2-014e-401d-bcbb-331ce5f4a457

import { prisma } from '@/src/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const userId = String(req.query.userId)

  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  if (userId === 'undefined') {
    const avaliations = await prisma.avaliation.findMany({
      take: 5,
      include: {
        User: {
          select: {
            name: true,
            image: true,
          },
        },
        Book: {
          select: {
            imageUrl: true,
            author: true,
            title: true,
          },
        },
      },
      orderBy: {
        created_at: 'desc',
      },
    })

    if (avaliations.length !== 0) {
      return res.json({ avaliations })
    } else {
      return res.json({ avaliations: [] })
    }
  } else {
    const avaliation = await prisma.avaliation.findFirst({
      where: {
        userId,
      },
      include: {
        User: {
          select: {
            name: true,
            image: true,
          },
        },
        Book: {
          select: {
            imageUrl: true,
            author: true,
            title: true,
          },
        },
      },
      orderBy: {
        created_at: 'desc',
      },
      take: 1,
    })

    console.log('PEGA NO MEU HOME AVALIATIONS 2: ' + JSON.stringify(avaliation))

    if (avaliation) {
      return res.json({ avaliation })
    } else {
      return res.json({ avaliation: null })
    }
  }
}
