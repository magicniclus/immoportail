import React from "react";
import SeparationLign from "../Atoms/others/SeparationLign";
import TitlePrimary from "../Atoms/titles/TitlePrimary";
import Text from "../Atoms/texts/Text";

const SetTitleWithDescriptionAndMiddleSeparation = (props) => {
  const title = props.title;
  const titleWithColor = props.titleWithColor;
  const colorTitle = props.colorTitle;
  const colorSeparation = props.colorSeparation;
  return (
    <div className=" lg:w-7/12">
      <TitlePrimary
        text={title}
        textWithColor={titleWithColor}
        color={colorTitle}
      />
      <SeparationLign color={colorSeparation} marginY="my-4" />
      <Text textSize="normal" color="purple">
        La localisation joue un rôle primordial dans l&apos;évaluation de la
        valeur d&apos;un bien immobilier. Que ce soit dans une rue paisible à
        l&apos;extérieur du centre-ville, en campagne ou dans un endroit animé
        avec plus de passage, la localisation peut fortement influencer le prix.
        <br />
        <br /> C&apos;est pourquoi nous recommandons à tout propriétaire ayant
        l&apos;intention de vendre de prendre rendez-vous avec l&apos;un de nos
        conseillers immobiliers spécialisés pour évaluer, affiner et conseiller
        sur leur projet de vente afin d&apos;obtenir les estimations les plus
        précises possible.
      </Text>
    </div>
  );
};

export default SetTitleWithDescriptionAndMiddleSeparation;
