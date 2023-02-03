import React from "react";
import Text from "../../components/Atoms/texts/Text";
import TitlePrimary from "../../components/Atoms/titles/TitlePrimary";
import UnsubscribeForm from "../Molecules/form/UnsubscribeForm";

const UnsubscribeBanner = () => {
  return (
    <div className="mx-auto w-10/12 sm:w-4/6 md:w-2/6 flex flex-col py-10 md:py-10 my-auto max-w-[450px]">
      <TitlePrimary
        text="Nous sommes désolé de vous voir partir"
        color="purple"
        updateWeight="font-light"
      />
      <Text marginX="mt-5" color="purple" textSize="litleText">
        Comme Le sujet de la vie privé est important autant pour nos clients que
        pour nous, une fois désinscrit, l&apos;ensemble des données vous
        concernant seront déffinitivement supprimés. Noté que pour que vos
        données soient supprimés, vous devez saisir les même coordonnées que
        celles que vous avez utilisé lors de votre inscription.
      </Text>
      <UnsubscribeForm />
    </div>
  );
};

export default UnsubscribeBanner;
