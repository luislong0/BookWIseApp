// /api/book?bookId=48b86ac2-014e-401d-bcbb-331ce5f4a457

import { prisma } from '@/src/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

interface TopBooksProps {
  title: string
  author: string
  imageUrl: string
  numAvaliacoes: string
  sumAvaliacoes: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  await prisma.$executeRaw`SET sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));`

  const topBooks: TopBooksProps[] = await prisma.$queryRaw`
    SELECT b.title, b.author, b.imageUrl, COUNT(a.id) AS numAvaliacoes, SUM(a.ratingNumber) AS sumAvaliacoes
    FROM Book b
    LEFT JOIN Avaliation a ON b.id = a.bookId
    GROUP BY b.title, b.author, b.imageUrl
    ORDER BY numAvaliacoes DESC
    LIMIT 3;
  `

  const topBooksParsed: any = topBooks.map((book) => {
    return {
      title: book.title,
      author: book.author,
      bookImage: book.imageUrl,
      numAvaliacoes: Number(book.numAvaliacoes),
      avaliation: Math.round(
        Number(book.sumAvaliacoes) / Number(book.numAvaliacoes),
      ),
    }
  })

  return res.json({ topBooksParsed })
}
