import React from "react";
import SetOfAdvice from "../Molecules/SetOfAdvice";
import SetTitleWithDescriptionAndMiddleSeparation from "../Molecules/SetTitleWithDescriptionAndMiddleSeparation";

const EvaluationBanner = () => {
  return (
    <div className="w-full px-5 md:px-40 lg:flex lg:justify-between">
      <SetTitleWithDescriptionAndMiddleSeparation
        title="Comment évaluer"
        titleWithColor="gratuitement son bien immobilier ?"
        colorTitle="purple"
        colorSeparation="yellow"
      />
      <SetOfAdvice
        title="Notre conseil:"
        text="La sur-évaluation du bien immobilier peut être un piège courant pour de nombreux propriétaires. C'est pourquoi il est crucial de s'informer sur la valeur actuelle du marché et son évolution, ainsi que de faire appel à des professionnels qualifiés pour une estimation précise. Évitez les erreurs coûteuses et obtenez une valeur juste en utilisant notre outil d'estimation gratuit et fiable, basé sur des données officielles en temps réel."
      />
    </div>
  );
};

export default EvaluationBanner;
