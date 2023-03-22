import { getLimitedText } from '@/src/utils/getLimitedText'
import Image from 'next/image'
import { useState } from 'react'
import { AvatarWithGradient } from '../AvatarWithGradient'
import { RatingButton } from '../RatingButton'
import { StarRating } from '../StarRating'
import {
  BookComment,
  BookInfoBox,
  BookTitleBox,
  Container,
  Header,
  TextBox,
  UserDescription,
  UserInfoBox,
} from './styles'

interface CommentProps {
  text: string
  type: 'limited' | 'full'
  hideText: boolean
}

export function BookCommentBox() {
  const textObject = getLimitedText({
    text: 'Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh',
    letterLimit: 220,
  })

  const [comment, setComment] = useState<CommentProps>(
    textObject as CommentProps,
  )

  function toggleHideMessage(toggleOption: string) {
    if (toggleOption === 'full') {
      setComment({
        type: 'full',
        hideText: false,
        text: 'Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh',
      })
    } else {
      setComment({
        type: 'limited',
        hideText: true,
        text: textObject.text,
      })
    }
  }

  return (
    <Container>
      <Header>
        <UserInfoBox>
          <AvatarWithGradient imgWidth={45} imgHeight={45} imgSize="md" />
          <UserDescription>
            <span>Luis Otavio</span>
            <span>Hoje</span>
          </UserDescription>
        </UserInfoBox>
        <StarRating ratingNumber={3} />
      </Header>
      <BookComment>
        <Image
          src={'/o-hobbit.png'}
          alt="book image"
          width={110}
          height={160}
        />
        <BookInfoBox>
          <BookTitleBox>
            <span>O Hobbit</span>
            <span>J.R.R. Tolkien</span>
          </BookTitleBox>
          <TextBox>
            <p>
              {comment.text}{' '}
              {comment.type === 'limited' && comment.hideText === true ? (
                <button onClick={() => toggleHideMessage('full')}>
                  ver mais
                </button>
              ) : (
                <button onClick={() => toggleHideMessage('hide')}>
                  ver menos
                </button>
              )}
            </p>
          </TextBox>
        </BookInfoBox>
      </BookComment>
      <RatingButton />
    </Container>
  )
}
