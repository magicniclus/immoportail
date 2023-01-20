import React, { useEffect, useState } from "react";
import LayoutStep from "../../Layout/LayoutStep";
import Text from "../../Atoms/texts/Text";
import Check from "../../Molecules/cards/Check";
import { useDispatch } from "react-redux";
import { updateStanding } from "../../../redux/action";

const Standing = (props) => {
  const dispatch = useDispatch();

  const isValid = props.isValid;

  const [aCardIsSelectedOne, setACardIsSelectedOne] = useState(null);

  const [aCardIsSelectedTwo, setACardIsSelectedTwo] = useState(null);

  useEffect(() => {
    if (aCardIsSelectedOne === null && aCardIsSelectedTwo === null) return;
    dispatch(
      updateStanding({
        standing: aCardIsSelectedOne,
        secteur: aCardIsSelectedTwo,
      })
    );
  }, [aCardIsSelectedOne, aCardIsSelectedTwo]);

  useEffect(() => {
    if (isValid) {
      if (aCardIsSelectedOne !== null) isValid(true);
      else isValid(false);
    }
  }, [aCardIsSelectedOne]);

  useEffect(() => {
    if (isValid) {
      if (aCardIsSelectedTwo !== null) isValid(true);
      else isValid(false);
    }
  }, [aCardIsSelectedTwo]);

  return (
    <LayoutStep title="Quel est le standing de votre bien ? ">
      <div className="mb-5">
        <div className="flex">
          <Check
            title="Moyen"
            updateStyle={"mr-5 md:mr-10"}
            valueCallback={aCardIsSelectedOne}
            callback={setACardIsSelectedOne}
          />
          <Check
            title="Standard"
            updateStyle={"mr-5 md:mr-10"}
            valueCallback={aCardIsSelectedOne}
            callback={setACardIsSelectedOne}
          />
          <Check
            title="Exceptionnel"
            valueCallback={aCardIsSelectedOne}
            callback={setACardIsSelectedOne}
          />
        </div>
      </div>
      <div className="mb-2">
        <Text
          children="Votre bien est dans un secteur ?"
          color="purple"
          textSize="bigLight"
        />
      </div>
      <div className="flex">
        <Check
          title="Bruyant"
          updateStyle={"mr-5 md:mr-10"}
          valueCallback={aCardIsSelectedTwo}
          callback={setACardIsSelectedTwo}
        />
        <Check
          title="Standard"
          updateStyle={"mr-5 md:mr-10"}
          valueCallback={aCardIsSelectedTwo}
          callback={setACardIsSelectedTwo}
        />
        <Check
          title="Calme"
          valueCallback={aCardIsSelectedTwo}
          callback={setACardIsSelectedTwo}
        />
      </div>
    </LayoutStep>
  );
};

export default Standing;
