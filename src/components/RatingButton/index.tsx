import { BookContext } from '@/src/contexts/BookContext'
import { Star } from 'phosphor-react'
import { useContext, useState } from 'react'
import { StarRatingBox } from '../StarRating/styles'
import { StarButton, StarButtonContent } from './styles'

export function RatingButton() {
  const { handleSetBookRating } = useContext(BookContext)

  const ratingStarArray = Array.from({ length: 5 }, (_, i) => i + 1)

  const [buttonValue, setButtonValue] = useState(0)

  function handleButtonHover(event: any) {
    setButtonValue(event.target.value)
  }

  function handleMakeVote(ratingVote: number) {
    handleSetBookRating(ratingVote)
  }

  return (
    <StarRatingBox>
      {ratingStarArray.map((star, index) => {
        if (star <= buttonValue) {
          return (
            <StarButtonContent key={star}>
              <StarButton
                value={star}
                onMouseOver={handleButtonHover}
                onClick={() => handleMakeVote(star)}
              >
                oi
              </StarButton>
              <Star weight="fill" size={28} />
            </StarButtonContent>
          )
        } else {
          return (
            <StarButtonContent key={star}>
              <StarButton value={star} onMouseOver={handleButtonHover}>
                oi
              </StarButton>
              <Star weight="regular" size={28} />
            </StarButtonContent>
          )
        }
      })}
    </StarRatingBox>
  )
}
