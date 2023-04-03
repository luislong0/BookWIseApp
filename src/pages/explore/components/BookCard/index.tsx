import { StarRating } from '@/src/components/StarRating'
import Image from 'next/image'
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
}

export function BookCard({
  bookTitle,
  bookAuthor,
  bookRating,
  bookImg,
}: BookCardProps) {
  const isReading = true

  return (
    <BookCardContainer
      onClick={() => {
        console.log('oi')
      }}
    >
      <Image src={bookImg} alt="book image" width={108} height={152} />
      <BookInfoContainer>
        <TitleBox>
          <span>{bookTitle}</span>
          <span>{bookAuthor}</span>
        </TitleBox>
        <StarRating ratingNumber={bookRating} />
        {isReading === true ? (
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
