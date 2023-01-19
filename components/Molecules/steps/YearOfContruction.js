import React from "react";
import SelectValue from "../../Atoms/select/SelectValue";
import TitleSecondary from "../../Atoms/titles/TitleSecondary";
import LayoutStep from "../../Layout/LayoutStep";

const YearOfContruction = () => {
  const years = [
    "moins de 10 ans",
    "plus de 10 ans",
    "entre 1950 et 2000",
    "entre 1900 et 1949",
    "avant 1900",
  ];
  return (
    <LayoutStep title="Année de contruction de votre bien ? ">
      <SelectValue option={years} />
    </LayoutStep>
  );
};

export default YearOfContruction;
