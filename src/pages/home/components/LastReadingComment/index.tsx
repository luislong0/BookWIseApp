import { StarRating } from '@/src/components/StarRating'
import Image from 'next/image'
import {
  InfoBox,
  InfoTitleBox,
  LastReadingCommentBox,
  LastReadingCommentHeader,
} from './styles'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'
import { getLimitedText } from '@/src/utils/getLimitedText'

interface LastReadingCommentProps {
  bookImage: string
  bookTitle: string
  bookAuthor: string
  bookComment: string
  bookRating: number
  createdAt: Date
}

export function LastReadingComment({
  bookAuthor,
  bookComment,
  bookImage,
  bookRating,
  bookTitle,
  createdAt,
}: LastReadingCommentProps) {
  const formattedComment = getLimitedText({
    text: bookComment,
    letterLimit: 195,
  })

  return (
    <LastReadingCommentBox>
      <Image src={bookImage} alt="book image" width={110} height={160} />
      <InfoBox>
        <LastReadingCommentHeader>
          {createdAt !== undefined && (
            <span>
              {formatDistanceToNow(new Date(createdAt), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          )}

          <StarRating ratingNumber={bookRating} />
        </LastReadingCommentHeader>
        <InfoTitleBox>
          <span>{bookTitle}</span>
          <span>{bookAuthor}</span>
        </InfoTitleBox>
        <p>{formattedComment?.text}</p>
      </InfoBox>
    </LastReadingCommentBox>
  )
}
