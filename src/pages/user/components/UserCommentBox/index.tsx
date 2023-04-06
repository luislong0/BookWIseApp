import { StarRating } from '@/src/components/StarRating'
import Image from 'next/image'
import {
  BookHeader,
  Box,
  TitleBox,
  TitleContainer,
  UserCommentBoxContainer,
} from './styles'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface UserCommentBoxContainerProps {
  bookImage: string
  bookTitle: string
  bookAuthor: string
  rating: number
  comment: string
  createdAt: Date
}

export function UserCommentBox({
  bookAuthor,
  bookImage,
  bookTitle,
  comment,
  rating,
  createdAt,
}: UserCommentBoxContainerProps) {
  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const commentCreatedDate = capitalizeFirstLetter(
    formatDistanceToNow(new Date(createdAt), {
      addSuffix: true,
      locale: ptBR,
    }),
  )

  return (
    <UserCommentBoxContainer>
      <span>{commentCreatedDate}</span>
      <Box>
        <BookHeader>
          <Image src={bookImage} alt="book image" width={110} height={160} />
          <TitleContainer>
            <TitleBox>
              <span>{bookTitle}</span>
              <span>{bookAuthor}</span>
            </TitleBox>

            <StarRating ratingNumber={rating} />
          </TitleContainer>
        </BookHeader>
        <p>{comment}</p>
      </Box>
    </UserCommentBoxContainer>
  )
}
