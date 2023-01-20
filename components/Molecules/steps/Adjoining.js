import React, { useEffect, useState } from "react";
import LayoutStep from "../../Layout/LayoutStep";
import Check from "../cards/Check";
import { useDispatch } from "react-redux";
import { updateAdjoining } from "../../../redux/action";

const Adjoining = (props) => {
  const dispatch = useDispatch();

  const isValid = props.isValid;

  const [aCardIsSelected, setACardIsSelected] = useState(null);

  useEffect(() => {
    dispatch(updateAdjoining(aCardIsSelected));
  }, [aCardIsSelected]);

  useEffect(() => {
    if (isValid) {
      if (aCardIsSelected !== null) isValid(true);
      else isValid(false);
    }
  }, [aCardIsSelected]);
  return (
    <LayoutStep title="Votre bien est-il mitoyen ?">
      <div className="flex mt-2">
        <Check
          title="Oui"
          updateStyle={"mr-10"}
          valueCallback={aCardIsSelected}
          callback={setACardIsSelected}
        />
        <Check
          title="Non"
          valueCallback={aCardIsSelected}
          callback={setACardIsSelected}
        />
      </div>
    </LayoutStep>
  );
};

export default Adjoining;
