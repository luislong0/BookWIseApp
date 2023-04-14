import { useSession } from 'next-auth/react'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'
// import { api } from '../lib/axios'

interface LoggedUserProps {
  id: string
  name: string
  email: string
  emailVerified?: string
  image: string
  created_at: Date
}

interface UserAvaliationBooks {
  id: string
  userId: string
  bookId: string
  comment: string
  ratingNumber: number
  created_at: Date
  Book: {
    id: string
    author: string
    title: string
    pagesNumber: number
    categoryOne: string
    categoryTwo?: string
  }
}

interface UserAvaliationBooksInfoProps {
  avaliations: UserAvaliationBooks[]
  pagesRead: number
  booksCount: number
  authorQuantity: number
  mostCategory: string
}

interface LoggedUserAvaliationsProps {
  avaliation: {
    id: string
    userId: string
    bookId: string
    comment: string
    ratingNumber: number
    created_at: string
    Book: {
      title: string
      author: string
      imageUrl: string
    }
  }
}

interface SelectUserAvaliationsProps {
  id: string
  userId: string
  bookId: string
  comment: string
  ratingNumber: number
  created_at: string
  Book: {
    title: string
    author: string
    imageUrl: string
  }
}

interface UserContextType {
  loggedUser: LoggedUserProps
  loggedUserAvaliations: LoggedUserAvaliationsProps[]
  selectUserAvaliations: SelectUserAvaliationsProps[]
  loggedUserBookInfo: UserAvaliationBooksInfoProps
  getLoggedUserInfo: (userName: string) => Promise<void>
  handleSearchUserAvaliation: (query: string) => Promise<void>
}

interface UserContextProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [loggedUser, setLoggedUser] = useState({} as LoggedUserProps)
  const [loggedUserBookInfo, setLoggedUserBookInfo] =
    useState<UserAvaliationBooksInfoProps>({} as UserAvaliationBooksInfoProps)
  const [loggedUserAvaliations, setLoggedUserAvaliations] = useState<
    LoggedUserAvaliationsProps[]
  >([])
  const [selectUserAvaliations, setSelectUserAvaliations] = useState<
    SelectUserAvaliationsProps[]
  >([])

  const session = useSession()

  async function getLoggedUserInfo(userName: string) {
    console.log(JSON.stringify(userName))
    const response = await api.get(`/user`, {
      params: { userName },
    })

    console.log(response.data.user)

    setLoggedUser(response.data.user)
  }

  async function getLoggedUserBooksInfo(userName: string) {
    const booksResponse = await api.get(`/user/books`, {
      params: { userName },
    })

    const pagesCount = booksResponse.data.avaliations.reduce(
      (accumulator: any, currentValue: any) =>
        accumulator + currentValue.Book.pagesNumber,
      0,
    )

    setLoggedUserBookInfo({
      avaliations: booksResponse.data.avaliations,
      pagesRead: pagesCount,
      authorQuantity: booksResponse.data.authorQuantity,
      booksCount: booksResponse.data.booksCount,
      mostCategory: booksResponse.data.mostCategory,
    })

    console.log('LoggedUserBookInfo: ' + loggedUserBookInfo)
  }

  async function getLoggedUserAvaliations(userName: string) {
    console.log(JSON.stringify(userName))
    const response = await api.get(`/avaliation/user`, {
      params: { userName },
    })

    console.log(response.data.userAvaliations)

    setLoggedUserAvaliations(response.data.userAvaliations)
  }

  async function handleSearchUserAvaliation(query: string) {
    console.log('QUERY: ' + query)
    const response = await api.get(
      `/avaliation/bookname?userName=${loggedUser.id}&query=${query}`,
      {},
    )

    console.log(response.data.book)
    setSelectUserAvaliations(response.data.book)
  }

  useEffect(() => {
    if (session.data?.user) {
      getLoggedUserInfo(session.data?.user!.name!)
      getLoggedUserBooksInfo(session.data?.user!.name!)
      getLoggedUserAvaliations(session.data?.user!.name!)
    }
  }, [session])

  return (
    <UserContext.Provider
      value={{
        loggedUser,
        getLoggedUserInfo,
        loggedUserBookInfo,
        loggedUserAvaliations,
        handleSearchUserAvaliation,
        selectUserAvaliations,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
