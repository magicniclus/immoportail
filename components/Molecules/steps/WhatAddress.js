import React from "react";
import InputWithLogo from "../../Atoms/inputs/InputWithLogo";
import TitleSecondary from "../../Atoms/titles/TitleSecondary";
import LayoutStep from "../../Layout/LayoutStep";

const WhatAddress = () => {
  return (
    <LayoutStep title="Adresse du bien à estimer ?">
      <InputWithLogo
        componentIsForAdress={true}
        image="/Vectorlocalization.png"
        marginY="mt-2"
        placeholder="Saisir une adresse"
        color="purple"
      />
    </LayoutStep>
  );
};

export default WhatAddress;
