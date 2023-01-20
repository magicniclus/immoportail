import React, { useEffect, useState } from "react";
import SelectValue from "../../Atoms/select/SelectValue";
import LayoutStep from "../../Layout/LayoutStep";
import { useDispatch } from "react-redux";
import { updateYears } from "../../../redux/action";

const YearOfContruction = () => {
  const years = [
    "moins de 10 ans",
    "plus de 10 ans",
    "entre 1950 et 2000",
    "entre 1900 et 1949",
    "avant 1900",
  ];

  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  useEffect(() => {
    if (value !== "") dispatch(updateYears(value));
    if (value === "") dispatch(updateYears(null));
  }, [value]);

  return (
    <LayoutStep title="Année de contruction de votre bien ? ">
      <SelectValue option={years} callback={setValue} callbackValue={value} />
    </LayoutStep>
  );
};

export default YearOfContruction;
