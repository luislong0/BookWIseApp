import { CommentBox } from '@/src/components/CommentBox'
import { Sidebar } from '@/src/components/Sidebar'
import { TrendingBookCard } from '@/src/components/TrendingBookCard'
import { CaretRight, House } from 'phosphor-react'
import {
  Container,
  ContentContainer,
  HomeTitle,
  MyBooksContainer,
  SidebarSession,
  TrendingBooksContainer,
  TrendingBooksTitle,
} from './styles'

export default function Home() {
  return (
    <>
      <Container>
        <SidebarSession>
          <Sidebar page={'home'} />
        </SidebarSession>

        <div>
          <HomeTitle>
            <House size={32} weight="bold" />
            Início
          </HomeTitle>
          <ContentContainer>
            <MyBooksContainer>
              <span>Avaliações mais recentes</span>
              <CommentBox />
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
