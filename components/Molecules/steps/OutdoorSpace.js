import React from "react";
import LayoutStep from "../../Layout/LayoutStep";
import Text from "../../Atoms/texts/Text";
import Check from "../../Molecules/cards/Check";
import SelectValue from "../../Atoms/select/SelectValue";

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
  return (
    <LayoutStep title="Espaces extérieurs ?">
      <div className="">
        <div className="mb-2">
          <Text
            children="Votre bien à t'il ?"
            color="purple"
            textSize="bigLight"
          />
        </div>
        <div className="flex">
          <Check title="Une cave" updateStyle={"mr-10"} />
          <Check title="Une dépendence" updateStyle={"mr-10"} />
          <Check title="Une piscine" />
        </div>
        <div className="flex flex-col mt-5">
          <div className="mb-5">
            <Text
              children="Parking"
              color="purple"
              textSize="bigLight"
              marginX="mb-2"
            />
            <SelectValue option={number} />
          </div>
          <div className="mb-5">
            <Text
              children="Boxe"
              color="purple"
              textSize="bigLight"
              marginX="mb-2"
            />
            <SelectValue option={number} />
          </div>
          <div className="">
            <Text
              children="Balcon"
              color="purple"
              textSize="bigLight"
              marginX="mb-2"
            />
            <SelectValue option={number} />
          </div>
        </div>
      </div>
    </LayoutStep>
  );
};

export default OutdoorSpace;
