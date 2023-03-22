import { StarRating } from '@/src/components/StarRating'
import Image from 'next/image'
import { BookmarkSimple, BookOpen } from 'phosphor-react'
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

export function SelectedButtonCard() {
  return (
    <SelectedButtonCardContainer>
      <BookInfo>
        <Image
          src={'/o-hobbit.png'}
          alt="book image"
          width={172}
          height={242}
        />
        <InfoContainer>
          <TitleContainer>
            <span>14 Hábitos de Desenvolvedores Altamente Produtivos</span>
            <span>Zeno Rocha</span>
          </TitleContainer>

          <RatingContainer>
            <StarRating ratingNumber={3} />
            <span>3 avaliações</span>
          </RatingContainer>
        </InfoContainer>
      </BookInfo>
      <BookCategoryAndPageContainer>
        <CategoryBox>
          <BookmarkSimple size={24} weight="bold" />
          <CategoryInfoBox>
            <span>Categoria</span>
            <span>Computação, educação</span>
          </CategoryInfoBox>
        </CategoryBox>
        <PageCountBox>
          <BookOpen size={24} weight="bold" />
          <PageCountInfoBox>
            <span>Páginas</span>
            <span>160</span>
          </PageCountInfoBox>
        </PageCountBox>
      </BookCategoryAndPageContainer>
    </SelectedButtonCardContainer>
  )
}
