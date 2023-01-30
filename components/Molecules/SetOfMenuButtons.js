import React from "react";
import ButtonWithLogo from "../Atoms/buttons/ButtonWithLogo";
import ButtonWithLogoAndText from "../Atoms/buttons/ButtonWithLogoAndText";

const SetOfMenuButtons = () => {
  return (
    <div>
      <div className="hidden lg:flex">
        {/* Button one */}
        <ButtonWithLogoAndText
          image="/VectorLight.png"
          text="Recommandations"
          size="big"
          after="withAfter"
          link="/recommandations"
        />
        {/* Button two */}
        <ButtonWithLogoAndText
          image="/VectorLove.png"
          text="Favoris"
          size="normal"
          after="withAfter"
          link="/favoris"
        />
        {/* Button three */}
        <ButtonWithLogo image="/Vectoruser.png" link="/connexion" />
      </div>
    </div>
  );
};

export default SetOfMenuButtons;
