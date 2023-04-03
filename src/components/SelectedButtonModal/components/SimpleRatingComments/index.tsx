import { AvatarWithGradient } from '@/src/components/AvatarWithGradient'
import { StarRating } from '@/src/components/StarRating'
import { Container, Header, UserBox, UserInfoBox } from './styles'

interface SimpleRatingCommentsProps {
  imgUrl: string
  name: string
  createdAt?: Date
  comment: string
  commentRate: number
}

export function SimpleRatingComments({
  name,
  imgUrl,
  comment,
  commentRate,
}: SimpleRatingCommentsProps) {
  return (
    <Container>
      <Header>
        <UserBox>
          <AvatarWithGradient
            imgHeight={44}
            imgWidth={44}
            imgSize={'md'}
            url={imgUrl}
          />
          <UserInfoBox>
            <span>{name}</span>
            <span>Há 2 dias</span>
          </UserInfoBox>
        </UserBox>
        <StarRating ratingNumber={commentRate} />
      </Header>
      <p>{comment}</p>
    </Container>
  )
}
