import React from "react";
import TitleSecondary from "../Atoms/titles/TitleSecondary";

const LayoutStep = (props) => {
  const title = props.title;
  return (
    <div className="w-full mb-8 flex flex-col">
      <TitleSecondary text={title} color="purple" />
      <div className="flex mt-5 flex-col">{props.children}</div>
    </div>
  );
};

export default LayoutStep;
