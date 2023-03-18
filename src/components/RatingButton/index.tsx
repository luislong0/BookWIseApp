import { Star } from 'phosphor-react'
import { useState } from 'react'
import { StarRatingBox } from '../StarRating/styles'
import { StarButton, StarButtonContent } from './styles'

export function RatingButton() {
  const ratingStarArray = Array.from({ length: 5 }, (_, i) => i + 1)
  console.log(ratingStarArray)

  const [buttonValue, setButtonValue] = useState(0)

  function handleHover(event: any) {
    console.log(buttonValue)
    setButtonValue(event.target.value)
  }

  return (
    <StarRatingBox>
      {ratingStarArray.map((star, index) => {
        if (star <= buttonValue) {
          return (
            <StarButtonContent key={star}>
              <StarButton value={star} onMouseOver={handleHover}>
                oi
              </StarButton>
              <Star weight="fill" size={16} />
            </StarButtonContent>
          )
        } else {
          return (
            <StarButtonContent key={star}>
              <StarButton value={star} onMouseOver={handleHover}>
                oi
              </StarButton>
              <Star weight="regular" size={16} />
            </StarButtonContent>
          )
        }
      })}
    </StarRatingBox>
  )
}
