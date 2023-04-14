import { StarRating } from '@/src/components/StarRating'
import { UserContext } from '@/src/contexts/UserContext'
import Image from 'next/image'
import { useContext } from 'react'
import {
  BookCardContainer,
  BookInfoContainer,
  ReadingTag,
  TitleBox,
} from './styles'
import { useSession } from 'next-auth/react'

interface BookCardProps {
  bookImg?: any
  bookTitle: string
  bookAuthor: string
  bookRating: number
  userBookReadingId?: any
}

export function BookCard({
  bookTitle,
  bookAuthor,
  bookRating,
  bookImg,
  userBookReadingId,
}: BookCardProps) {
  const { loggedUser } = useContext(UserContext)
  const session = useSession()

  return (
    <BookCardContainer
      onClick={() => {
        console.log(userBookReadingId);
        console.log(typeof userBookReadingId);
      }}
    >
      <Image src={bookImg} alt="book image" width={108} height={152} />
      <BookInfoContainer>
        <TitleBox>
          <span>{bookTitle}</span>
          <span>{bookAuthor}</span>
        </TitleBox>
        <StarRating ratingNumber={bookRating} />
        {userBookReadingId === loggedUser.id && session.data?.user ? (
          <ReadingTag>
            <span>LIDO</span>
          </ReadingTag>
        ) : (
          <></>
        )}
      </BookInfoContainer>
    </BookCardContainer>
  );
}
