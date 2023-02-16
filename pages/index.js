import EstimationBanner from "../components/Organisms/EstimationBanner";
import BreadcrumbContainer from "../components/Organisms/BreadcrumbContainer";
import EvaluationBanner from "../components/Organisms/EvaluationBanner";
import QualityBanner from "../components/Organisms/QualityBanner";
import ImmoStepContainer from "../components/Organisms/ImmoStepContainer";
import SetInputWithTitleButtonBanner from "../components/Organisms/SetInputWithTitleButtonBanner";
import Layout from "../components/Layout/Layout";
import ContactModal from "../components/Organisms/ContactModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAddress, updateAddressCoordinate } from "../redux/action";
import "mapbox-gl/dist/mapbox-gl.css";
import { getAllEstimation } from "./api/homadata/Estimation";

export default function Home() {
  const [disabled, setDisabled] = useState(true);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    state.address !== "" ? setDisabled(false) : setDisabled(true);
  }, [state.address]);

  useEffect(() => {
    dispatch(updateAddress(""));
    dispatch(updateAddressCoordinate(null));
  }, []);

  return (
    <Layout
      title="Avenue-Immo : Expert en conseil immobilier en ligne"
      description="Bienvenue sur Avenue-Immo, l'expert de l'estimation immobilière en ligne. Obtenez une évaluation précise de votre bien grâce à notre service gratuit."
    >
      <EstimationBanner disabled={disabled} />
      <BreadcrumbContainer list={["Accueil", "Estimation"]} />
      <EvaluationBanner />
      <QualityBanner />
      <ImmoStepContainer />
      <SetInputWithTitleButtonBanner disabled={disabled} />
      <ContactModal />
    </Layout>
  );
}
