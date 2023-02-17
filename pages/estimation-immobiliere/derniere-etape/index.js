import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutEstimation from "../../../components/Layout/LayoutEstimation";
import Inscription from "../../../components/Molecules/form/Inscription";
import { createId } from "../../../lib/utils/func";
import {
  handleLoader,
  updateId,
  updateStepOfProjectProgress,
} from "../../../redux/action";
import { setUserDoc } from "../../api/firebase/Doc";

const Index = () => {
  // Initialisation du hook useRouter pour gérer le routage de l'application
  const router = useRouter();

  // Initialisation du hook useDispatch pour gérer l'état global de l'application
  const dispatch = useDispatch();

  // Initialisation du hook useSelector pour accéder à l'état global de l'application
  const state = useSelector((state) => state);

  // Initialisation du hook useSelector pour accéder à l'état global des informations utilisateur
  const stateUserInformations = useSelector((state) => state.userInformations);

  // Initialisation du hook useSelector pour accéder à l'état global des éléments d'estimation
  const stateEstimationElements = useSelector(
    (state) => state.estimationElements
  );

  // Initialisation d'un objet Date pour stocker la date et l'heure de l'estimation
  const date = new Date();

  // Utilisation du hook useEffect pour exécuter une action au montage du composant
  useEffect(() => {
    // Si l'élément "accommodation" n'est pas défini, l'application est redirigée vers la page d'estimation immobilière
    if (state.estimationElements.accommodation === null) {
      router.push("/estimation-immobiliere");
    }
  }, []);

  // Définition d'un objet qui contient toutes les informations d'estimation, y compris l'identifiant unique généré, la date et l'heure, les informations utilisateur et les éléments d'estimation
  const allEstimaitonInformations = {
    id: createId,
    data: {
      date: date.toLocaleDateString("fr-FR"),
      heure: date.toLocaleTimeString("fr-FR"),
    },
    stateUserInformations,
    stateEstimationElements,
  };

  // Utilisation du hook useEffect pour exécuter une action lorsqu'un des éléments de l'objet stateUserInformations change
  useEffect(() => {
    // Si toutes les informations utilisateur sont remplies, la fonction udateEstimationInformationInReducer est appelée
    if (
      stateUserInformations.firstName !== null &&
      stateUserInformations.lastName !== null &&
      stateUserInformations.phone !== null &&
      stateUserInformations.mail !== null
    ) {
      dispatch(handleLoader(true));
      udateEstimationInformationInReducer();
    }
  }, [
    stateUserInformations.fistName,
    stateUserInformations.lastName,
    stateUserInformations.phone,
    stateUserInformations.mail,
  ]);

  // Définition d'une fonction pour mettre à jour les informations d'estimation dans le store Redux
  const udateEstimationInformationInReducer = () => {
    // Utilisation de la fonction setUserDoc de l'API Firebase pour enregistrer les données utilisateur
    setUserDoc(allEstimaitonInformations)
      .then(() => {
        // Mise à jour de l'identifiant d'estimation dans le store Redux
        dispatch(updateId(allEstimaitonInformations.id));
        // Redirection de l'utilisateur vers la page de résultat de l'estimation immobilière
        router.push("/estimation-immobiliere/resultat");
      })
      .catch((err) => {
        // Affichage d'un message d'erreur en cas d'échec de l'enregistrement
        alert("Une erreur est survenue, veuillez essayer à nouveau.");
        console.log(err);
        // Mise à jour de l'état global de l'application pour masquer le loader
        dispatch(handleLoader(false));
      });
  };

  // Utilisation du hook useEffect pour exécuter une action au montage du composant
  useEffect(() => {
    // Mise à jour de l'état global de l'application pour masquer le loader
    dispatch(handleLoader(false));
    // Mise à jour de l'état global de l'application pour indiquer que l'étape courante est la dernière étape
    dispatch(updateStepOfProjectProgress("lastStep"));
  }, []);

  // Rendu de la page d'estimation immobilière

  return (
    <LayoutEstimation>
      <div className="flex min-h-[calc(100vh-7rem)] items-center">
        <div className=" min-h-[calc(100vh-7rem)] 4xl:hidden w-3/6 relative md:flex hidden">
          <Image
            priority
            src="/buying/familly.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Inscription />
      </div>
    </LayoutEstimation>
  );
};

export default Index;
