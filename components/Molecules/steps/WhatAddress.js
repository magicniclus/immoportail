import React from "react";
import { useSelector } from "react-redux";
import InputWithLogo from "../../Atoms/inputs/InputWithLogo";
import LayoutStep from "../../Layout/LayoutStep";

const WhatAddress = () => {
  const state = useSelector((state) => state);
  return (
    <LayoutStep title="Adresse du bien à estimer ?*">
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
