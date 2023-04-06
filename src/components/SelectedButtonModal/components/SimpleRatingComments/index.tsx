import { AvatarWithGradient } from '@/src/components/AvatarWithGradient'
import { StarRating } from '@/src/components/StarRating'
import { Container, Header, UserBox, UserInfoBox } from './styles'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface SimpleRatingCommentsProps {
  imgUrl: string
  name: string
  createdAt: string
  comment: string
  commentRate: number
}

export function SimpleRatingComments({
  name,
  imgUrl,
  comment,
  commentRate,
  createdAt,
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
            <span>
              {formatDistanceToNow(new Date(createdAt), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </UserInfoBox>
        </UserBox>
        <StarRating ratingNumber={commentRate} />
      </Header>
      <p>{comment}</p>
    </Container>
  )
}
