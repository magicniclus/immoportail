import React, { useRef, useState } from "react";

const MultitCardsContainer = () => {
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

  const handleRef = (idx) => {
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
  };

  return (
    <div
      id="cardContainer"
      className={`md:w-7/12 w-full flex flex-col items-center h-[calc((100vh-7rem))] md:h-[calc((100vh-12rem))] overflow-hidden`}
    >
      {array.map((item, idx) => {
        return (
          <div
            key={idx}
            className={
              "min-h-[40%] flex-1 py-20 w-full flex flex-col items-center justify-center bg-blue " +
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
              onClick={() => handleRef(idx)}
            >
              {idx === array.length - 1 ? "Estimer " : "Suivant"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MultitCardsContainer;
