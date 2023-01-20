import React, { useState, useEffect } from "react";
import LayoutStep from "../../Layout/LayoutStep";
import Text from "../../Atoms/texts/Text";
import SelectValue from "../../Atoms/select/SelectValue";
import { useDispatch, useSelector } from "react-redux";
import { updateExposure } from "../../../redux/action";

const Exposure = () => {
  const exposure = ["Nord", "Sud", "Est", "Ouest"];
  const view = ["Exceptionnelle", "Dégagé", "Vis-à-vis"];

  const [exposureValue, setExposureValue] = useState(null);
  const [viewValue, setViewValue] = useState(null);

  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const [type, setType] = useState("bien");

  useEffect(() => {
    if (state.accommodation) setType(state.accommodation);
    else setType("bien");
  }, [state.accommodation]);

  useEffect(() => {
    dispatch(
      updateExposure({
        exposure: exposureValue,
        view: viewValue,
      })
    );
  }, [exposureValue, viewValue]);
  return (
    <LayoutStep title="Exposition/vue ? ">
      <div className="mb-2">
        <Text
          children={`Quelle est l'exposition de votre ${type} ?`}
          color="purple"
          textSize="bigLight"
        />
      </div>
      <div className="flex">
        <SelectValue
          option={exposure}
          callback={setExposureValue}
          callbackValue={exposureValue}
        />
      </div>
      <div className="mt-5 mb-2">
        <Text
          children="Quelle est la vue de votre maison ?"
          color="purple"
          textSize="bigLight"
        />
      </div>
      <div className="flex">
        <SelectValue
          option={view}
          callback={setViewValue}
          callbackValue={viewValue}
        />
      </div>
    </LayoutStep>
  );
};

export default Exposure;
