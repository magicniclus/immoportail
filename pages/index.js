import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Organisms/Header'
import EstimationBanner from '../components/Organisms/EstimationBanner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>ImmoPortail | Accueil</title>
        <meta property="og:title" content="Estimez votre bien immobilier gratuitement en ligne en 2 minutes" key="title" />
      </Head>
      <header>
        <Header />
      </header>
      <main>
        <EstimationBanner />
      </main>
    </>
  )
}
