import { AvatarWithGradient } from '@/src/components/AvatarWithGradient'
import { StarRating } from '@/src/components/StarRating'
import { Container, Header, UserBox, UserInfoBox } from './styles'

export function SimpleRatingBox() {
  return (
    <Container>
      <Header>
        <UserBox>
          <AvatarWithGradient imgHeight={44} imgWidth={44} imgSize={'md'} />
          <UserInfoBox>
            <span>Brandon Botosh</span>
            <span>Há 2 dias</span>
          </UserInfoBox>
        </UserBox>
        <StarRating ratingNumber={4} />
      </Header>
      <p>
        Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
        Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta
        eget nec vitae sit vulputate eget
      </p>
    </Container>
  )
}
