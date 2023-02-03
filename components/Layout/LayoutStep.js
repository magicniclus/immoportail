import React from "react";
import SeparationLign from "../Atoms/others/SeparationLign";
import Text from "../Atoms/texts/Text";
import TitleSecondary from "../Atoms/titles/TitleSecondary";

const LayoutStep = (props) => {
  const title = props.title;
  const indication = props.indication || null;
  return (
    <div className="w-full mb-8 flex flex-col">
      <TitleSecondary text={title} color="purple" marginY="font-light" />
      <Text textSize="bigLight" color="purple" marginX="font-thin">
        {indication}
      </Text>
      <SeparationLign color="yellow" marginY="mt-3" />
      <div className="flex mt-5 flex-col">{props.children}</div>
    </div>
  );
};

export default LayoutStep;
