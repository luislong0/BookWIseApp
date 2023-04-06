import { getLimitedText } from '@/src/utils/getLimitedText'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import Image from 'next/image'
import { useState } from 'react'
import { AvatarWithGradient } from '../AvatarWithGradient'
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

interface BookCommentBoxProps {
  userPhoto: string
  userName: string
  createdAt: Date
  ratingNumber: number
  bookImage: string
  bookTitle: string
  bookAuthor: string
  bookComment: string
}

interface CommentProps {
  text: string
  type: 'limited' | 'full'
  hideText: boolean
}

export function BookCommentBox({
  bookAuthor,
  bookComment,
  bookImage,
  bookTitle,
  createdAt,
  ratingNumber,
  userName,
  userPhoto,
}: BookCommentBoxProps) {
  const textObject = getLimitedText({
    text: bookComment,
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
        text: bookComment,
      })
    } else {
      setComment({
        type: 'limited',
        hideText: true,
        text: textObject!.text,
      })
    }
  }

  return (
    <Container>
      <Header>
        <UserInfoBox>
          <AvatarWithGradient
            imgWidth={45}
            imgHeight={45}
            imgSize="md"
            url={userPhoto}
          />
          <UserDescription>
            <span>{userName}</span>
            <span>
              <span>
                {formatDistanceToNow(new Date(createdAt), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </span>
          </UserDescription>
        </UserInfoBox>
        <StarRating ratingNumber={ratingNumber} />
      </Header>
      <BookComment>
        <Image src={bookImage} alt="book image" width={110} height={160} />
        <BookInfoBox>
          <BookTitleBox>
            <span>{bookTitle}</span>
            <span>{bookAuthor}</span>
          </BookTitleBox>
          <TextBox>
            <p>
              {comment.text}{' '}
              {comment.type === 'limited' &&
              comment.hideText === true &&
              comment.text.length > 220 ? (
                <button onClick={() => toggleHideMessage('full')}>
                  ver mais
                </button>
              ) : (
                <></>
              )}
              {comment.type === 'full' &&
              comment.hideText === false &&
              comment.text.length > 220 ? (
                <button onClick={() => toggleHideMessage('hide')}>
                  ver menos
                </button>
              ) : (
                <></>
              )}
            </p>
          </TextBox>
        </BookInfoBox>
      </BookComment>
    </Container>
  )
}
