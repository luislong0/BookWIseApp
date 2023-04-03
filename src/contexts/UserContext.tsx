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

interface UserContextType {
  loggedUser: LoggedUserProps
  getLoggedUserInfo: (userName: string) => Promise<void>
}

interface UserContextProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [loggedUser, setLoggedUser] = useState({} as LoggedUserProps)

  const session = useSession()

  async function getLoggedUserInfo(userName: string) {
    console.log(JSON.stringify(userName))
    const response = await api.get(`/user`, {
      params: { userName },
    })

    console.log(response.data.user)

    setLoggedUser(response.data.user)
  }

  useEffect(() => {
    if (session.data?.user) {
      getLoggedUserInfo(session.data?.user!.name!)
    }
  }, [session])

  return (
    <UserContext.Provider
      value={{
        loggedUser,
        getLoggedUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
