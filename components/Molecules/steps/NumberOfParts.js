import React from "react";
import SelectNumber from "../../Atoms/select/SelectNumber";
import Text from "../../Atoms/texts/Text";
import TitleSecondary from "../../Atoms/titles/TitleSecondary";
import LayoutStep from "../../Layout/LayoutStep";

const NumberOfParts = () => {
  return (
    <LayoutStep>
      <TitleSecondary
        text="Combien de pièce comporte votre bien ? "
        color="purple"
      />
      <div className="flex mt-5 flex-col">
        <div className="">
          <div className="mb-2">
            <Text children="Nombre de pièce" color="purple" textSize="big" />
          </div>
          <SelectNumber />
        </div>
        <div className="mt-5">
          <div className="mb-2">
            <Text children="Nombre de chambre" color="purple" textSize="big" />
          </div>
          <SelectNumber />
        </div>
      </div>
    </LayoutStep>
  );
};

export default NumberOfParts;
