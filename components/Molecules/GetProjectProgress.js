import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStepNumber } from "../../redux/action";
import Icon from "../Atoms/logos/Icon";
import TextWithColorChange from "../Atoms/texts/TextWithColorChange";

const GetProjectProgress = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [trackStep, setTrackStep] = useState(state.stepOfProjectProgress);

  const estimationElements = state.estimationElements;

  const stepName = [
    state.address !== "" ? state.address : "Adresse",
    estimationElements.accommodation !== null
      ? estimationElements.accommodation
      : "Type de bien",
    estimationElements.surface !== null
      ? estimationElements.surface + "m²"
      : "Surface",
    estimationElements.level !== null
      ? estimationElements.accommodation === "Maison"
        ? `${
            estimationElements.level === 0
              ? "Plein pied"
              : estimationElements.level > 1
              ? estimationElements.level + " niveaux"
              : estimationElements.level + " niveau"
          }`
        : `${
            estimationElements.level === 0
              ? "Rez-de-chaussé"
              : estimationElements.level > 1
              ? estimationElements.level + " étages"
              : estimationElements.level + " étage"
          }`
      : "Étages",
    estimationElements.partNumber !== null
      ? estimationElements.partNumber +
        `${estimationElements.partNumber > 1 ? " pièces" : " pièce"}`
      : "Nombre de pièce",
    estimationElements.energy !== null
      ? estimationElements.energy
      : "Classement energetique",
    estimationElements.years !== null
      ? estimationElements.years
      : "Année de construction",
    estimationElements.works !== null
      ? estimationElements.works === "Oui"
        ? "Avec travaux"
        : "Sans travaux"
      : "Travaux",
    estimationElements.livingArea !== null
      ? estimationElements.livingArea + "m²"
      : "Séjour/bâti",
    estimationElements.cave ||
    estimationElements.dependence ||
    estimationElements.piscine ||
    estimationElements.parking ||
    estimationElements.box ||
    estimationElements.balcon
      ? "Avec espaces exterieurs"
      : "Espaces exterieurs",
    estimationElements.exposure !== null
      ? estimationElements.exposure
      : "Exposition/Vue",
    estimationElements.standing ? estimationElements.standing : "Standing",
    estimationElements.adjoining
      ? estimationElements.adjoining === "Oui"
        ? "Mitoyen"
        : "Non mitoyen"
      : "Mitoyenneté",
    estimationElements.contract
      ? estimationElements.contract === "Oui"
        ? "Proprietaire"
        : "Locataire"
      : "Profil",
  ];

  useEffect(() => {
    dispatch(updateStepNumber(stepName.length));
  }, [trackStep]);

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
    <div className="h-full min-h-max w-10/12 my-5 flex flex-col justify-between flex-nowrap">
      {stepName.map((item, idx) => (
        <div key={idx} className="flex w-full">
          <div
            className={`h-full flex justify-center mb-3 items-center relative z-0 ${updateBefore(
              idx,
              trackStep + 1
            )}`}
          >
            <Icon
              image={
                trackStep > idx
                  ? "checkRoundedPurple"
                  : trackStep === idx
                  ? "roundedPurple"
                  : "roundedGray"
              }
              size="extraLight"
            />
          </div>
          <TextWithColorChange
            key={idx}
            text={item}
            isSelected={trackStep < idx}
            valueIdx={idx}
            updateStyle=" ml-3 text-ellipsis overflow-hidden whitespace-nowrap"
          />
        </div>
      ))}
    </div>
  );
};

export default GetProjectProgress;
