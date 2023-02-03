import React from "react";
import Text from "../Atoms/texts/Text";

const Tag = (props) => {
  const text = props.text || null;
  return (
    <div className="bg-purple rounded-lg py-1 px-2 h-min w-fit mb-1">
      <Text textSize="titleCard" color="white" center="text-center">
        {text}
      </Text>
    </div>
  );
};

export default Tag;
