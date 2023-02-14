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

export default function Home() {
  const [disabled, setDisabled] = useState(true);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (state.updateFormAddressStatus) {
  //     window.location.reload();
  //   } else null;
  // }, []);

  // console.log(process.env.NEXT_PUBLIC_PORT);

  useEffect(() => {
    state.address !== "" ? setDisabled(false) : setDisabled(true);
  }, [state.address]);

  useEffect(() => {
    dispatch(updateAddress(""));
    dispatch(updateAddressCoordinate(null));
  }, []);

  return (
    <Layout
      title="Estimez votre bien | ImmoPortail"
      description="Estimez votre bien immobilier gratuitement en ligne en 2 minutes"
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

  //0768059230 0673476774 0676850900 0671549059
}
