import React from "react";
import SetOfQuality from "../Molecules/SetOfQuality";

const QualityBanner = () => {
  return (
    <div className="w-full">
      <div className="flex-col lg:flex-row flex justify-between py-10 md:py-16 items-center px-5 md:px-40">
        <SetOfQuality
          image="Vectorcheck"
          title="Estimation"
          titleWithColor="en ligne"
          text="Découvrez la valeur de votre bien immobilier avec notre outil d'estimation en ligne, entièrement gratuit et fiable. Basé sur les données du marché en temps réel, obtenez une estimation précise en quelques clics seulement."
        />
        <SetOfQuality
          image="Vectoruserpurple"
          title="Un unique"
          titleWithColor="conseiller"
          text="Un conseiller partenaire dédiés est spécialisée dans le secteur de l'immobilier pour vous offrir une expertise inégalée. Bénéficiez d'une estimation personnalisée en prenant rendez-vous avec l'un de nos conseillers spécialisés."
        />
        <SetOfQuality
          image="Vectorsafe"
          title="Protection de"
          titleWithColor="vos données"
          text="Vos données sont en sécurité avec nous! Nous utilisons les technologies de sécurité les plus avancées pour protéger vos informations personnelles. Confiez-nous votre estimation en toute confiance - nous garantissons la confidentialité de vos données."
        />
      </div>
    </div>
  );
};

export default QualityBanner;
