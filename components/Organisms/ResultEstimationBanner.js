import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TagsContainer from "../Molecules/TagsContainer";
import TitlePrimary from "../Atoms/titles/TitlePrimary";
import TitleWithLogo from "../Atoms/titles/TitleWithLogo";
import DisplayEstimationPrice from "./DisplayEstimationPrice";
import ConfidenceIndex from "../Molecules/ConfidenceIndex";
import { toTitleCase } from "../../lib/utils/func";

const ResultEstimationBanner = () => {
  const state = useSelector((state) => state);
  const stateElement = state.estimationElements;
  const [array, setArray] = useState(["Maison", "90m2", "3 pièces"]);

  useEffect(() => {
    setArray([]);
    if (stateElement.accommodation !== null) {
      setArray([
        toTitleCase(stateElement.accommodation),
        stateElement.surface + "m²",
        stateElement.partNumber !== null
          ? stateElement.partNumber > 1
            ? stateElement.partNumber + " pièces"
            : stateElement.partNumber + " pièce"
          : null,
        stateElement.roomNumber !== null
          ? stateElement.roomNumber > 1
            ? stateElement.roomNumber + " chambres"
            : stateElement.roomNumber + " chambre"
          : null,
      ]);
    } else {
      setArray(["Maison", "90m2", "3 pièces"]);
    }
  }, [stateElement]);

  useEffect(() => {
    setArray([]);
    if (stateElement.accommodation !== null) {
      setArray([
        toTitleCase(stateElement.accommodation),
        stateElement.surface + "m²",
        stateElement.partNumber !== null
          ? stateElement.partNumber + stateElement.partNumber > 1
            ? stateElement.partNumber + " pièces"
            : stateElement.partNumber + " pièce"
          : null,
        stateElement.roomNumber !== null
          ? stateElement.roomNumber > 1
            ? stateElement.roomNumber + " chambres"
            : stateElement.roomNumber + " chambre"
          : null,
      ]);
    } else {
      setArray(["Maison", "90m2", "3 pièces"]);
    }
  }, []);

  const [tags, setTags] = useState([
    stateElement.accommodation !== null ? stateElement.accommodation : null,
    stateElement.surface !== null ? stateElement.surface + "m²" : null,
    stateElement.partNumber !== null
      ? stateElement.partNumber + stateElement.partNumber > 1
        ? " pièces"
        : " pièce"
      : null,
    stateElement.roomNumber !== null
      ? stateElement.roomNumber > 1
        ? "chambres"
        : "chambre"
      : null,
  ]);

  return (
    <div className="flex flex-col justify-center items-center px-5 md:px-40 py-5 md:py-20 my-auto">
      <TitlePrimary
        text="Voici le resultat de votre "
        textWithColor="estimation"
        color="purple"
        updateWeight="font-light text-center"
      />
      <TitleWithLogo
        text={state.address || "20 route de la gare, 44000, Angers"}
        color="purple"
        image="VectorlocalizationPurple"
        updateWidth="w-fit"
        marginX="mt-7 md:mt-3 "
      />
      <TagsContainer tags={array} updateStyle="mt-3" />
      <DisplayEstimationPrice updateStyle="mt-10" />
      <ConfidenceIndex />
    </div>
  );
};

export default ResultEstimationBanner;
