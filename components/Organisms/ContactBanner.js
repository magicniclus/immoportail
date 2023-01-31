import React from "react";
import ContactForm from "../Molecules/form/ContactForm";
import Text from "../../components/Atoms/texts/Text";
import TitlePrimary from "../../components/Atoms/titles/TitlePrimary";

const ContactBanner = () => {
  return (
    <div className="mx-auto w-10/12 sm:w-4/6 md:w-2/6 flex flex-col py-10 md:py-10 my-auto max-w-[450px]">
      <TitlePrimary
        text="Nous-contacter :"
        color="purple"
        updateWeight="font-light"
      />
      <Text marginX="mt-5" color="purple" textSize="litleText">
        Suivant l'objet de la demande, un conseiller ou un operateur vous
        recontactera sous 24/48h.
      </Text>
      <ContactForm />
    </div>
  );
};

export default ContactBanner;
