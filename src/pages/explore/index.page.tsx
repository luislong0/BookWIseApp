import { Input } from '@/src/components/Input'
import { Sidebar } from '@/src/components/Sidebar'
import { getLimitedText } from '@/src/utils/getLimitedText'
import { Binoculars } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

import { useContext, useEffect, useState } from 'react'
import { BookCard } from './components/BookCard'
import {
  BooksContainer,
  BookTypesContainer,
  Container,
  ContentContainer,
  HeaderContainer,
  InputContainer,
  SidebarSession,
  TitleContainer,
  Trigger,
  TypeButton,
} from './styles'
import { SelectedButtonModal } from '@/src/components/SelectedButtonModal'
import { BookContext } from '@/src/contexts/BookContext'
import { UserContext } from '@/src/contexts/UserContext'
import { NextSeo } from 'next-seo'

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
  const { books, getAllBooks, getBookByCategory } = useContext(BookContext)
  const { loggedUser } = useContext(UserContext)

  const isLoggedIn = true
  const [selectedType, setSelectedType] = useState('Tudo')

  function handleSelectType(type: string) {
    setSelectedType(type)
    getBookByCategory(type)
  }

  useEffect(() => {
    getAllBooks()
  }, [])

  return (
    <>
      <NextSeo
        title="Explorar | Book Wise "
        description="Visualize e faça avaliações sobre seus livros preferidos!!"
      />

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
            <InputContainer>
              <Input inputPage={'explore'} />
            </InputContainer>
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
            {books.map((book, i) => {
              const validateText = getLimitedText({
                text: book.title,
                letterLimit: 27,
              })

              const readBookUserId = book.avaliations.map((bookAvaliation) => {
                if (bookAvaliation.User.id === loggedUser.id) {
                  return loggedUser.id
                } else return null
              })

              if (book.avaliations.length !== 0) {
                const sumWithInitial = book.avaliations.reduce(
                  (accumulator: any, currentValue: any) =>
                    accumulator + currentValue.ratingNumber,
                  0,
                )
                const ratingMedia = Math.round(
                  sumWithInitial / book.avaliations.length,
                )

                if (readBookUserId !== null) {
                  return (
                    <Dialog.Root key={i}>
                      <Trigger>
                        <BookCard
                          bookAuthor={book.author}
                          bookTitle={validateText!.text}
                          bookRating={ratingMedia}
                          bookImg={book.imageUrl}
                          userBookReadingId={readBookUserId[0]}
                        />
                      </Trigger>
                      <SelectedButtonModal
                        isLoggedIn={isLoggedIn}
                        bookId={book.id}
                      />
                    </Dialog.Root>
                  )
                } else {
                  return (
                    <Dialog.Root key={i}>
                      <Trigger>
                        <BookCard
                          bookAuthor={book.author}
                          bookTitle={validateText!.text}
                          bookRating={ratingMedia}
                          bookImg={book.imageUrl}
                        />
                      </Trigger>
                      <SelectedButtonModal
                        isLoggedIn={isLoggedIn}
                        bookId={book.id}
                      />
                    </Dialog.Root>
                  )
                }
              } else {
                return (
                  <Dialog.Root key={i}>
                    <Trigger>
                      <BookCard
                        bookAuthor={book.author}
                        bookTitle={validateText!.text}
                        bookRating={0}
                        bookImg={book.imageUrl}
                      />
                    </Trigger>
                    <SelectedButtonModal
                      isLoggedIn={isLoggedIn}
                      bookId={book.id}
                    />
                  </Dialog.Root>
                )
              }
            })}

            {/* <BookCard bookAuthor="J.R.R. Tolkien" bookTitle="O Hobbit" />
            <BookCard bookAuthor="J.R.R. Tolkien" bookTitle="O Hobbit" />
            <BookCard bookAuthor="J.R.R. Tolkien" bookTitle="O Hobbit" />
            <BookCard bookAuthor="J.R.R. Tolkien" bookTitle="O Hobbit" />
            <BookCard bookAuthor="J.R.R. Tolkien" bookTitle="O Hobbit" />
            <BookCard bookAuthor="J.R.R. Tolkien a" bookTitle="O Hobbit" />
            <BookCard bookAuthor="J.R.R. Tolkien" bookTitle="O Hobbit" /> */}
          </BooksContainer>
        </ContentContainer>
      </Container>
    </>
  )
}
