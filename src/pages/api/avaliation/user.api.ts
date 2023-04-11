// /api/book?bookId=48b86ac2-014e-401d-bcbb-331ce5f4a457

import { prisma } from '@/src/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const userBooksAvaliationSchema = z.object({
    userName: z.string(),
  })

  const { userName } = userBooksAvaliationSchema.parse(req.query)

  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  if (userName === 'undefined') {
    return res
      .status(401)
      .json({ Message: 'user name has not been established' })
  }

  const avaliations = await prisma.user.findMany({
    where: {
      name: userName,
    },
    include: {
      avaliations: {
        include: {
          Book: {
            select: {
              title: true,
              author: true,
              imageUrl: true,
            },
          },
        },
      },
    },
  })

  console.log(JSON.stringify(avaliations[0].avaliations))

  const userAvaliations = avaliations[0].avaliations.map((avaliation) => {
    return {
      avaliation,
    }
  })

  if (!avaliations) {
    return res.status(401).json({ Message: 'userName not found' })
  } else {
    return res.json({ userAvaliations })
  }
}
