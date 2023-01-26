import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { phoneRegex, emailRegex } from "../../../lib/regex/Regex";
import { updateUserInformations } from "../../../redux/action";
import ButtonPrimary from "../../Atoms/buttons/ButtonPrimary";
import InputText from "../../Atoms/inputs/InputText";
import Label from "../../Atoms/labels/Label";
import Text from "../../Atoms/texts/Text";
import TitlePrimary from "../../Atoms/titles/TitlePrimary";

const Inscription = (props) => {
  const dispatch = useDispatch();

  const [disabled, setDisabled] = useState(true);

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [mail, setMail] = useState(null);

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
      className="mx-auto w-10/12 sm:w-4/6 md:w-2/6 flex flex-col py-10 md:py-0 md:mb-0 mb-20 mt-0 md:mt-10 max-w-[450px]"
      onSubmit={handleSubmit}
    >
      <TitlePrimary text="Dernière étape !" color="purple" />
      <Text
        children="Vous aurez ensuite accès à votre estimation dans votre espace."
        color="purple"
        textSize="normal"
        marginX={`mt-3 hidden md:flex`}
      />
      <div className="flex flex-col mb-5 mt-7">
        <Label text="Nom" nessessary={true} />
        <InputText
          valueCallback={firstName}
          callback={setFirstName}
          placeholder="Doe"
          type="text"
          required
        />
      </div>
      <div className="flex flex-col mb-5">
        <Label text="Prenom" nessessary={true} />
        <InputText
          valueCallback={lastName}
          callback={setLastName}
          placeholder="John"
          required
        />
      </div>
      <div className="flex flex-col mb-5">
        <Label text="Téléphone" nessessary={true} />
        <InputText
          valueCallback={phone}
          callback={setPhone}
          placeholder="0631420047"
          required
        />
      </div>
      <div className="flex flex-col mb-7">
        <Label text="Email" nessessary={true} />
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
      <Text
        color="purple"
        textSize="litleText"
        children="En validant ce formulaire vous avez directement accès à votre estimation et vous acceptez d’être recontacter dans le cadre de votre projet par un de nos conseillers partenaire."
      />
    </form>
  );
};

export default Inscription;
