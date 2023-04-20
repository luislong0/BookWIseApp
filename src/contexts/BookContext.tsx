import { createContext, ReactNode, useState } from 'react'
import { api } from '../lib/axios'
// import { api } from '../lib/axios'

interface AvaliationProps {
  ratingNumber: number
  User: {
    id: string
  }
}

interface BookProps {
  id: string
  title: string
  author: string
  description: string
  pagesNumber: number
  imageUrl: string
  categoryOne: string
  categoryTwo?: string
  avaliations: AvaliationProps[]
}

interface BookContextType {
  bookCommentRating: number
  selectedBookRating: number
  updateCommentsToggle: boolean
  books: BookProps[]
  selectedBook: BookProps
  getAllBooks: () => Promise<void>
  handleSetBookRating: (ratingNumber: number) => void
  getBookByCategory: (category: string) => Promise<void>
  getBookByTheName: (bookName: string) => Promise<void>
  getBookById: (bookId: string) => Promise<void>
  getSelectedBookRating: (bookId: string) => Promise<void>
  handleUpdateComments: () => void
}

interface BookContextProviderProps {
  children: ReactNode
}

export const BookContext = createContext({} as BookContextType)

export function BookContextProvider({ children }: BookContextProviderProps) {
  const [bookCommentRating, setBookCommentRating] = useState(0)
  const [books, setBooks] = useState<BookProps[]>([])
  const [selectedBook, setSelectedBook] = useState<BookProps>({} as BookProps)
  const [selectedBookRating, setSelectedBookRating] = useState(0)
  const [updateCommentsToggle, setUpdateCommentsToggle] = useState(false)

  function handleSetBookRating(ratingNumber: number) {
    setBookCommentRating(ratingNumber)
  }

  async function getAllBooks() {
    const response = await api.get(`/book`, {})
    setBooks(response.data.book)
  }

  async function getBookByCategory(category: string) {
    if (category === 'Tudo') {
      getAllBooks()
    } else {
      const response = await api.get(`/book/category`, {
        params: { category },
      })

      setBooks(response.data.book)
    }
  }

  async function getBookByTheName(bookName: string) {
    const response = await api.get(`/book`, {
      params: { bookTitle: bookName },
    })

    setBooks(response.data.book)
  }

  async function getBookById(bookId: string) {
    const response = await api.get(`/book/id`, {
      params: { bookId },
    })

    setSelectedBook(response.data.book)
  }

  async function getSelectedBookRating(bookId: string) {
    const responseSelectedBook = await api.get(`/book/id`, {
      params: { bookId },
    })

    const bookAvaliations = responseSelectedBook.data.book.avaliations

    if (Array.isArray(bookAvaliations) === true) {
      const sumWithInitial = bookAvaliations.reduce(
        (accumulator: any, currentValue: any) =>
          accumulator + currentValue.ratingNumber,
        0,
      )
      const ratingMedia = Math.round(sumWithInitial / bookAvaliations.length)
      setSelectedBookRating(ratingMedia)
    }
  }

  function handleUpdateComments() {
    setUpdateCommentsToggle(!updateCommentsToggle)
  }

  return (
    <BookContext.Provider
      value={{
        bookCommentRating,
        handleSetBookRating,
        books,
        getAllBooks,
        getBookByCategory,
        getBookByTheName,
        selectedBook,
        getBookById,
        selectedBookRating,
        getSelectedBookRating,
        handleUpdateComments,
        updateCommentsToggle,
      }}
    >
      {children}
    </BookContext.Provider>
  )
}
