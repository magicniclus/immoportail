import React from "react";
import Text from "../Atoms/texts/Text";
import TitleSecondary from "../Atoms/titles/TitleSecondary";
import Vignette from "../Molecules/Vignette";

const HowToStandOutBanner = () => {
  return (
    <div className="bg-purple w-full px-5 md:px-40 py-5 md:py-20 flex justify-center md:mb-0 mb-24">
      <div className="flex flex-col xl:flex-row w-full max-w-[1400px]">
        <div className="xl:w-2/6 w-full flex flex-col justify-center mr-10">
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
              marginX="mb-7 xl:mb-0"
            />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row w-full xl:w-4/6 justify-between">
          <Vignette
            image="/staff/recommandationOne.png"
            alt="staff"
            text="Un seul conseiller, de la disponibilité et un accompagnement sur toutes les étapes de votre projet."
            updateStyle="mt-10"
          />
          <Vignette
            image="/staff/satisfactionTwo.png"
            alt="enfant dans un appartement"
            text="97% de clients satisfaits par nos services"
            updateStyle="mt-10"
          />
          <Vignette
            image="/staff/recommandationThree.png"
            alt="Femme qui souris"
            text="2008 acheteurs recherchent actuellement une maison comme la votre"
            updateStyle="mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default HowToStandOutBanner;
