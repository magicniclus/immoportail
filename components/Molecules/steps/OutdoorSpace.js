import React, { useEffect, useState } from "react";
import LayoutStep from "../../Layout/LayoutStep";
import Text from "../../Atoms/texts/Text";
import Check from "../../Molecules/cards/Check";
import SelectValue from "../../Atoms/select/SelectValue";
import { useDispatch, useSelector } from "react-redux";
import { updateOutdoorSpace } from "../../../redux/action";

const OutdoorSpace = () => {
  const number = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "+15",
  ];

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [cave, setCave] = useState(null);
  const [dependence, setDependence] = useState(null);
  const [piscine, setPiscine] = useState(null);
  const [parking, setParking] = useState(null);
  const [box, setBox] = useState(null);
  const [balcon, setBalcon] = useState(null);

  const [type, setType] = useState("bien");

  useEffect(() => {
    if (state.accommodation) setType(state.accommodation);
    else setType("bien");
  }, [state.accommodation]);

  useEffect(() => {
    dispatch(
      updateOutdoorSpace({
        cave,
        dependence,
        piscine,
        parking,
        box,
        balcon,
      })
    );
  }, [cave, dependence, piscine, parking, balcon, box]);

  return (
    <LayoutStep
      title="Espaces extérieurs ?"
      indication="Plusieurs choix possibles"
    >
      <div className="">
        <div className="mb-2">
          <Text
            children={`Votre ${type} à t'il ?`}
            color="purple"
            textSize="bigLight"
          />
        </div>
        <div className="flex">
          <Check
            title="Une cave"
            updateStyle={"mr-3 md:mr-10"}
            valueCallback={cave}
            callback={setCave}
            value={1}
          />
          <Check
            title="Une dépendance"
            updateStyle={"mr-3 md:mr-10"}
            valueCallback={dependence}
            callback={setDependence}
            value={1}
          />
          <Check
            title="Une piscine"
            valueCallback={piscine}
            callback={setPiscine}
            value={1}
          />
        </div>
        <div className="flex flex-col mt-5">
          <div className="mb-5">
            <Text
              children="Parking"
              color="purple"
              textSize="bigLight"
              marginX="mb-2"
            />
            <SelectValue
              option={number}
              callback={setParking}
              callbackValue={parking}
            />
          </div>
          <div className="mb-5">
            <Text
              children="Garage/Box"
              color="purple"
              textSize="bigLight"
              marginX="mb-2"
            />
            <SelectValue
              option={number}
              callback={setBox}
              callbackValue={box}
            />
          </div>
          <div className="">
            <Text
              children="Terrasse/Balcon"
              color="purple"
              textSize="bigLight"
              marginX="mb-2"
            />
            <SelectValue
              option={number}
              callback={setBalcon}
              callbackValue={balcon}
            />
          </div>
        </div>
      </div>
    </LayoutStep>
  );
};

export default OutdoorSpace;
