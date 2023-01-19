import React from "react";
import LayoutStep from "../../Layout/LayoutStep";
import Text from "../../Atoms/texts/Text";
import SelectValue from "../../Atoms/select/SelectValue";

const Exposure = () => {
  const exposure = ["Nord", "Sud", "Est", "Ouest"];
  const view = ["Exceptionnelle", "Dégagé", "Vis-à-vis"];
  return (
    <LayoutStep title="Exposition/vue ? ">
      <div className="mb-2">
        <Text
          children="Quelle est l'exposition de votre bien ?"
          color="purple"
          textSize="bigLight"
        />
      </div>
      <div className="flex">
        <SelectValue option={exposure} />
      </div>
      <div className="mt-5 mb-2">
        <Text
          children="Quelle est la vue de votre maison ?"
          color="purple"
          textSize="bigLight"
        />
      </div>
      <div className="flex">
        <SelectValue option={view} />
      </div>
    </LayoutStep>
  );
};

export default Exposure;
