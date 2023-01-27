import React, { useState } from "react";
import { useSelector } from "react-redux";
import TagsContainer from "../Molecules/TagsContainer";
import TitlePrimary from "../Atoms/titles/TitlePrimary";
import TitleWithLogo from "../Atoms/titles/TitleWithLogo";
import DisplayEstimationPrice from "./DisplayEstimationPrice";

const ResultEstimationBanner = () => {
  const state = useSelector((state) => state);
  const stateElement = state.estimationElements;
  const array = ["maison", "90m2", "3 pièces"];

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
    <>
      <TitlePrimary
        text="Voici le resultat de votre "
        textWithColor="estimation"
        color="purple"
        updateWeight="font-light"
      />
      <TitleWithLogo
        text={state.address}
        color="purple"
        image="VectorlocalizationPurple"
      />
      <TagsContainer tags={array} />
      <DisplayEstimationPrice />
    </>
  );
};

export default ResultEstimationBanner;
