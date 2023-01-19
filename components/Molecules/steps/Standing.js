import React from "react";
import LayoutStep from "../../Layout/LayoutStep";
import Text from "../../Atoms/texts/Text";
import Check from "../../Molecules/cards/Check";

const Standing = () => {
  return (
    <LayoutStep title="Quel est le standing de votre bien ? ">
      <div className="mb-5">
        <div className="flex">
          <Check title="Moyen" updateStyle={"mr-10"} />
          <Check title="Standard" updateStyle={"mr-10"} />
          <Check title="Exceptionnel" />
        </div>
      </div>
      <div className="mb-2">
        <Text
          children="Votre bien est dans un secteur ?"
          color="purple"
          textSize="bigLight"
        />
      </div>
      <div className="flex">
        <Check title="Calme" updateStyle={"mr-10"} />
        <Check title="Standard" updateStyle={"mr-10"} />
        <Check title="Exceptionnel" />
      </div>
    </LayoutStep>
  );
};

export default Standing;
