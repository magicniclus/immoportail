import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateModal, updateUserInformations } from "../../../redux/action";
import ButtonPrimary from "../../Atoms/buttons/ButtonPrimary";
import InputText from "../../Atoms/inputs/InputText";
import Label from "../../Atoms/labels/Label";
import TitlePrimary from "../../Atoms/titles/TitlePrimary";

const Connexion = () => {
  const [mail, setMail] = useState(null);
  const [password, setPassword] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (mail !== null && password !== null) {
      setDisabled(false);
    } else setDisabled(true);
  }, [mail, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateModal({
        message: "Oups ! Cet email ou mot de passe n'existe pas...",
        show: true,
      })
    );
  };

  return (
    <div className="min-h-[calc((100vh-7rem))] flex items-center">
      <form
        className="mx-auto w-10/12 sm:w-4/6 md:w-2/6 flex flex-col py-10 md:py-10 my-auto max-w-[450px] border border-purple rounded-2xl p-10 shadow-lg"
        onSubmit={handleSubmit}
      >
        <TitlePrimary
          text="Se connecter"
          color="purple"
          updateWeight="font-extralight mb-5"
        />
        <div className="flex flex-col mb-5">
          <Label
            text="Email"
            nessessary={true}
            className="text-sm font-light"
          />
          <InputText
            valueCallback={mail}
            callback={setMail}
            placeholder="exemple@exemple.com"
            required
          />
        </div>
        <div className="flex flex-col mb-3 mt-3">
          <Label
            text="Mot de passe"
            nessessary={true}
            className="text-sm font-light"
          />
          <InputText
            valueCallback={password}
            callback={setPassword}
            placeholder="Mot de passe"
            type="text"
            required
          />
        </div>
        <ButtonPrimary
          text="connection"
          disabled={disabled}
          updateClass="mb-5"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Connexion;
