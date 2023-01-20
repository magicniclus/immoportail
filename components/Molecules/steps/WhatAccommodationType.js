import React, { useEffect, useState } from "react";
import LayoutStep from "../../Layout/LayoutStep";
import CheckWithImage from "../cards/CheckWithImage";
import { useDispatch, useSelector } from "react-redux";
import { updateAccommodationType } from "../../../redux/action";

const WhatAccommodationType = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const isValid = props.isValid;

  const [aCardIsSelected, setACardIsSelected] = useState(null);

  useEffect(() => {
    dispatch(updateAccommodationType(aCardIsSelected));
  }, [aCardIsSelected]);

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
          imageAlt="appartement"
          imageSize={{ width: 42, height: 55 }}
          text="Appartement"
          valueCallback={aCardIsSelected}
          callback={setACardIsSelected}
          value={2}
        />
      </div>
    </LayoutStep>
  );
};

export default WhatAccommodationType;
