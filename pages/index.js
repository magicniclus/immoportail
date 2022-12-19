import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Organisms/Header'
import InputWhithLogo from '../components/Atoms/inputs/inputWhithLogo'
import ButtonPrimary from '../components/Atoms/buttons/ButtonPrimary'
import TitlePrimary from '../components/Atoms/titles/TitlePrimary'
import TitleSecondary from '../components/Atoms/titles/TitleSecondary'
import Text from '../components/Atoms/texts/Text'

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
          <div className="bg-purple px-14 py-8" style={{width: "717px"}}>
            <TitlePrimary title="Estimez votre bien en ligne" titleWithColor="gratuitement et en 2 minutes" />
            <TitleSecondary title="Adress du bien à estimer" color="primary" />
            <InputWhithLogo logoType="/Vectorlocalization.png" placeholder="Saisir une adresse"/>
            <ButtonPrimary title="Estimer"  version="secondary"/>
            <Text textSize="normal" color="white">
              Nos estimations sont réalisées grâce aux caractéristiques de 
              votre bien immobilier et du marché local en temps réel
            </Text>
          </div>
      </main>
    </>
  )
}
