import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateStepOfProjectProgress } from "../../redux/action";
import Text from "../Atoms/texts/Text";

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

  return (
    <div
      className={`md:w-7/12 w-full flex flex-col items-center h-[calc((100vh-7rem))] md:h-[calc((100vh-12rem))] overflow-hidden relative`}
    >
      {index > 0 ? (
        <p
          onClick={() => handleReturnRef(index)}
          className="absolute top-10 left-0 text-purple font-normal hover:cursor-pointer"
        >
          &lsaquo; Retour
        </p>
      ) : null}
      <div
        id="cardContainer"
        className="w-full flex flex-col items-center h-[calc((100vh-7rem))] md:h-[calc((100vh-12rem))] overflow-hidden"
      >
        {array.map((item, idx) => {
          return (
            <div
              key={idx}
              className={
                "min-h-[60%] flex-1 py-20 w-full flex flex-col items-center justify-center bg-blue " +
                (idx === array.length - 1 ? "mb-96" : null)
              }
              ref={refs[idx]}
            >
              <input
                className="text-white bg-newGray w-2/12 text-center"
                value={item}
              />
              <button
                className={
                  "text-white bg-gray w-4/12 text-center " +
                  (idx === index ? null : "hidden")
                }
                onClick={(e) => handleRef(idx, e)}
              >
                {idx === array.length - 1 ? "Estimer " : "Suivant"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultitCardsContainer;
