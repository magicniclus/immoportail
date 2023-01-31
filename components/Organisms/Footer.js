import Link from "next/link";
import React, { useState, useEffect } from "react";
import { emailRegex } from "../../lib/regex/Regex";
import { useDispatch } from "react-redux";
import Logo from "../Atoms/logos/Logo";
import TitleSecondary from "../Atoms/titles/TitleSecondary";
import InputWithLogo from "../Atoms/inputs/InputWithLogo";
import ButtonPrimary from "../Atoms/buttons/ButtonPrimary";
import { updateModal } from "../../redux/action";
import { setNewsLettersUserDoc } from "../../pages/api/firebase/Doc";
import { createId } from "../../lib/utils/func";

const Footer = () => {
  const [disabled, setDisabled] = useState(true);
  const [mail, setMail] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (emailRegex.test(mail)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [mail]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(createId);
    if (mail !== null) {
      setNewsLettersUserDoc({ id: createId, mail: mail })
        .then((success) => {
          dispatch(
            updateModal({
              message:
                "Nous sommes ravis de vous compter parmis nos membres, bienvenue !",
              show: true,
            })
          );
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
    }
  };

  return (
    <footer className="w-full py-20 px-5 lg:px-40 lg:flex lg:justify-between bg-gray-300 lg:flex-row flex-col drop-shadow-md ">
      <div className=" max-w-screen-2xl flex justify-between w-full lg:flex lg:justify-between lg:flex-row flex-col mx-auto">
        <div className="lg:w-4/12 w-8/12">
          <ul>
            <li className="mb-3 text-purple text-base md:text-xl">
              <Link href="/connexion">Mon espace</Link>
            </li>
            <li className="mb-3 text-purple text-base md:text-xl">
              <Link href="/connexion">Espace partenaire</Link>
            </li>
            <li className="mb-3 text-purple text-base md:text-xl">
              <Link href="/nous-contacter">Nous contacter</Link>
            </li>
            <li className="mb-3 text-purple text-base md:text-xl">
              <Link href="/politique-de-confidentialite">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
          <p className="text-purple text-base md:text-xl">
            © immoportail.fr 2022
          </p>
        </div>
        <form
          className="flex flex-col justify-between items-start lg:items-end lg:w-4/12 w-8/12 lg:h-auto h-64 my-7 lg:m-0"
          onSubmit={handleSubmit}
        >
          <Logo />
          <TitleSecondary
            text="S’inscrire à notre news letters"
            color="purple"
            marginY="text-end font-light"
          />
          <InputWithLogo
            placeholder="Saisir un email"
            image="/vector/Vectorletter.png"
            color="white"
            valueCallback={mail}
            callback={setMail}
          />
          <ButtonPrimary
            text="S'inscrire"
            version="primary"
            disabled={disabled}
            type="submit"
          />
        </form>
      </div>
    </footer>
  );
};

export default Footer;
