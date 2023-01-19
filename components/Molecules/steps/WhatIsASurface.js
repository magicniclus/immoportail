import React from "react";
import Input from "../../Atoms/inputs/Input";
import Text from "../../Atoms/texts/Text";
import LayoutStep from "../../Layout/LayoutStep";

const WhatIsASurface = () => {
  return (
    <LayoutStep title="Quelle est la surface de votre bien ?">
      <div className="mb-2">
        <Text textSize="bigLight" color="purple" children="Valeur en m²" />
      </div>
      <Input placeholder="Exemple: 100m²" type="number" />
    </LayoutStep>
  );
};

export default WhatIsASurface;
