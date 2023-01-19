import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PourcentageBar from "../Atoms/others/PourcentageBar";
import TitleSecondary from "../Atoms/titles/TitleSecondary";
import TitleTertiary from "../Atoms/titles/TitleTertiary";

const BottomStepContainer = () => {
  const state = useSelector((state) => state);

  const [pourcentage, setPourcentage] = useState(0);
  const [textValue, setTextValue] = useState("");

  const stepNumber = state.stepNumber;

  useEffect(() => {
    setPourcentage(
      Math.round((state.stepOfProjectProgress / stepNumber) * 100)
    );
  }, [state.stepOfProjectProgress]);

  useEffect(() => {
    if (state.stepOfProjectProgress === 1) {
      setTextValue(
        "Veuillez saisir votre adress pour commencer votre estimation"
      );
    } else if (
      state.stepOfProjectProgress > 1 &&
      state.stepOfProjectProgress < stepNumber
    ) {
      setTextValue("complété");
    } else if (state.stepOfProjectProgress === stepNumber) {
      setTextValue("Dernière étape !");
    }
  }, [state.stepOfProjectProgress]);

  return (
    <div className="h-24 w-full bg-newGray block md:hidden fixed bottom-0 px-5">
      <div className="h-full flex flex-col justify-center">
        <div className="flex mb-2">
          <TitleTertiary
            color="white"
            text={
              state.stepOfProjectProgress > 1 &&
              state.stepOfProjectProgress < stepNumber
                ? `${pourcentage}% `
                : null
            }
          />
          <TitleSecondary
            color="white"
            marginY={`ml-1 ${
              state.stepOfProjectProgress === 1 ? "text-center" : null
            }`}
            text={textValue}
          />
        </div>
        {state.stepOfProjectProgress > 1 &&
        state.stepOfProjectProgress < stepNumber ? (
          <PourcentageBar value={pourcentage} />
        ) : null}
      </div>
    </div>
  );
};

export default BottomStepContainer;
