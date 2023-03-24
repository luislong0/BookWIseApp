import { createContext, ReactNode, useState } from 'react'
// import { api } from '../lib/axios'

interface BookContextType {
  bookCommentRating: number
  handleSetBookRating: (ratingNumber: number) => void
}

interface BookContextProviderProps {
  children: ReactNode
}

export const BookContext = createContext({} as BookContextType)

export function BookContextProvider({ children }: BookContextProviderProps) {
  const [bookCommentRating, setBookCommentRating] = useState(0)

  function handleSetBookRating(ratingNumber: number) {
    setBookCommentRating(ratingNumber)
  }

  return (
    <BookContext.Provider
      value={{
        bookCommentRating,
        handleSetBookRating,
      }}
    >
      {children}
    </BookContext.Provider>
  )
}
