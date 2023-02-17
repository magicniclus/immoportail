import React, { useEffect, useState } from "react";
import SelectValue from "../../Atoms/select/SelectValue";
import LayoutStep from "../../Layout/LayoutStep";
import { useDispatch, useSelector } from "react-redux";
import { updateEnergy } from "../../../redux/action";

const Energy = () => {
  const energyClassement = ["A", "B", "C", "D", "E", "F", "G"];
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [value, setValue] = useState("");
  const [type, setType] = useState("bien");

  useEffect(() => {
    if (state.estimationElements.accommodation !== null)
      setType(state.estimationElements.accommodation);
    else setType("bien");
  }, [state.estimationElements.accommodation]);

  useEffect(() => {
    if (value !== "") dispatch(updateEnergy(value));
    if (value === "") dispatch(updateEnergy(null));
  }, [value]);

  return (
    <LayoutStep
      title={`Quel est le classement energétique de votre logement ?* `}
    >
      <SelectValue
        option={energyClassement}
        callback={setValue}
        callbackValue={value}
      />
    </LayoutStep>
  );
};
export default Energy;
