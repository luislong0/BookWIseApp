import { BookCommentBox } from '@/src/components/BookCommentBox'
import { Sidebar } from '@/src/components/Sidebar'
import { TrendingBookCard } from '@/src/components/TrendingBookCard'
import { CaretRight, House } from 'phosphor-react'
import { useState } from 'react'
import { LastReadingComment } from './components/LastReadingComment'
import {
  Container,
  ContentContainer,
  HomeTitle,
  LastReadingContainer,
  MyBooksContainer,
  RecentBooksContainer,
  SidebarSession,
  TitleBox,
  TrendingBooksContainer,
  TrendingBooksTitle,
} from './styles'

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <>
      <Container>
        <SidebarSession>
          <Sidebar page={'home'} isLoggedIn={isLoggedIn} />
        </SidebarSession>

        <div>
          <HomeTitle>
            <House size={32} weight="bold" />
            Início
          </HomeTitle>
          <ContentContainer>
            <MyBooksContainer>
              {isLoggedIn === true && (
                <LastReadingContainer>
                  <TitleBox>
                    <span>Sua última leitura</span>
                    <button>
                      Ver todas
                      <CaretRight size={16} weight="bold" />
                    </button>
                  </TitleBox>
                  <LastReadingComment />
                </LastReadingContainer>
              )}

              <RecentBooksContainer>
                <span>Avaliações mais recentes</span>
                <BookCommentBox />
              </RecentBooksContainer>
            </MyBooksContainer>
            <TrendingBooksContainer>
              <TrendingBooksTitle>
                <span>Livros populares</span>
                <button>
                  Ver todos
                  <CaretRight weight="bold" />
                </button>
              </TrendingBooksTitle>

              <TrendingBookCard />
              <TrendingBookCard />
              <TrendingBookCard />
            </TrendingBooksContainer>
          </ContentContainer>
        </div>
      </Container>
    </>
  )
}
