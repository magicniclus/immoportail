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
import axios from "axios";

const MultitCardsContainer = () => {
  // Clé API
  const API_KEY = "AIzaSyBhFIY1nvseuxoi4xA0HPiM-PvwNQdx9kI";

  // Dispatch pour utiliser les actions de Redux
  const dispatch = useDispatch();

  // État de Redux
  const state = useSelector((state) => state);

  // État local pour gérer l'index actuel de la carte
  const [index, setIndex] = useState(0);

  // État local pour gérer l'état de désactivation du bouton "suivant"
  const [disabled, setDisabled] = useState(true);

  // Utilisation du Router pour naviguer entre les pages
  const router = useRouter();

  // Tableau de noms d'étapes
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

  // Création de refs pour chaque étape
  const refs = Array(array.length)
    .fill()
    .map(() => React.createRef());

  // Fonction pour faire défiler vers l'étape suivante
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

  // Fonction pour faire défiler vers l'étape précédente
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

  // Effet d'utilisation pour faire défiler automatiquement à l'étape suivante lorsque l'adresse est définie
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

  // Fonction gérant la soumission du formulaire d'estimation immobilière
  const handleSubmit = (e) => {
    const estimation = state.estimationElements;
    e.preventDefault();

    // Vérification que tous les champs ont été remplis
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
      // Redirection vers la page d'analyse de l'estimation immobilière
      router.push("/estimation-immobiliere/analyse");
    }
  };

  // Mise à jour de l'adresse
  const updateAddress = async (idx) => {
    // Récupération des coordonnées de l'adresse
    getCoordinateOfAddress(state.address)
      .then((res) => {
        // Mise à jour des coordonnées de l'adresse dans le state
        dispatch(updateAddressCoordinate(res));
        // Appel de la fonction handleRef
        handleRef(idx);
      })
      .catch((error) => console.log(error));

    // Appel de la fonction handleRef
    handleRef(idx);
  };

  // Fonction pour activer/désactiver le bouton de validation de l'estimation
  useEffect(() => {
    // Récupération des éléments d'estimation et du numéro d'étape actuelle dans le processus de progression du projet
    const estimation = state.estimationElements;
    const stepNumber = state.stepOfProjectProgress;

    // Initialisation de la valeur disabled à true
    setDisabled(true);

    // Vérification de l'étape actuelle dans le processus de progression du projet et définition de la valeur de disabled
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

  // Fonction qui gère l'affichage en fonction de l'index donné
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

  // Gère les événements de touche "Tab" pour éviter le comportement par défaut
  const handleTab = useCallback((event) => {
    // Vérifie si la touche appuyée est la touche "Tab"
    if (event.key === "Tab") {
      // Annule le comportement par défaut lorsque la touche "Tab" est appuyée
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
