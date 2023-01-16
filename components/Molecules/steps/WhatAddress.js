import React from "react";
import InputWithLogo from "../../Atoms/inputs/InputWithLogo";
import TitleSecondary from "../../Atoms/titles/TitleSecondary";
import SetInputWithTitleAndButton from "../SetInputWithTitleAndButton";

const WhatAddress = () => {
  return (
    <div className="w-full">
      <TitleSecondary text="Adresse du bien à estimer" color="purple" />
      <InputWithLogo
        componentIsForAdress={true}
        image="/Vectorlocalization.png"
        marginY="my-4"
        placeholder="Saisir une adresse"
        color="purple"
      />
    </div>
  );
};

export default WhatAddress;
