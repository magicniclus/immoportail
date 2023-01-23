import React, { useState, useEffect } from "react";
import LayoutStep from "../../Layout/LayoutStep";
import Text from "../../Atoms/texts/Text";
import SelectValue from "../../Atoms/select/SelectValue";
import Check from "../../Molecules/cards/Check";
import { useDispatch, useSelector } from "react-redux";
import { updateExposure } from "../../../redux/action";

const Exposure = () => {
  const exposure = ["Nord", "Sud", "Est", "Ouest"];
  const view = ["Exceptionnelle", "Dégagé", "Vis-à-vis"];

  const [nord, setNord] = useState(false);
  const [sud, setSud] = useState(false);
  const [est, setEst] = useState(false);
  const [ouest, setOuest] = useState(false);

  const [viewValue, setViewValue] = useState(null);

  const exposureValue = [];

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
        exposure: [
          nord ? nord : null,
          sud ? sud : null,
          est ? est : null,
          ouest ? ouest : null,
        ],
        view: viewValue,
      })
    );
  }, [viewValue, nord, sud, est, ouest]);

  return (
    <LayoutStep title="Exposition/vue ?* ">
      <div className="mb-2">
        <Text
          children={`Quelle est l'exposition de votre ${type} (Plusieurs choix possibles) ?`}
          color="purple"
          textSize="bigLight"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <Check
            title="Nord"
            updateStyle={"mr-5 md:mr-10"}
            valueCallback={nord}
            callback={setNord}
          />
          <Check title="Sud" valueCallback={sud} callback={setSud} />
        </div>
        <div className="flex mt-5">
          <Check
            title="Est"
            valueCallback={est}
            callback={setEst}
            updateStyle={"mr-5 md:mr-10"}
          />
          <Check title="Ouest" valueCallback={ouest} callback={setOuest} />
        </div>
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
