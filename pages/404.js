import React, { useState } from "react";
import SeparationLign from "../components/Atoms/others/SeparationLign";
import Text from "../components/Atoms/texts/Text";
import TitlePrimary from "../components/Atoms/titles/TitlePrimary";
import TitleSecondary from "../components/Atoms/titles/TitleSecondary";
import TitleTertiary from "../components/Atoms/titles/TitleTertiary";
import Layout from "../components/Layout/Layout";
import SetInputWithTitleAndButton from "../components/Molecules/SetInputWithTitleAndButton";

const Custom404 = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <Layout
      title="Désolé, cette page est introuvable - Erreur 404 | Avenue-Immo"
      description="Désolé, la page que vous recherchez est introuvable sur Avenue-Immo. Nous vous invitons à explorer nos autres services d'estimation immobilière en ligne gratuite en quelques minutes."
    >
      <div className=" min-h-[calc(100vh-7rem)] bg-purple flex flex-col">
        <div className="min-h-[calc(50vh-7rem)] bg-grayLight flex flex-col items-center justify-center">
          <TitleTertiary text="Oups!" color="purple" />
          <TitleSecondary text="Page 404" color="purple" />
        </div>
        <div className="min-h-[calc(50vh-7rem)] bg-purple px-5 md:px-40 py-10 md:py-16 flex content-between flex-col justify-center">
          <TitlePrimary
            text="Vous pouvez quand même estimez votre bien en ligne"
            textWithColor="gratuitement en 2 minutes "
          />
          <Text textSize="light" color="white" marginY="my-4">
            Obtenez des estimations précises basées sur les détails de votre
            bien immobilier et les tendances du marché local en temps réel.
          </Text>
          <SeparationLign color="yellow" />
          <SetInputWithTitleAndButton titleColor="purple" disabled={disabled} />
        </div>
      </div>
    </Layout>
  );
};

export default Custom404;
