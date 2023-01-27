import Image from "next/image";
import React from "react";
import Text from "../Atoms/texts/Text";

const Vignette = (props) => {
  const image = props.image || null;
  const alt = props.alt || null;
  const text = props.text || null;
  return (
    <div className="bg-white rounded-lg h-64 w-44 overflow-hidden">
      <div className="h-32 w-44 relative">
        <Image priority layout="fill" src={`${image}`} alt={alt} />
      </div>
      <div className="h-32 w-44 p-3">
        <Text children={text} color="purple" textSize="titleCard" />
      </div>
    </div>
  );
};

export default Vignette;
