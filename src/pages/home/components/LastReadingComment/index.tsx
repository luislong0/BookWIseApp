import { StarRating } from '@/src/components/StarRating'
import Image from 'next/image'
import {
  InfoBox,
  InfoTitleBox,
  LastReadingCommentBox,
  LastReadingCommentHeader,
} from './styles'

export function LastReadingComment() {
  return (
    <LastReadingCommentBox>
      <Image src={'/o-hobbit.png'} alt="book image" width={110} height={160} />
      <InfoBox>
        <LastReadingCommentHeader>
          <span>Há 2 dias</span>
          <StarRating ratingNumber={4} />
        </LastReadingCommentHeader>
        <InfoTitleBox>
          <span>Entendendo Algoritmos</span>
          <span>Aditya Bhargava</span>
        </InfoTitleBox>
        <p>
          Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
          Penatibus id vestibulum imperdiet a at imperdiet lectu...
        </p>
      </InfoBox>
    </LastReadingCommentBox>
  )
}
