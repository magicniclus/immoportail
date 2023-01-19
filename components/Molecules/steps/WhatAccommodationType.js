import React from "react";
import LayoutStep from "../../Layout/LayoutStep";
import CheckWithImage from "../cards/CheckWithImage";

const WhatAccommodationType = () => {
  return (
    <LayoutStep title="Quel type de bien souhaitez-vous estimer ?">
      <div className="flex mt-2">
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
    </LayoutStep>
  );
};

export default WhatAccommodationType;
