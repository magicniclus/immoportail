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

  const [valueLevel, setValueLevel] = useState(
    state === "Appartement" ? 0 : null
  );

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
      setTitle("Combien de niveau que comporte votre maison ?");
    } else if (state === "Appartement")
      setTitle(
        "Combien y a-t-il d'étages dans votre immeuble et à quel étage êtes vous ?"
      );
    else setTitle("Étage");
  }, [state]);

  useEffect(() => {
    if (state === "Maison") {
      setText("Le rez-de-chaussé est à prendre en compte");
    } else if (state === "Appartement") setText("Zero étant le rez-de-chaussé");
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

  const AppartmentContainer = () => {};

  return (
    <LayoutStep title={title + "*"}>
      <div className="mb-2">
        <Text color="purple" textSize="bigLight">
          {text}
        </Text>
      </div>
      <SelectNumber callback={setValueLevel} callbackValue={valueLevel} />
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
