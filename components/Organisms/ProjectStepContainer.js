import React from "react";
import TitleThree from "../Atoms/titles/TitleThree";
import GetAdressInMap from "../Molecules/GetAdressInMap";
import GetProjectProgress from "../Molecules/GetProjectProgress";

const ProjectStepContainer = () => {
  return (
    <div className=" w-3/12 h-full max-h-[900px] md:flex hidden bg-grayLight flex-col lg:items-start justify-between pl-5 py-10 flex-nowrap">
      <TitleThree
        text="Caractéristiques de "
        textWithColor="votre bien"
        color="purple"
      />
      <GetProjectProgress />
      <GetAdressInMap />
    </div>
  );
};

export default ProjectStepContainer;
