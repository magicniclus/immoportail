import React, { useEffect, useState } from "react";
import LayoutStep from "../../Layout/LayoutStep";
import Text from "../../Atoms/texts/Text";
import Input from "../../Atoms/inputs/Input";
import { useDispatch, useSelector } from "react-redux";
import { updateLivingArea, updateLandArea } from "../../../redux/action";

const ImportantSurfaces = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [type, setType] = useState("bien");

  useEffect(() => {
    if (state.accommodation) setType(state.accommodation);
    else setType("bien");
  }, [state.accommodation]);

  const [livingAreaValue, setLivingAreaValue] = useState(null);
  const [landAreaValue, setLandAreaValue] = useState(null);

  useEffect(() => {
    if (livingAreaValue !== null) dispatch(updateLivingArea(livingAreaValue));
    else dispatch(updateLivingArea(null));
    if (landAreaValue !== null) dispatch(updateLandArea(landAreaValue));
    else dispatch(updateLandArea(null));
  }, [livingAreaValue, landAreaValue]);

  return (
    <LayoutStep
      title="Quels est la surface de votre séjour et de votre terrain ?*"
      indication="En m²"
    >
      <div className="">
        <div className="mb-2">
          <Text color="purple" textSize="bigLight">
            Quelle est la surface de votre séjour ?
          </Text>
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
          <Text color="purple" textSize="bigLight">
            Quelle est la surface de votre terrain ?
          </Text>
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
