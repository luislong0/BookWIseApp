import { Input } from '@/src/components/Input'
import { Sidebar } from '@/src/components/Sidebar'
import { Binoculars } from 'phosphor-react'
import { useState } from 'react'
import { BookCard } from './components/BookCard'
import {
  BooksContainer,
  BookTypesContainer,
  Container,
  ContentContainer,
  HeaderContainer,
  SidebarSession,
  TitleContainer,
  TypeButton,
} from './styles'

const bookTypes = [
  'Tudo',
  'Computação',
  'Educação',
  'Fantasia',
  'Ficção científica',
  'Horror',
  'HQs',
  'Suspense',
]

export default function Explore() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [selectedType, setSelectedType] = useState('')

  function handleSelectType(type: string) {
    setSelectedType(type)
  }

  return (
    <>
      <Container>
        <SidebarSession>
          <Sidebar page={'explore'} isLoggedIn={isLoggedIn} />
        </SidebarSession>
        <ContentContainer>
          <HeaderContainer>
            <TitleContainer>
              <Binoculars size={32} weight="bold" />
              <span>Explorar</span>
            </TitleContainer>

            <form>
              <Input />
            </form>
          </HeaderContainer>
          <BookTypesContainer>
            {bookTypes.map((bookType, i) => {
              if (selectedType === bookType) {
                return (
                  <TypeButton
                    key={bookType}
                    onClick={() => handleSelectType(bookType)}
                    type={'fill'}
                  >
                    {bookType}
                  </TypeButton>
                )
              } else {
                return (
                  <TypeButton
                    key={bookType}
                    onClick={() => handleSelectType(bookType)}
                    type={'regular'}
                  >
                    {bookType}
                  </TypeButton>
                )
              }
            })}
          </BookTypesContainer>
          <BooksContainer>
            <BookCard bookAuthor="J.R.R. Tolkien" bookTitle="O Hobbit" />
            <BookCard bookAuthor="J.R.R. Tolkien" bookTitle="O Hobbit" />
            <BookCard bookAuthor="J.R.R. Tolkien" bookTitle="O Hobbit" />
            <BookCard bookAuthor="J.R.R. Tolkien" bookTitle="O Hobbit" />
            <BookCard bookAuthor="J.R.R. Tolkien" bookTitle="O Hobbit" />
            <BookCard bookAuthor="J.R.R. Tolkien" bookTitle="O Hobbit" />
            <BookCard bookAuthor="J.R.R. Tolkien" bookTitle="O Hobbit" />
            <BookCard bookAuthor="J.R.R. Tolkien" bookTitle="O Hobbit" />
            <BookCard bookAuthor="J.R.R. Tolkien a" bookTitle="O Hobbit" />
            <BookCard bookAuthor="J.R.R. Tolkien" bookTitle="O Hobbit" />
          </BooksContainer>
        </ContentContainer>
      </Container>
    </>
  )
}
