import Image from 'next/image'
import { StarRating } from '../StarRating'
import {
  TitleContainer,
  TrendingBookCardContainer,
  TrendingBookInfo,
} from './styles'

interface TrendingBookCardProps {
  bookTitle: string
  bookAuthor: string
  bookAvaliation: number
  bookImage: string
}

export function TrendingBookCard({
  bookAuthor,
  bookAvaliation,
  bookImage,
  bookTitle,
}: TrendingBookCardProps) {
  return (
    <TrendingBookCardContainer>
      <Image src={bookImage} alt="book image" width={64} height={95} />
      <TrendingBookInfo>
        <TitleContainer>
          <span>{bookTitle}</span>
          <span>{bookAuthor}</span>
        </TitleContainer>
        <StarRating ratingNumber={bookAvaliation} />
      </TrendingBookInfo>
    </TrendingBookCardContainer>
  )
}
