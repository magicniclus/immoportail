import React from "react";
import LayoutStep from "../../Layout/LayoutStep";
import Text from "../../Atoms/texts/Text";
import Input from "../../Atoms/inputs/Input";

const ImportantSurfaces = () => {
  return (
    <LayoutStep title="Quels est la surface de votre séjour et de votre bâti ?">
      <div className="">
        <div className="mb-2">
          <Text
            children="Quelle est la surface de votre séjour en m² ?"
            color="purple"
            textSize="bigLight"
          />
        </div>
        <Input placeholder="Exemple: 100" type="number" />
      </div>
      <div className="mt-5">
        <div className="mb-2">
          <Text
            children="Quelle est la surface de votre terrain (bâti de votre bien inclus ?) en m² ?"
            color="purple"
            textSize="bigLight"
          />
        </div>
        <Input placeholder="Exemple: 370" type="number" />
      </div>
    </LayoutStep>
  );
};

export default ImportantSurfaces;
