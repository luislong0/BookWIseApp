import { Sidebar } from '@/src/components/Sidebar'
import {
  Container,
  ContentContainer,
  MyBooksContainer,
  TrendingBooksContainer,
} from './styles'

export default function Home() {
  return (
    <>
      <Container>
        <Sidebar />
        <ContentContainer>
          <MyBooksContainer>
            <p></p>
          </MyBooksContainer>
          <TrendingBooksContainer></TrendingBooksContainer>
        </ContentContainer>
      </Container>
    </>
  )
}
