import React, { useEffect, useState } from "react";
import ButtonPrimary from "../../Atoms/buttons/ButtonPrimary";
import InputText from "../../Atoms/inputs/InputText";
import Label from "../../Atoms/labels/Label";
import { useDispatch } from "react-redux";
import { setUnsubcribeUserDoc } from "../../../pages/api/firebase/Doc";
import { updateModal } from "../../../redux/action";
import { useRouter } from "next/router";
import { createId } from "../../../lib/utils/func";

export const UnsubscribeForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [disabled, setDisabled] = useState(true);

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [mail, setMail] = useState(null);

  const id = createId; //TODO: à tester

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName !== null &&
      lastName !== null &&
      phone !== null &&
      mail !== null
    ) {
      handleUnsubscribe();
    }
  };

  useEffect(() => {
    if (
      firstName !== null &&
      lastName !== null &&
      phone !== null &&
      mail !== null
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [firstName, lastName, phone, mail]);

  const handleUnsubscribe = () => {
    setUnsubcribeUserDoc({
      id,
      firstName,
      lastName,
      phone,
      mail,
    })
      .then((success) => {
        console.log(success);
        dispatch(
          updateModal({
            message:
              "Vous êtes bien désinscrit, nous esperons vous revoir bientôt !",
            show: true,
          })
        );
        setTimeout(() => {
          router.push("/");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        dispatch(
          updateModal({
            message: "Une erreur est survenue, veuillez essayer à nouveau.",
            show: true,
          })
        );
      });
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
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
    </form>
  );
};

export default UnsubscribeForm;
