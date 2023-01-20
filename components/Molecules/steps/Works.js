import React, { useEffect, useState } from "react";
import LayoutStep from "../../Layout/LayoutStep";
import Check from "../cards/Check";
import { useDispatch, useSelector } from "react-redux";
import { updateWorks } from "../../../redux/action";

const Works = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const isValid = props.isValid;

  const [aCardIsSelected, setACardIsSelected] = useState(null);
  const [type, setType] = useState("bien");

  useEffect(() => {
    if (state.estimationElements.accommodation !== null)
      setType(state.estimationElements.accommodation);
    else setType("bien");
  }, [state.estimationElements.accommodation]);

  useEffect(() => {
    dispatch(updateWorks(aCardIsSelected));
  }, [aCardIsSelected]);

  useEffect(() => {
    if (isValid) {
      if (aCardIsSelected !== null) isValid(true);
      else isValid(false);
    }
  }, [aCardIsSelected]);

  return (
    <LayoutStep title={`Y'a t'il des travaux à prévoir dans votre ${type} ?`}>
      <div className="flex mt-2">
        <Check
          title="Oui"
          updateStyle={"mr-5 md:mr-10"}
          valueCallback={aCardIsSelected}
          callback={setACardIsSelected}
          value={1}
        />
        <Check
          title="Non"
          valueCallback={aCardIsSelected}
          callback={setACardIsSelected}
          value={1}
        />
      </div>
    </LayoutStep>
  );
};

export default Works;
