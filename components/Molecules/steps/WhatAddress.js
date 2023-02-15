import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import InputWithLogo from "../../Atoms/inputs/InputWithLogo";
import LayoutStep from "../../Layout/LayoutStep";
import TestFormAddress from "../form/TestFormAddress";

const WhatAddress = (props) => {
  const titleColor = "purple";
  const colorInput = "purple";

  return (
    <LayoutStep title="Adresse du bien à estimer ?*">
      <InputWithLogo
        componentIsForAdress={true}
        image={
          titleColor === "purple"
            ? "/Vectorlocalization.png"
            : "/vector/VectorlocalizationPurple.png"
        }
        marginY="my-4"
        placeholder="Saisir une adresse"
        color={colorInput !== undefined ? colorInput : "purple"}
      />
    </LayoutStep>
  );
};

export default WhatAddress;
