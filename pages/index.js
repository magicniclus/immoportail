import { Inter } from '@next/font/google'
import EstimationBanner from '../components/Organisms/EstimationBanner'
import BreadcrumbContainer from '../components/Organisms/BreadcrumbContainer'
import EvaluationBanner from '../components/Organisms/EvaluationBanner'
import QualityBanner from '../components/Organisms/QualityBanner'
import ImmoStepContainer from '../components/Organisms/ImmoStepContainer'
import SetInputWithTitleButtonBanner from '../components/Organisms/SetInputWithTitleButtonBanner'
import Layout from '../components/Layout/Layout'
import ContactModal from '../components/Organisms/ContactModal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title="ImmoPortail | Estimez votre bien" description="Estimez votre bien immobilier gratuitement en ligne en 2 minutes">
        <EstimationBanner />
        <BreadcrumbContainer list={["Accueil", "Estimation"]} />
        <EvaluationBanner />
        <QualityBanner />
        <ImmoStepContainer />
        <SetInputWithTitleButtonBanner /> 
        <ContactModal />
    </Layout>
  )
}
