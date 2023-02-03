import Image from "next/image";
import React from "react";
import Text from "../Atoms/texts/Text";

const Vignette = (props) => {
  const image = props.image || null;
  const alt = props.alt || null;
  const text = props.text || null;
  const updateStyle = props.updateStyle || null;
  return (
    <div
      className={`bg-white rounded-lg h-64 w-full xl:w-44 overflow-hidden ${
        updateStyle ? updateStyle : null
      }`}
    >
      <div className="h-32 w-full xl:w-44 relative">
        <Image
          priority
          layout="fill"
          src={`${image}`}
          alt={alt}
          objectFit="cover"
        />
      </div>
      <div className="h-32 w-full xl:w-44 p-3">
        <Text color="purple" textSize="titleCard">
          {text}
        </Text>
      </div>
    </div>
  );
};

export default Vignette;
