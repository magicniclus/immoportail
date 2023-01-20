import React, { useEffect, useState } from "react";
import LayoutStep from "../../Layout/LayoutStep";
import Text from "../../Atoms/texts/Text";
import Input from "../../Atoms/inputs/Input";
import { useDispatch } from "react-redux";
import { updateLivingArea, updateLandArea } from "../../../redux/action";

const ImportantSurfaces = () => {
  const dispatch = useDispatch();

  const [livingAreaValue, setLivingAreaValue] = useState(null);
  const [landAreaValue, setLandAreaValue] = useState(null);

  useEffect(() => {
    if (livingAreaValue !== null) dispatch(updateLivingArea(livingAreaValue));
    else dispatch(updateLivingArea(null));
    if (landAreaValue !== null) dispatch(updateLandArea(landAreaValue));
    else dispatch(updateLandArea(null));
  }, [livingAreaValue, landAreaValue]);

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
        <Input
          placeholder="Exemple: 100"
          type="number"
          callback={setLivingAreaValue}
          callbackValue={livingAreaValue}
        />
      </div>
      <div className="mt-5">
        <div className="mb-2">
          <Text
            children="Quelle est la surface de votre terrain (bâti de votre bien inclus ?) en m² ?"
            color="purple"
            textSize="bigLight"
          />
        </div>
        <Input
          placeholder="Exemple: 370"
          type="number"
          callback={setLandAreaValue}
          callbackValue={landAreaValue}
        />
      </div>
    </LayoutStep>
  );
};

export default ImportantSurfaces;
