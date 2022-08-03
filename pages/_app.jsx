import Page from "./components/Page"
import "../styles/globals.css"
import Head from 'next/head'
//Esta es una pagina especial y nativa de Next

function App({Component, pageProps}) {
  return (
  <Page>
  <Head>
        <title>Stores finder</title>
        <meta name="description" content="Practicando nextJs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Component {...pageProps} />
  </Page>
  )
}

export default App
