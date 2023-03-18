import { CommentBox } from '@/src/components/CommentBox'
import { Sidebar } from '@/src/components/Sidebar'
import { House } from 'phosphor-react'
import {
  Container,
  ContentContainer,
  HomeTitle,
  MyBooksContainer,
  SidebarSession,
  TrendingBooksContainer,
} from './styles'

export default function Home() {
  return (
    <>
      <Container>
        <SidebarSession>
          <Sidebar page={'home'} />
        </SidebarSession>

        <ContentContainer>
          <HomeTitle>
            <House size={32} weight="bold" />
            Início
          </HomeTitle>
          <MyBooksContainer>
            <span>Avaliações mais recentes</span>
            <CommentBox />
          </MyBooksContainer>
          <TrendingBooksContainer></TrendingBooksContainer>
        </ContentContainer>
      </Container>
    </>
  )
}
