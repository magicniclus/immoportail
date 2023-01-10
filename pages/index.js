import { Inter } from '@next/font/google'
import EstimationBanner from '../components/Organisms/EstimationBanner'
import BreadcrumbContainer from '../components/Organisms/BreadcrumbContainer'
import EvaluationBanner from '../components/Organisms/EvaluationBanner'
import QualityBanner from '../components/Organisms/QualityBanner'
import ImmoStepContainer from '../components/Organisms/ImmoStepContainer'
import SetInputWithTitleButtonBanner from '../components/Organisms/SetInputWithTitleButtonBanner'
import Layout from '../components/Layout/Layout'
import ContactModal from '../components/Organisms/ContactModal'
import GoogleSearchInputWithLogo from '../components/Atoms/inputs/googleSearchInputWithLogo'
import AdressForm from '../components/Molecules/form/AdressForm'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [disabled, setDisabled]=useState(true)

  const state = useSelector(state=>state)

  useEffect(()=>{
    state.address !== ""? setDisabled(false):setDisabled(true)
  }, [state.address])

  return (
    <Layout title="Estimez votre bien | ImmoPortail" description="Estimez votre bien immobilier gratuitement en ligne en 2 minutes">
        <EstimationBanner disabled={disabled} />
        <BreadcrumbContainer list={["Accueil", "Estimation"]} />
        <EvaluationBanner />
        <QualityBanner />
        <ImmoStepContainer />
        <SetInputWithTitleButtonBanner disabled={disabled}/> 
        <ContactModal />
    </Layout>
  )
}
