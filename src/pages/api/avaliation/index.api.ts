// /api/book?bookId=48b86ac2-014e-401d-bcbb-331ce5f4a457

import { prisma } from '@/src/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

const createCommentRatingSchema = z.object({
  userId: z.string(),
  bookId: z.string(),
  comment: z.string(),
  ratingNumber: z.number(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { userId, bookId, comment, ratingNumber } =
      createCommentRatingSchema.parse(req.body)

    const newAvaliation = await prisma.avaliation.create({
      data: {
        userId,
        bookId,
        comment,
        ratingNumber,
      },
    })
    return res.json(newAvaliation)
  }
}
