import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { phoneRegex, emailRegex } from "../../../lib/regex/Regex";
import { updateUserInformations } from "../../../redux/action";
import ButtonPrimary from "../../Atoms/buttons/ButtonPrimary";
import InputText from "../../Atoms/inputs/InputText";
import Label from "../../Atoms/labels/Label";
import Text from "../../Atoms/texts/Text";
import TitlePrimary from "../../Atoms/titles/TitlePrimary";

// Définition du composant Inscription
const Inscription = (props) => {
  const dispatch = useDispatch();

  // Définition d'un état local pour le bouton de validation du formulaire
  const [disabled, setDisabled] = useState(true);

  // Définition des états locaux pour les champs du formulaire
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [mail, setMail] = useState(null);

  // Fonction de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUserInformations({
        firstName,
        lastName,
        phone,
        mail,
      })
    );
  };

  // Utilisation du hook useEffect pour mettre à jour l'état du bouton de validation en fonction des champs du formulaire
  useEffect(() => {
    if (
      firstName !== null &&
      lastName !== null &&
      phoneRegex.test(phone) &&
      emailRegex.test(mail)
    )
      setDisabled(false);
    else setDisabled(true);
  }, [firstName, lastName, phone, mail]);

  return (
    <form
      className="mx-auto w-10/12 sm:w-4/6 md:w-2/6 flex flex-col py-10 md:py-10 my-auto max-w-[450px] md:mb-0 mb-24"
      onSubmit={handleSubmit}
    >
      <TitlePrimary
        text="Dernière étape !"
        color="purple"
        updateWeight="font-extralight"
      />
      <Text color="purple" textSize="normal" marginX={`mt-3 hidden md:flex`}>
        Vous aurez ensuite accès à votre estimation dans votre espace.
      </Text>
      <div className="flex flex-col mb-3 mt-3">
        <Label text="Nom" nessessary={true} className="text-sm font-light" />
        <InputText
          valueCallback={firstName}
          callback={setFirstName}
          placeholder="Doe"
          type="text"
          required
        />
      </div>
      <div className="flex flex-col mb-3">
        <Label text="Prenom" nessessary={true} className="text-sm font-light" />
        <InputText
          valueCallback={lastName}
          callback={setLastName}
          placeholder="John"
          required
        />
      </div>
      <div className="flex flex-col mb-3">
        <Label
          text="Téléphone"
          nessessary={true}
          className="text-sm font-light"
        />
        <InputText
          valueCallback={phone}
          callback={setPhone}
          placeholder="0631420047"
          required
        />
      </div>
      <div className="flex flex-col mb-5">
        <Label text="Email" nessessary={true} className="text-sm font-light" />
        <InputText
          valueCallback={mail}
          callback={setMail}
          placeholder="exemple@exemple.com"
          required
        />
      </div>
      <ButtonPrimary
        text="Voir mon estimation"
        disabled={disabled}
        updateClass="mb-5"
        type="submit"
      />
      <Text color="purple" textSize="litleText">
        En soumettant ce formulaire, vous obtenez immédiatement accès à votre
        estimation et acceptez d&apos;être contacté pour votre projet par
        l&apos;un de nos conseillers partenaires.
      </Text>
    </form>
  );
};

export default Inscription;
