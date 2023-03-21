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
}

export function BookCard({ bookTitle, bookAuthor }: BookCardProps) {
  const isReading = true

  return (
    <BookCardContainer
      onClick={() => {
        console.log('oi')
      }}
    >
      <Image src={'/o-hobbit.png'} alt="book image" width={108} height={152} />
      <BookInfoContainer>
        <TitleBox>
          <span>{bookTitle}</span>
          <span>{bookAuthor}</span>
        </TitleBox>
        <StarRating ratingNumber={4} />
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
