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
      include: {
        avaliations: {
          include: {
            Book: {
              select: {
                id: true,
                author: true,
                title: true,
                pagesNumber: true,
                categoryOne: true,
                categoryTwo: true,
              },
            },
          },
        },
      },
    })

    await prisma.$executeRaw`SET sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));`

    if (user?.avaliations.length !== 0) {
      const authorsCount: any = await prisma.$queryRaw`
      SELECT COUNT(DISTINCT Book.author) AS authorsCount
      FROM Avaliation
      INNER JOIN Book ON Avaliation.bookId = Book.id
      WHERE Avaliation.userId = ${user?.id};
    `

      const authorResponse: any = await prisma.$queryRaw`
      SELECT COUNT(DISTINCT b.author) AS quantidade_autores
      FROM Avaliation a
      JOIN Book b ON a.bookId = b.id
      WHERE a.userId = ${user?.id};
    `

      const categoryResponse: any = await prisma.$queryRaw`
      SELECT b.categoryOne, COUNT(*) AS total
      FROM Book b
      JOIN Avaliation a ON b.id = a.bookId
      WHERE a.userId = ${user?.id}
      GROUP BY b.categoryOne
      ORDER BY total DESC
      LIMIT 1;
    `

      return res.json({
        avaliations: user?.avaliations,
        booksCount: Number(authorsCount[0].authorsCount),
        authorQuantity: Number(authorResponse[0].quantidade_autores),
        mostCategory: categoryResponse[0].categoryOne,
      })
    } else {
      return res.json({
        avaliations: [],
        booksCount: 0,
        authorQuantity: 0,
        mostCategory: 'Nenhuma',
      })
    }
  }
}
