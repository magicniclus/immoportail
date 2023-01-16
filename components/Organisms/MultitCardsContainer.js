import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateStepOfProjectProgress } from "../../redux/action";
import ButtonPrimary from "../Atoms/buttons/ButtonPrimary";
import Text from "../Atoms/texts/Text";
import TitlePrimary from "../Atoms/titles/TitlePrimary";
import WhatAddress from "../Molecules/steps/WhatAddress";

const MultitCardsContainer = () => {
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);

  const array = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "height",
    "nine",
    "ten",
    "eleven",
    "twelve",
  ];

  const refs = Array(array.length)
    .fill()
    .map(() => useRef());

  const handleRef = (idx, e) => {
    if (index < array.length - 1) {
      setIndex(idx + 1);
      const element = refs[idx + 1].current;
      if (element) {
        const parent = document.getElementById("cardContainer");
        parent.scrollTo({
          top: element.offsetTop - parent.offsetTop,
          left: 0,
          behavior: "smooth",
        });
      }
      dispatch(updateStepOfProjectProgress(idx + 2));
    } else e.preventDefault();
  };

  const handleReturnRef = (idx) => {
    setIndex(idx - 1);
    const element = refs[idx - 1].current;
    if (element) {
      const parent = document.getElementById("cardContainer");
      parent.scrollTo({
        top: element.offsetTop - parent.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }
    dispatch(updateStepOfProjectProgress(idx));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`min-h-[900pcx] md:w-7/12 w-10/12 flex flex-col items-center h-[calc((100vh-7rem))] md:h-[calc((100vh-12rem))] overflow-hidden relative pl-10 lg:pl-48`}
    >
      {index > 0 ? (
        <p
          onClick={() => handleReturnRef(index)}
          className="absolute top-10 left-5 md:left-10 text-purple font-normal hover:cursor-pointer md:text-normal text-xs"
        >
          &lsaquo; Retour
        </p>
      ) : null}
      <form
        onSubmit={handleSubmit}
        id="cardContainer"
        className="w-full flex flex-col items-center h-[calc((100vh-7rem))] md:h-[calc((100vh-12rem))] overflow-hidden"
      >
        {array.map((item, idx) => {
          return (
            <div
              key={idx}
              className={
                "min-h-[40%] flex-1 py-32 w-full flex flex-col items-start justify-start " +
                (idx === array.length - 1 ? "mb-96" : null)
              }
              ref={refs[idx]}
            >
              <div
                className={`flex flex-col justify-between h-2/6 w-full sm:items-start items-end ${
                  idx < index || idx > index ? "opacity-20" : null
                }`}
              >
                <WhatAddress />
                {idx === array.length - 1 ? (
                  <ButtonPrimary
                    text="Estimer"
                    updateClass={idx === index ? null : "hidden"}
                    callback={handleSubmit}
                    type="submit"
                  />
                ) : (
                  <ButtonPrimary
                    text="Suivant"
                    type="button"
                    updateClass={idx === index ? null : "hidden"}
                    callback={(e) => handleRef(idx)}
                  />
                )}
              </div>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default MultitCardsContainer;
