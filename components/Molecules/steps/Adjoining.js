import React from "react";
import LayoutStep from "../../Layout/LayoutStep";
import Check from "../cards/Check";

const Adjoining = () => {
  return (
    <LayoutStep title="Votre bien est-il mitoyen ?">
      <div className="flex mt-2">
        <Check title="Oui" updateStyle={"mr-10"} />
        <Check title="Non" />
      </div>
    </LayoutStep>
  );
};

export default Adjoining;
