import Image from "next/image";
import React from "react";
import Text from "../Atoms/texts/Text";

const Loader = () => {
  return (
    <div className="min-h-[calc((100vh-7rem))] w-full flex mx-auto flex-col justify-center items-center md:max-w-screen-2xl">
      <div className=" animate-spin flex justify-center items-center">
        <Image
          height={120}
          width={120}
          alt="spinner"
          src="/vector/spinnerPurple.png"
        />
      </div>
      <Text
        children="Chargement..."
        color="purple"
        textSize="big"
        marginX="mt-10"
      />
    </div>
  );
};

export default Loader;
