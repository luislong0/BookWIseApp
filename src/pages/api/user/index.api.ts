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
    const user = await prisma.user.findFirst({
      where: {
        name: userName,
      },
    })
    return res.json({ user })
  } else {
    const users = await prisma.user.findMany({})
    return res.json({ users })
  }
}
