import React from "react";
import TitleSecondary from "../../Atoms/titles/TitleSecondary";
import LayoutStep from "../../Layout/LayoutStep";
import CheckWithImage from "../cards/CheckWithImage";

const WhatAccommodationType = () => {
  return (
    <LayoutStep>
      <div className="flex flex-col">
        <TitleSecondary
          text="Quel type de bien souhaitez-vous estimer ? "
          color="purple"
        />
        <div className="flex mt-5">
          <CheckWithImage
            updateStyle={"mr-10"}
            imageAlt="maison"
            image="house"
            imageSize={{ width: 65, height: 48 }}
            text="Maison"
          />
          <CheckWithImage
            image="immeuble"
            imageAlt="immeuble"
            imageSize={{ width: 42, height: 55 }}
            text="Immeuble"
          />
        </div>
      </div>
    </LayoutStep>
  );
};

export default WhatAccommodationType;
