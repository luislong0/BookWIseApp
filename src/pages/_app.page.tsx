import type { AppProps } from 'next/app'
import { Nunito } from '@next/font/google'
import { globalStyles } from '../styles/global'

const nunito = Nunito({
  subsets: ['latin'],
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={nunito.className}>
      <Component {...pageProps} />
    </main>
  )
}
