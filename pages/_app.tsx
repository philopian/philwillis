import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import 'prismjs/themes/prism-okaidia.css'

import Body from '@/components/Body'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Header />
      <Body>
        <Component {...pageProps} />
      </Body>
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
