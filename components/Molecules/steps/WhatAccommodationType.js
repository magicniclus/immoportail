import React, { useEffect } from "react";
import LayoutStep from "../../Layout/LayoutStep";
import CheckWithImage from "../cards/CheckWithImage";
import { useState } from "react";

const WhatAccommodationType = (props) => {
  const isValid = props.isValid;

  const [aCardIsSelected, setACardIsSelected] = useState(null);

  useEffect(() => {
    if (isValid) {
      if (aCardIsSelected !== null) isValid(true);
      else isValid(false);
    }
  }, [aCardIsSelected]);

  return (
    <LayoutStep title="Quel type de bien souhaitez-vous estimer ?">
      <div className="flex mt-2">
        <CheckWithImage
          updateStyle={"mr-5 md:mr-10"}
          imageAlt="maison"
          image="house"
          imageSize={{ width: 65, height: 48 }}
          text="Maison"
          valueCallback={aCardIsSelected}
          callback={setACardIsSelected}
          value={1}
        />
        <CheckWithImage
          image="immeuble"
          imageAlt="immeuble"
          imageSize={{ width: 42, height: 55 }}
          text="Immeuble"
          valueCallback={aCardIsSelected}
          callback={setACardIsSelected}
          value={2}
        />
      </div>
    </LayoutStep>
  );
};

export default WhatAccommodationType;
