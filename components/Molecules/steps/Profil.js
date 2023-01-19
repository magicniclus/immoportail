import React from "react";
import LayoutStep from "../../Layout/LayoutStep";
import Text from "../../Atoms/texts/Text";
import Check from "../../Molecules/cards/Check";
import SelectValue from "../../Atoms/select/SelectValue";

const Profil = () => {
  const options = [
    "Le plus rapidement possible",
    "Dans l'année",
    "Dans les 3 ans",
    "Je ne sais pas",
  ];
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
        <Check title="Oui" updateStyle={"mr-10"} />
        <Check title="Non" />
      </div>
      <div className="mt-5 mb-3">
        <Text
          children="Quand souahitez-vous vendre ce bien ?"
          color="purple"
          textSize="bigLight"
        />
      </div>
      <SelectValue option={options} />
    </LayoutStep>
  );
};

export default Profil;
