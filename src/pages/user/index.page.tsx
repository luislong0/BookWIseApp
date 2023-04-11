import { Input } from '@/src/components/Input'
import { Sidebar } from '@/src/components/Sidebar'
import { UserContext } from '@/src/contexts/UserContext'
import { UserCircle } from 'phosphor-react'
import { useContext, useState } from 'react'
import { UserCard } from './components/UserCard'
import { UserCommentBox } from './components/UserCommentBox'
import {
  BookBox,
  BookFormContainer,
  Container,
  ContentContainer,
  HomeTitle,
  MyBooksContainer,
  SidebarSession,
  UserInfoContainer,
} from './styles'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function User() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const { loggedUserAvaliations } = useContext(UserContext)

  const session = useSession()
  const router = useRouter()

  if (!session.data?.user) {
    if (typeof window !== 'undefined') {
      router.push('/home')
    }
  }

  return (
    <>
      <>
        <Container>
          <SidebarSession>
            <Sidebar page={'user'} isLoggedIn={isLoggedIn} />
          </SidebarSession>

          <div>
            <HomeTitle>
              <UserCircle size={36} />
              Perfil
            </HomeTitle>
            <ContentContainer>
              <MyBooksContainer>
                <BookFormContainer>
                  <Input inputPage="user" />
                </BookFormContainer>

                <BookBox>
                  {loggedUserAvaliations.map((avaliation) => {
                    return (
                      <UserCommentBox
                        key={avaliation.avaliation.id}
                        bookAuthor={avaliation.avaliation.Book.author}
                        bookImage={avaliation.avaliation.Book.imageUrl}
                        bookTitle={avaliation.avaliation.Book.title}
                        comment={avaliation.avaliation.comment}
                        createdAt={new Date(avaliation.avaliation.created_at)}
                        rating={avaliation.avaliation.ratingNumber}
                      />
                    )
                  })}
                </BookBox>
              </MyBooksContainer>
              <UserInfoContainer>
                <UserCard />
              </UserInfoContainer>
            </ContentContainer>
          </div>
        </Container>
      </>
    </>
  )
}
