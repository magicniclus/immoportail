import React from "react";
import SelectNumber from "../../Atoms/select/SelectNumber";
import Text from "../../Atoms/texts/Text";
import LayoutStep from "../../Layout/LayoutStep";

const NumberOfParts = () => {
  return (
    <LayoutStep title="Combien de pièce comporte votre bien ?">
      <div className="">
        <div className="mb-2">
          <Text children="Nombre de pièce" color="purple" textSize="bigLight" />
        </div>
        <SelectNumber />
      </div>
      <div className="mt-5">
        <div className="mb-2">
          <Text
            children="Nombre de chambre"
            color="purple"
            textSize="bigLight"
          />
        </div>
        <SelectNumber />
      </div>
    </LayoutStep>
  );
};

export default NumberOfParts;
