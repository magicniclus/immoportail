import Image from "next/image";
import React from "react";
import Text from "../Atoms/texts/Text";

const ConfidenceIndex = () => {
  return (
    <div className="flex mt-10">
      <div className="flex">
        <div className="h-5 w-5 relative">
          <Image src="/vector/star.png" layout="fill" alt="star" />
        </div>
        <div className="h-5 w-5 relative">
          <Image src="/vector/star.png" layout="fill" alt="star" />
        </div>
        <div className="h-5 w-5 relative">
          <Image src="/vector/star.png" layout="fill" alt="star" />
        </div>
        <div className="h-5 w-5 relative">
          <Image src="/vector/star.png" layout="fill" alt="star" />
        </div>
      </div>
      <div className="flex items-center">
        <Text
          color="purple"
          textSize="bigLight"
          children="Indice de confiance:"
          marginX="w-fit ml-2"
        />
        <Text
          color="purple"
          textSize="big"
          children="74%"
          marginX="font-bold ml-2"
        />
      </div>
    </div>
  );
};

export default ConfidenceIndex;
