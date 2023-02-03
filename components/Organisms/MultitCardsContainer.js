import { useRouter } from "next/router";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoordinateOfAddress } from "../../lib/googleMap/googleMap";
import {
  updateAddressCoordinate,
  updateStepOfProjectProgress,
} from "../../redux/action";
import ButtonPrimary from "../Atoms/buttons/ButtonPrimary";
import Adjoining from "../Molecules/steps/Adjoining";
import Exposure from "../Molecules/steps/Exposure";
import ImportantSurfaces from "../Molecules/steps/ImportantSurfaces";
import Level from "../Molecules/steps/Level";
import NumberOfParts from "../Molecules/steps/NumberOfParts";
import OutdoorSpace from "../Molecules/steps/OutdoorSpace";
import Profil from "../Molecules/steps/Profil";
import Standing from "../Molecules/steps/Standing";
import WhatAccommodationType from "../Molecules/steps/WhatAccommodationType";
import WhatAddress from "../Molecules/steps/WhatAddress";
import WhatIsASurface from "../Molecules/steps/WhatIsASurface";
import Works from "../Molecules/steps/Works";
import YearOfContruction from "../Molecules/steps/YearOfContruction";

const MultitCardsContainer = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  const [index, setIndex] = useState(0);
  const [disabled, setDisabled] = useState(true);

  const router = useRouter();

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
    "thirteen",
  ];

  const refs = Array(array.length)
    .fill()
    .map(() => React.createRef());

  const handleRef = (idx) => {
    setTimeout(() => {
      dispatch(updateStepOfProjectProgress(idx + 2));
    }, 50);
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
      dispatch(updateStepOfProjectProgress(2));
    }
  }, []);

  const handleSubmit = (e) => {
    const estimation = state.estimationElements;
    e.preventDefault();
    if (
      estimation.accommodation !== null &&
      estimation.years !== null &&
      estimation.surface !== null &&
      estimation.level !== null &&
      estimation.partNumber !== null &&
      estimation.works !== null &&
      estimation.livingArea !== null &&
      estimation.landArea !== null &&
      estimation.exposure !== null &&
      estimation.view !== null &&
      estimation.standing !== null &&
      estimation.secteur !== null &&
      estimation.adjoining !== null &&
      estimation.contract !== null &&
      estimation.when !== null
    ) {
      router.push("/estimation-immobiliere/analyse");
    }
  };

  const updateAddress = async (idx) => {
    getCoordinateOfAddress(state.address)
      .then((res) => {
        dispatch(updateAddressCoordinate(res));
        handleRef(idx);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const estimation = state.estimationElements;
    const stepNumber = state.stepOfProjectProgress;
    setDisabled(true);
    switch (stepNumber) {
      case 1:
        state.address !== "" ? setDisabled(false) : setDisabled(true);
        break;

      case 2:
        estimation.accommodation !== null
          ? setDisabled(false)
          : setDisabled(true);
        break;

      case 3:
        estimation.surface !== null ? setDisabled(false) : setDisabled(true);
        break;

      case 4:
        estimation.level !== null ? setDisabled(false) : setDisabled(true);
        break;

      case 5:
        estimation.partNumber !== null ? setDisabled(false) : setDisabled(true);
        break;

      case 6:
        estimation.years !== null ? setDisabled(false) : setDisabled(true);
        break;

      case 7:
        estimation.works !== null ? setDisabled(false) : setDisabled(true);
        break;

      case 8:
        estimation.livingArea !== null && estimation.landArea !== null
          ? setDisabled(false)
          : setDisabled(true);
        break;

      case 10:
        estimation.exposure !== null && estimation.view !== null
          ? setDisabled(false)
          : setDisabled(true);
        break;

      case 11:
        estimation.standing !== null && estimation.secteur !== null
          ? setDisabled(false)
          : setDisabled(true);
        break;

      case 12:
        estimation.adjoining !== null ? setDisabled(false) : setDisabled(true);
        break;

      case 13:
        estimation.contract !== null && estimation.when !== null
          ? setDisabled(false)
          : setDisabled(true);
        break;

      default:
        setDisabled(false);
        break;
    }
  }, [state.address, state.estimationElements, state.stepOfProjectProgress]);

  const handleFunction = (idx) => {
    switch (idx) {
      case 0:
        return <WhatAddress />;

      case 1:
        return <WhatAccommodationType />;

      case 2:
        return <WhatIsASurface />;

      case 3:
        return <Level />;

      case 4:
        return <NumberOfParts />;

      case 5:
        return <YearOfContruction />;

      case 6:
        return <Works />;

      case 7:
        return <ImportantSurfaces />;

      case 8:
        return <OutdoorSpace />;

      case 9:
        return <Exposure />;

      case 10:
        return <Standing />;

      case 11:
        return <Adjoining />;

      case 12:
        return <Profil />;

      default:
        return <WhatAddress />;
    }
  };

  const handleTab = useCallback((event) => {
    if (event.key === "Tab") {
      event.preventDefault();
    }
  }, []);

  return (
    <div
      onKeyDown={handleTab}
      className={`min-h-[750px] md:top-0 top-10 md:w-7/12 w-11/12 xs:w-10/12 flex flex-col items-center h-[calc((100vh-7rem))] md:h-[calc((100vh-12rem))] overflow-hidden relative pl-5 sm:pl-20 md:pl-24 lg:pl-48`}
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
        className="w-full mt-12 xs:mt-20 lg:mt-0 flex flex-col items-center min-h-[900px] h-[calc((100vh-7rem))] md:h-[calc((100vh-12rem))] overflow-hidden"
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
                    disabled={disabled}
                    text="Estimer"
                    updateClass={idx === index ? null : "hidden"}
                    callback={handleSubmit}
                    type="submit"
                  />
                ) : (
                  <ButtonPrimary
                    disabled={disabled}
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
