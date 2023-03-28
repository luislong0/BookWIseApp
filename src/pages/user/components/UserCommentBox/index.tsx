import { StarRating } from '@/src/components/StarRating'
import Image from 'next/image'
import {
  BookHeader,
  Box,
  TitleBox,
  TitleContainer,
  UserCommentBoxContainer,
} from './styles'

export function UserCommentBox() {
  return (
    <UserCommentBoxContainer>
      <span>Há 2 dias</span>
      <Box>
        <BookHeader>
          <Image
            src={'/o-hobbit.png'}
            alt="book image"
            width={110}
            height={160}
          />
          <TitleContainer>
            <TitleBox>
              <span>Entendendo Algoritmos</span>
              <span>Aditya Bhargava</span>
            </TitleBox>

            <StarRating ratingNumber={4} />
          </TitleContainer>
        </BookHeader>
        <p>
          Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae
          non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et
          suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin
          tristique pretium quam. Mollis et luctus amet sed convallis varius
          massa sagittis. Proin sed proin at leo quis ac sem. Nam donec accumsan
          curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet
          elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer
          pellentesque.
        </p>
      </Box>
    </UserCommentBoxContainer>
  )
}
