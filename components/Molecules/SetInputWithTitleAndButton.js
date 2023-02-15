import React from "react";
import TitleSecondary from "../Atoms/titles/TitleSecondary";
import InputWithLogo from "../Atoms/inputs/InputWithLogo";
import ButtonPrimary from "../Atoms/buttons/ButtonPrimary";
import { useDispatch, useSelector } from "react-redux";
import { updateAddressCoordinate } from "../../redux/action";
import { useRouter } from "next/router";
import { getCoordinateOfAddress } from "../../lib/googleMap/googleMap";

// Composant pour l'affichage d'un titre, d'un champ de saisie d'adresse et d'un bouton d'envoi
const SetInputWithTitleAndButton = (props) => {
  // Récupération des propriétés passées en paramètres
  const bgColor = props.bgColor;
  const titleColor = props.titleColor;
  const buttonVersion = props.buttonVersion;
  const colorInput = props.colorInput;
  const textWithColor = props.textWithColor;
  const disabled = props.disabled;

  // Récupération du state global via le hook useSelector
  const state = useSelector((state) => state);

  // Initialisation du hook useDispatch pour dispatcher des actions
  const dispatch = useDispatch();

  // Initialisation du hook useRouter pour accéder à la navigation
  const router = useRouter();

  // Fonction pour récupérer les coordonnées d'une adresse via l'API Google Map
  const fetchAddressCoordinate = (address) => (dispatch) => {
    return getCoordinateOfAddress(address)
      .then((res) => {
        console.log("ok");
        // Mise à jour des coordonnées dans le state global via l'action updateAddressCoordinate
        dispatch(updateAddressCoordinate(res));
      })
      .catch((error) => console.log(error));
  };

  // Fonction déclenchée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    // Empêche le comportement par défaut de l'événement de soumission
    e.preventDefault();

    // Si l'adresse saisie n'est pas vide
    if (state.address !== "" && state.address !== undefined) {
      // Dispatch de la fonction pour récupérer les coordonnées de l'adresse
      dispatch(fetchAddressCoordinate(state.address)).then(() => {
        // Redirection vers la page "estimation-immobiliere"
        router.push(`/${"estimation-immobiliere"}`);
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={
        bgColor !== undefined
          ? "bg-" + bgColor + " py-5 px-7 my-4 rounded-lg md:w-10/12"
          : "bg-white py-5 px-7 my-4 rounded-lg md:w-10/12"
      }
    >
      <TitleSecondary
        text="Adresse du bien à estimer"
        textWithColor={textWithColor}
        color={titleColor !== undefined ? titleColor : "purple"}
      />
      <InputWithLogo
        componentIsForAdress={true}
        image={
          titleColor === "purple"
            ? "/Vectorlocalization.png"
            : "/vector/VectorlocalizationPurple.png"
        }
        marginY="my-4"
        placeholder="Saisir une adresse"
        color={colorInput !== undefined ? colorInput : "purple"}
      />
      <ButtonPrimary
        type="submit"
        disabled={disabled}
        text="Estimer"
        version={buttonVersion !== undefined ? buttonVersion : "primary"}
      />
    </form>
  );
};

export default SetInputWithTitleAndButton;
