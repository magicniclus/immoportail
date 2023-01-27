import React from "react";
import Text from "../Atoms/texts/Text";

const Tag = (props) => {
  const text = props.text || null;
  return (
    <div className="bg-purple rounded-lg py-1 px-2 h-min w-fit">
      <Text
        textSize="titleCard"
        color="white"
        children={text}
        center="text-center"
      />
    </div>
  );
};

export default Tag;
