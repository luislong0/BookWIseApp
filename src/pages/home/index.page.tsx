import { BookCommentBox } from '@/src/components/BookCommentBox'
import { Sidebar } from '@/src/components/Sidebar'
import { TrendingBookCard } from '@/src/components/TrendingBookCard'
import { UserContext } from '@/src/contexts/UserContext'
import { api } from '@/src/lib/axios'
import { useSession } from 'next-auth/react'
import { CaretRight, House } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { LastReadingComment } from './components/LastReadingComment'
import {
  Container,
  ContentContainer,
  HeaderLink,
  HomeTitle,
  LastReadingContainer,
  MyBooksContainer,
  RecentBooksContainer,
  SidebarSession,
  TitleBox,
  TrendingBooksContainer,
  TrendingBooksTitle,
} from './styles'
import { NextSeo } from 'next-seo'

interface AvaliationCommentsProps {
  id: string
  userId: string
  bookId: string
  comment: string
  ratingNumber: number
  created_at: Date
  User?: {
    name: string
    image: string
  }
  Book?: {
    imageUrl: string
    author: string
    title: string
  }
}

interface TopThreeBooksProps {
  title: string
  author: string
  bookImage: string
  numAvaliacoes: number
  avaliation: number
}

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userComment, setUserComment] = useState({} as AvaliationCommentsProps)
  const [comments, setComments] = useState<AvaliationCommentsProps[]>(
    [] as AvaliationCommentsProps[],
  )
  const [topThreeBooks, setTopThreeBooks] = useState<TopThreeBooksProps[]>([])

  const session = useSession()
  const { loggedUser } = useContext(UserContext)

  async function getAllComments() {
    const response = await api.get(`/avaliation/home`, {})
    setComments(response.data.avaliations)
    console.log('ALLCOMMENT: ', response.data.avaliations)
  }

  async function getUniqueUserComment(userId: string) {
    const response = await api.get(`/avaliation/home`, {
      params: { userId },
    })

    setUserComment(response.data.avaliation)

    console.log('USERCOMMENT: ', response.data.avaliation)
  }

  async function getTopThreeBooks() {
    const response = await api.get(`/book/top3`, {})

    setTopThreeBooks(response.data.topBooksParsed)
    console.log('TOP3BOOKS: ' + JSON.stringify(response.data.topBooksParsed))
  }

  useEffect(() => {
    if (loggedUser.id) {
      getUniqueUserComment(loggedUser.id)
    }
    getAllComments()
    getTopThreeBooks()
  }, [loggedUser.id])

  return (
    <>
      <NextSeo
        title="Home | Book Wise"
        description="Visualize e faça avaliações sobre seus livros preferidos!!"
      />

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
              {session.data?.user && (
                <LastReadingContainer>
                  <TitleBox>
                    <span>Sua última leitura</span>
                    <HeaderLink href={'/user'}>
                      Ver todas
                      <CaretRight size={16} weight="bold" />
                    </HeaderLink>
                  </TitleBox>
                  <LastReadingComment
                    bookImage={userComment.Book?.imageUrl!}
                    bookAuthor={userComment.Book?.author!}
                    bookComment={userComment.comment}
                    bookRating={userComment.ratingNumber!}
                    bookTitle={userComment.Book?.title!}
                    createdAt={userComment.created_at!}
                  />
                </LastReadingContainer>
              )}

              <RecentBooksContainer>
                <span>Avaliações mais recentes</span>
                {comments.map((comment, i) => {
                  return (
                    <BookCommentBox
                      key={comment.id}
                      bookAuthor={comment.Book?.author!}
                      bookComment={comment.comment}
                      bookImage={comment.Book?.imageUrl!}
                      bookTitle={comment.Book?.title!}
                      createdAt={comment.created_at}
                      ratingNumber={comment.ratingNumber}
                      userName={comment.User?.name!}
                      userPhoto={comment.User?.image!}
                    />
                  )
                })}
              </RecentBooksContainer>
            </MyBooksContainer>
            <TrendingBooksContainer>
              <TrendingBooksTitle>
                <span>Livros populares</span>
                <HeaderLink href={'/explore'}>
                  Ver todos
                  <CaretRight size={16} weight="bold" />
                </HeaderLink>
              </TrendingBooksTitle>

              {topThreeBooks!.map((book, i) => {
                return (
                  <TrendingBookCard
                    key={book.title}
                    bookAuthor={book.author}
                    bookAvaliation={book.avaliation}
                    bookImage={book.bookImage}
                    bookTitle={book.title}
                  />
                )
              })}
            </TrendingBooksContainer>
          </ContentContainer>
        </div>
      </Container>
    </>
  )
}
