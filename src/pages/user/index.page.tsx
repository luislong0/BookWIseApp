import { Input } from '@/src/components/Input'
import { Sidebar } from '@/src/components/Sidebar'
import { UserCircle } from 'phosphor-react'
import { useState } from 'react'
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

export default function User() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

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
                  <UserCommentBox />
                  <UserCommentBox />
                  <UserCommentBox />
                  <UserCommentBox />
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
