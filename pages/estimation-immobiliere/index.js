import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import LayoutEstimation from "../../components/Layout/LayoutEstimation";
import MultitCardsContainer from "../../components/Organisms/MultitCardsContainer";
import ProjectStepContainer from "../../components/Organisms/ProjectStepContainer";
import { updateStepOfProjectProgress } from "../../redux/action";
import { getAllEstimation } from "../api/homadata/Estimation";

const EstimationImmobiliere = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(updateStepOfProjectProgress(0));
  }, []);

  useEffect(() => {
    getAllEstimation()
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <LayoutEstimation>
      <div className="w-full flex mx-auto flex-col justify-center md:flex-row md:max-w-screen-2xl md:py-8">
        {/* Left Container */}
        <ProjectStepContainer />
        {/* Right Container */}
        <MultitCardsContainer />
      </div>
    </LayoutEstimation>
  );
};

export default EstimationImmobiliere;
