import React from "react";
import Text from "../Atoms/texts/Text";
import TitleSecondary from "../Atoms/titles/TitleSecondary";
import Vignette from "../Molecules/Vignette";

const HowToStandOutBanner = () => {
  return (
    <div className="bg-purple w-full px-5 md:px-40 py-5 md:py-20 flex">
      <div className="w-2/6 flex flex-col justify-center">
        <TitleSecondary
          text="Comment vous vous démarquer avec"
          textWithColor="Immoportail ?"
          color="white"
          marginY="mb-5 font-light"
        />
        <div className="">
          <Text
            color="white"
            textSize="normal"
            children="Bénéficiez de notre expertise pour votre projet de vente."
          />
        </div>
      </div>
      <div className="flex w-4/6 justify-between">
        <Vignette
          image="/staff/recommandationOne.png"
          alt="staff"
          text="Un seul conseiller, de la disponibilité et un accompagnement sur toutes les étapes de votre projet."
        />
        <Vignette
          image="/staff/satisfactionTwo.png"
          alt="enfant dans un appartement"
          text="97% de clients satisfaits par nos services"
        />
        <Vignette
          image="/staff/recommandationThree.png"
          alt="Femme qui souris"
          text="2008 acheteurs recherchent actuellement une maison comme la votre"
        />
      </div>
    </div>
  );
};

export default HowToStandOutBanner;
