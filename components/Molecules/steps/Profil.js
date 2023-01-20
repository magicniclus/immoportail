import React, { useEffect, useState } from "react";
import LayoutStep from "../../Layout/LayoutStep";
import Text from "../../Atoms/texts/Text";
import Check from "../../Molecules/cards/Check";
import SelectValue from "../../Atoms/select/SelectValue";
import { useDispatch } from "react-redux";
import { updateProfil } from "../../../redux/action";

const Profil = (props) => {
  const dispatch = useDispatch();

  const isValid = props.isValid;

  const [aCardIsSelected, setACardIsSelected] = useState(null);

  const [value, setValue] = useState("");

  const options = [
    "Le plus rapidement possible",
    "Dans l'année",
    "Dans les 3 ans",
    "Je ne sais pas",
  ];

  useEffect(() => {
    if (value === "" || value === null || aCardIsSelected === null) return;
    dispatch(
      updateProfil({
        contract: aCardIsSelected,
        when: value,
      })
    );
  }, [value, aCardIsSelected]);

  useEffect(() => {
    if (isValid) {
      if (aCardIsSelected !== null) isValid(true);
      else isValid(false);
    }
  }, [aCardIsSelected]);

  return (
    <LayoutStep title="Profil">
      <div className="mb-3">
        <Text
          children="Êtes vous propriétaire de ce bien ?"
          color="purple"
          textSize="bigLight"
        />
      </div>
      <div className="flex">
        <Check
          title="Oui"
          updateStyle={"mr-10"}
          valueCallback={aCardIsSelected}
          callback={setACardIsSelected}
        />
        <Check
          title="Non"
          valueCallback={aCardIsSelected}
          callback={setACardIsSelected}
        />
      </div>
      <div className="mt-5 mb-3">
        <Text
          children="Quand souahitez-vous vendre ce bien ?"
          color="purple"
          textSize="bigLight"
        />
      </div>
      <SelectValue option={options} callback={setValue} callbackValue={value} />
    </LayoutStep>
  );
};

export default Profil;
