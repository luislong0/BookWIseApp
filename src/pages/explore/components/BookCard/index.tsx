import { StarRating } from '@/src/components/StarRating'
import { UserContext } from '@/src/contexts/UserContext'
import Image from 'next/image'
import { useContext } from 'react'
import {
  BookCardContainer,
  BookInfoContainer,
  ReadingTag,
  TitleBox,
} from './styles'

interface BookCardProps {
  bookImg?: any
  bookTitle: string
  bookAuthor: string
  bookRating: number
  userBookReadingId?: any
}

export function BookCard({
  bookTitle,
  bookAuthor,
  bookRating,
  bookImg,
  userBookReadingId,
}: BookCardProps) {
  const { loggedUser } = useContext(UserContext)

  return (
    <BookCardContainer
      onClick={() => {
        console.log(userBookReadingId)
        console.log(typeof userBookReadingId)
      }}
    >
      <Image src={bookImg} alt="book image" width={108} height={152} />
      <BookInfoContainer>
        <TitleBox>
          <span>{bookTitle}</span>
          <span>{bookAuthor}</span>
        </TitleBox>
        <StarRating ratingNumber={bookRating} />
        {userBookReadingId === loggedUser.id ? (
          <ReadingTag>
            <span>LIDO</span>
          </ReadingTag>
        ) : (
          <></>
        )}
      </BookInfoContainer>
    </BookCardContainer>
  )
}
