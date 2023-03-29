import { StarRating } from '@/src/components/StarRating'
import Image from 'next/image'
import {
  BookCardContainer,
  BookInfoContainer,
  ReadingTag,
  TitleBox,
} from './styles'

interface BookCardProps {
  bookImg?: any
  bookTitle: string
  bookAuthor: string
}

export function BookCard({ bookTitle, bookAuthor }: BookCardProps) {
  const isReading = true

  return (
    <BookCardContainer
      onClick={() => {
        console.log('oi')
      }}
    >
      <Image
        src={
          'https://fv9-1.failiem.lv/thumb_show.php?i=rtbhxcc85&download_checksum=1328c7cf1522fa7472554d9a2c9d9d5692c9b959&download_timestamp=1680117958'
        }
        alt="book image"
        width={108}
        height={152}
      />
      <BookInfoContainer>
        <TitleBox>
          <span>{bookTitle}</span>
          <span>{bookAuthor}</span>
        </TitleBox>
        <StarRating ratingNumber={4} />
        {isReading === true ? (
          <ReadingTag>
            <span>LIDO</span>
          </ReadingTag>
        ) : (
          <></>
        )}
      </BookInfoContainer>
    </BookCardContainer>
  )
}
