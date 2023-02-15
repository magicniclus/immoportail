import { useRouter } from "next/router";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoordinateOfAddress } from "../../lib/googleMap/googleMap";
import {
  updateAddressCoordinate,
  updateStepNumber,
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

  // État local pour gérer l'index actuel de la carte
  const [card, setCard] = useState(state.address !== "" ? 1 : 0);

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

  // Fonction pour activer/désactiver le bouton de validation de l'estimation
  useEffect(() => {
    // Récupération des éléments d'estimation et du numéro d'étape actuelle dans le processus de progression du projet
    const estimation = state.estimationElements;
    const stepNumber = state.stepOfProjectProgress;

    // Initialisation de la valeur disabled à true
    setDisabled(true);

    // Vérification de l'étape actuelle dans le processus de progression du projet et définition de la valeur de disabled
    switch (stepNumber) {
      case 0:
        state.address !== "" ? setDisabled(false) : setDisabled(true);
        break;

      case 1:
        estimation.accommodation !== null
          ? setDisabled(false)
          : setDisabled(true);
        break;

      case 2:
        estimation.surface !== null ? setDisabled(false) : setDisabled(true);
        break;

      case 3:
        estimation.level !== null ? setDisabled(false) : setDisabled(true);
        break;

      case 4:
        estimation.partNumber !== null ? setDisabled(false) : setDisabled(true);
        break;

      case 5:
        estimation.years !== null ? setDisabled(false) : setDisabled(true);
        break;

      case 6:
        estimation.works !== null ? setDisabled(false) : setDisabled(true);
        break;

      case 7:
        estimation.livingArea !== null && estimation.landArea !== null
          ? setDisabled(false)
          : setDisabled(true);
        break;

      case 9:
        estimation.exposure !== null && estimation.view !== null
          ? setDisabled(false)
          : setDisabled(true);
        break;

      case 10:
        estimation.standing !== null && estimation.secteur !== null
          ? setDisabled(false)
          : setDisabled(true);
        break;

      case 11:
        estimation.adjoining !== null ? setDisabled(false) : setDisabled(true);
        break;

      case 12:
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

  useEffect(() => {
    dispatch(updateStepOfProjectProgress(card));
  }, []);

  const handleCard = (e) => {
    if (card < 12) {
      setCard(card + 1);
      dispatch(updateStepOfProjectProgress(card + 1));
    }
  };

  const handleReturnRef = () => {
    setCard(card - 1);
    dispatch(updateStepOfProjectProgress(card - 1));
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
      className={`md:top-0 top-5 md:w-7/12 w-11/12 xs:w-10/12 flex flex-col items-center relative pl-5 sm:pl-20 md:pl-24 lg:pl-48 ${
        card === 8 || 9 ? "mb-36" : null
      }`}
    >
      {card > 0 ? (
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
        className="w-full mt-20 xs:mt-20 lg:mt-32 flex flex-col items-center"
      >
        {handleFunction(card)}
        <div className="w-full flex justify-start">
          <ButtonPrimary
            disabled={disabled}
            text={card < 12 ? "Suivant" : "Estimer"}
            type={card < 12 ? "button" : "submit"}
            callback={handleCard}
          />
        </div>
      </form>
    </div>
  );
};

export default MultitCardsContainer;
