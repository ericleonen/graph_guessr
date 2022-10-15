import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>GraphGuessr</title>
      </Head>
      <div className="flex justify-center items-center h-screen w-full">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
