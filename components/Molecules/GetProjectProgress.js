import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Icon from "../Atoms/logos/Icon";
import TextWithColorChange from "../Atoms/texts/TextWithColorChange";

const GetProjectProgress = () => {
  const state = useSelector((state) => state);
  const [trackStep, setTrackStep] = useState(state.stepOfProjectProgress);

  const stepName = [
    "Adresse",
    "Type de bien",
    "Surface",
    "Nombre de pièce",
    "Année de construction",
    "Travaux",
    "Surface",
    "Espaces exterieurs",
    "Exposition/Vue",
    "Standing",
    "Mitoyenneté",
    "Profil",
  ];

  useEffect(() => {
    if (trackStep !== state.stepOfProjectProgress) {
      setTrackStep(state.stepOfProjectProgress);
    }
  }, [state.stepOfProjectProgress]);

  const selectedBefore = "before:bg-purple";
  const unselectedBefore = "before:bg-newGray";

  const beforeGlobalStyle =
    "before:w-1 before:h-3 before:absolute before:bottom-4 before:left-1.5 z-40 ";

  const updateBefore = (idx, step) => {
    if (idx === 0) {
      return;
    }
    if (idx < step) {
      return beforeGlobalStyle + selectedBefore;
    } else {
      return beforeGlobalStyle + unselectedBefore;
    }
  };

  return (
    <div className="h-full min-h-max w-6/12 my-5 flex flex-col justify-between">
      {stepName.map((item, idx) => (
        <div className="flex">
          <div
            className={`h-full flex justify-center mb-3 items-center relative z-0 ${updateBefore(
              idx,
              trackStep
            )}`}
          >
            <Icon
              image={trackStep > idx ? "checkRoundedPurple" : "roundedGray"}
              size="extraLight"
            />
          </div>
          <TextWithColorChange
            key={idx}
            text={item}
            isSelected={trackStep <= idx}
            valueIdx={idx}
            updateStyle="ml-3"
          />
        </div>
      ))}
    </div>
  );
};

export default GetProjectProgress;
