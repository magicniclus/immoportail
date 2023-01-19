import React from "react";
import LayoutStep from "../../Layout/LayoutStep";
import Check from "../cards/Check";

const Works = () => {
  return (
    <LayoutStep title="Y'a t'il des travaux à prévoir dans votre bien ?">
      <div className="flex mt-2">
        <Check title="Oui" updateStyle={"mr-10"} />
        <Check title="Non" />
      </div>
    </LayoutStep>
  );
};

export default Works;
