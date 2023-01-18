import React from "react";
import Input from "../../Atoms/inputs/Input";
import Text from "../../Atoms/texts/Text";
import TitleSecondary from "../../Atoms/titles/TitleSecondary";
import LayoutStep from "../../Layout/LayoutStep";

const WhatIsASurface = () => {
  return (
    <LayoutStep>
      <TitleSecondary
        text="Quelle est la surface de votre bien ? "
        color="purple"
      />
      <Text
        textSize="bigLight"
        color="purple"
        children="Valeur en m²"
        marginX="mt-2"
      />
      <div className="flex mt-5">
        <Input placeholder="Exemple: 100m²" type="number" />
      </div>
    </LayoutStep>
  );
};

export default WhatIsASurface;
