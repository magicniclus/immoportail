import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LayoutStep from "../../Layout/LayoutStep";
import SelectNumber from "../../Atoms/select/SelectNumber";
import Text from "../../Atoms/texts/Text";
import {
  updateBuildingLevel,
  updateElevator,
  updateLevel,
} from "../../../redux/action";
import Check from "../cards/Check";

const Level = () => {
  //TODO: Faire commencer le nombre par un quand c'est une maison
  const state = useSelector((state) => state.estimationElements.accommodation);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("Étage");
  const [text, setText] = useState("");

  const [valueLevel, setValueLevel] = useState(state === "Appartement" ? 0 : 0);

  const [numberBuildingLevel, setNumberBuildingLevel] = useState(
    state === "Appartement" ? 0 : null
  );

  const [aCardIsSelected, setACardIsSelected] = useState(null);

  useEffect(() => {
    dispatch(updateLevel(valueLevel));
    if (state === "Appartement")
      dispatch(updateBuildingLevel(numberBuildingLevel));
  }, []);

  useEffect(() => {
    if (state === "Maison") {
      setTitle("Combien d'étage comporte votre maison ?");
    } else if (state === "Appartement")
      setTitle(
        "Combien y a-t-il d'étages dans votre immeuble et à quel étage êtes vous ?"
      );
    else setTitle("Étage");
  }, [state]);

  useEffect(() => {
    if (state === "Maison") {
      setText("0 étant le rez-de-chaussée");
    } else if (state === "Appartement")
      setText(
        "À quel étage se situe votre appartement ? (0 étant le rez-de-chaussée)"
      );
    else setText("");
  }, [state]);

  useEffect(() => {
    if (state === "Appartement") {
      if (valueLevel !== null) dispatch(updateLevel(valueLevel));
      if (valueLevel === null) dispatch(updateLevel(null));
      if (numberBuildingLevel !== null)
        dispatch(updateBuildingLevel(numberBuildingLevel));
      if (numberBuildingLevel === null) dispatch(updateBuildingLevel(0));
      if (numberBuildingLevel === 0) dispatch(updateBuildingLevel(0));
      if (aCardIsSelected !== null) dispatch(updateElevator(aCardIsSelected));
      if (aCardIsSelected === null) dispatch(updateElevator(null));
    } else {
      if (valueLevel !== null) dispatch(updateLevel(valueLevel));
      if (valueLevel === null) dispatch(updateLevel(null));
    }
  }, [valueLevel, state, numberBuildingLevel, aCardIsSelected]);

  useEffect(() => {
    if (state === "Appartement") {
      setValueLevel(0);
      setNumberBuildingLevel(0);
    } else {
      setValueLevel(0);
    }
  }, []);

  return (
    <LayoutStep title={title + "*"}>
      <div className="mb-2">
        <Text color="purple" textSize="bigLight">
          {text}
        </Text>
      </div>
      <SelectNumber
        callback={setValueLevel}
        callbackValue={valueLevel}
        startInZero={true}
      />
      {state === "Appartement" ? (
        <>
          <div className="mb-2 mt-5">
            <Text color="purple" textSize="bigLight">
              Nombre d&apos;étage de l&apos;immeuble
            </Text>
          </div>
          <SelectNumber
            callback={setNumberBuildingLevel}
            callbackValue={numberBuildingLevel}
          />
          <div className="mb-2 mt-5">
            <Text color="purple" textSize="bigLight">
              Votre immeuble possède-t-il un ascenseur ?
            </Text>
            <div className="flex mt-2">
              <Check
                title="Oui"
                updateStyle={"mr-5 md:mr-10"}
                valueCallback={aCardIsSelected}
                callback={setACardIsSelected}
                value={1}
              />
              <Check
                title="Non"
                valueCallback={aCardIsSelected}
                callback={setACardIsSelected}
                value={1}
              />
            </div>
          </div>
        </>
      ) : null}
    </LayoutStep>
  );
};

export default Level;
