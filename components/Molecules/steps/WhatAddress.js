import React from "react";
import InputWithLogo from "../../Atoms/inputs/InputWithLogo";
import TitleSecondary from "../../Atoms/titles/TitleSecondary";
import LayoutStep from "../../Layout/LayoutStep";

const WhatAddress = () => {
  return (
    <LayoutStep>
      <TitleSecondary text="Adresse du bien à estimer ?" color="purple" />
      <InputWithLogo
        componentIsForAdress={true}
        image="/Vectorlocalization.png"
        marginY="my-4"
        placeholder="Saisir une adresse"
        color="purple"
      />
    </LayoutStep>
  );
};

export default WhatAddress;
