import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoordinateOfAddress } from "../../lib/googleMap/googleMap";
import {
  updateAddressCoordinate,
  updateStepOfProjectProgress,
} from "../../redux/action";
import ButtonPrimary from "../Atoms/buttons/ButtonPrimary";
import NumberOfParts from "../Molecules/steps/NumberOfParts";
import WhatAccommodationType from "../Molecules/steps/WhatAccommodationType";
import WhatAddress from "../Molecules/steps/WhatAddress";
import WhatIsASurface from "../Molecules/steps/WhatIsASurface";

const MultitCardsContainer = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

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

  useEffect(() => {
    if (state.address !== undefined && state.address !== "") {
      setIndex(1);
      const element = refs[1].current;
      if (element) {
        const parent = document.getElementById("cardContainer");
        parent.scrollTo({
          top: element.offsetTop - parent.offsetTop,
          left: 0,
          behavior: "smooth",
        });
      }
      dispatch(updateStepOfProjectProgress(1));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const updateAddress = async (idx) => {
    getCoordinateOfAddress(state.address)
      .then((res) => {
        dispatch(updateAddressCoordinate(res));
        handleRef(idx);
      })
      .catch((error) => console.log(error));
  };

  const handleFunction = (idx) => {
    switch (idx) {
      case 0:
        return <WhatAddress />;

      case 1:
        return <WhatAccommodationType />;

      case 2:
        return <WhatIsASurface />;

      case 3:
        return <NumberOfParts />;

      default:
        return <WhatAddress />;
    }
  };

  return (
    <div
      className={`min-h-[700px] md:top-0 top-10 md:w-7/12 w-10/12 flex flex-col items-center h-[calc((100vh-7rem))] md:h-[calc((100vh-12rem))] overflow-hidden relative pl-10 lg:pl-48`}
    >
      {index > 0 ? (
        <p
          onClick={() => handleReturnRef(index)}
          className="absolute top-0 left-5 md:left-10 text-gray-400 font-normal hover:cursor-pointer md:text-normal text-md"
        >
          &lsaquo; Retour
        </p>
      ) : null}
      <form
        onSubmit={handleSubmit}
        id="cardContainer"
        className="w-full mt-20 lg:mt-0 flex flex-col items-center min-h-[900px] h-[calc((100vh-7rem))] md:h-[calc((100vh-12rem))] overflow-hidden"
      >
        {array.map((item, idx) => {
          return (
            <div
              key={idx}
              className={
                "flex-1 w-full flex flex-col items-start justify-start " +
                (idx === array.length - 1
                  ? "min-h-[100%] pt-10"
                  : "mb-20 pt-10")
              }
              e
              ref={refs[idx]}
            >
              <div
                className={`flex flex-col justify-between w-full items-start ${
                  idx < index || idx > index ? "opacity-20" : null
                }`}
              >
                {handleFunction(idx)}
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
                    callback={(e) =>
                      idx > 0 ? handleRef(idx) : updateAddress(idx)
                    }
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
