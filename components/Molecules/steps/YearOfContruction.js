import React, { useEffect, useState } from "react";
import SelectValue from "../../Atoms/select/SelectValue";
import LayoutStep from "../../Layout/LayoutStep";
import { useDispatch, useSelector } from "react-redux";
import { updateYears } from "../../../redux/action";

const YearOfContruction = () => {
  const years = [
    "Moins de 10 ans",
    "Plus de 10 ans",
    "Entre 1950 et 2000",
    "Entre 1900 et 1949",
    "Avant 1900",
  ];

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
    if (value !== "") dispatch(updateYears(value));
    if (value === "") dispatch(updateYears(null));
  }, [value]);

  return (
    <LayoutStep title={`Année de contruction de votre ${type} ? `}>
      <SelectValue option={years} callback={setValue} callbackValue={value} />
    </LayoutStep>
  );
};

export default YearOfContruction;
