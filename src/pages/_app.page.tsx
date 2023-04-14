import type { AppProps } from 'next/app'
import { Nunito } from '@next/font/google'
import { globalStyles } from '../styles/global'
import { BookContextProvider } from '../contexts/BookContext'
import { SessionProvider } from 'next-auth/react'
import { UserContextProvider } from '../contexts/UserContext'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const nunito = Nunito({
  subsets: ['latin'],
})

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <UserContextProvider>
        <BookContextProvider>
          <main className={nunito.className}>
            <Component {...pageProps} />
          </main>
        </BookContextProvider>
      </UserContextProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </SessionProvider>
  )
}
