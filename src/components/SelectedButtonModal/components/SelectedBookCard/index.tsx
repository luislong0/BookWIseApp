import { StarRating } from '@/src/components/StarRating'
import { BookContext } from '@/src/contexts/BookContext'
import Image from 'next/image'
import { BookmarkSimple, BookOpen } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import {
  BookCategoryAndPageContainer,
  BookInfo,
  CategoryBox,
  CategoryInfoBox,
  InfoContainer,
  PageCountBox,
  PageCountInfoBox,
  RatingContainer,
  SelectedButtonCardContainer,
  TitleContainer,
} from './styles'

interface SelectedButtonCardProps {
  bookId: string
}

export function SelectedButtonCard({ bookId }: SelectedButtonCardProps) {
  const {
    getBookById,
    selectedBook,
    getSelectedBookRating,
    selectedBookRating,
  } = useContext(BookContext)

  useEffect(() => {
    getBookById(bookId)
    getSelectedBookRating(bookId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookId])

  return (
    <SelectedButtonCardContainer>
      <BookInfo>
        <Image
          src={selectedBook.imageUrl}
          alt="book image"
          width={172}
          height={242}
        />
        <InfoContainer>
          <TitleContainer>
            <span>{selectedBook.title}</span>
            <span>{selectedBook.author}</span>
          </TitleContainer>

          <RatingContainer>
            <StarRating ratingNumber={selectedBookRating} />

            <span>
              {Array.isArray(selectedBook.avaliations) === true &&
                `${selectedBook.avaliations.length} avaliações`}
            </span>
          </RatingContainer>
        </InfoContainer>
      </BookInfo>
      <BookCategoryAndPageContainer>
        <CategoryBox>
          <BookmarkSimple size={24} weight="bold" />
          <CategoryInfoBox>
            <span>Categoria</span>
            <span>
              {selectedBook.categoryTwo !== null
                ? `${selectedBook.categoryOne}, ${selectedBook.categoryTwo}`
                : `${selectedBook.categoryOne}`}
            </span>
          </CategoryInfoBox>
        </CategoryBox>
        <PageCountBox>
          <BookOpen size={24} weight="bold" />
          <PageCountInfoBox>
            <span>Páginas</span>
            <span>{selectedBook.pagesNumber}</span>
          </PageCountInfoBox>
        </PageCountBox>
      </BookCategoryAndPageContainer>
    </SelectedButtonCardContainer>
  )
}
