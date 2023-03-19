import Image from 'next/image'
import { StarRating } from '../StarRating'
import {
  TitleContainer,
  TrendingBookCardContainer,
  TrendingBookInfo,
} from './styles'

export function TrendingBookCard() {
  return (
    <TrendingBookCardContainer>
      <Image src={'/o-hobbit.png'} alt="book image" width={64} height={95} />
      <TrendingBookInfo>
        <TitleContainer>
          <span>A revolução dos bichos</span>
          <span>George Orwell</span>
        </TitleContainer>
        <StarRating ratingNumber={3} />
      </TrendingBookInfo>
    </TrendingBookCardContainer>
  )
}
