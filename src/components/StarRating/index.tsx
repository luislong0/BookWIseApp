import { Star } from 'phosphor-react'
import { StarRatingBox } from './styles'

interface StarRatingProps {
  ratingNumber: number
}

export function StarRating({ ratingNumber }: StarRatingProps) {
  const ratingStarArray = Array.from({ length: 5 }, (_, i) => i + 1)

  return (
    <StarRatingBox>
      {ratingStarArray.map((star, index) => {
        if (star <= ratingNumber) {
          return <Star key={index} weight="fill" size={16} />
        } else {
          return <Star key={index} weight="regular" size={16} />
        }
      })}
    </StarRatingBox>
  )
}
