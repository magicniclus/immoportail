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
        <Text color="purple" textSize="bigLight" marginX="w-fit ml-2">
          Indice de confiance:
        </Text>
        <Text color="purple" textSize="big" marginX="font-bold ml-2">
          74%
        </Text>
      </div>
    </div>
  );
};

export default ConfidenceIndex;
