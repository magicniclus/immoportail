import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Text from "../Atoms/texts/Text";
import PhoneWithLogo from "../Molecules/PhoneWithLogo";

const ContactBottomStepContainer = () => {
  const state = useSelector((state) => state);
  const [displayElement, setDisplayElement] = useState(false);

  useEffect(() => {
    setDisplayElement(false);
    if (state.stepOfProjectProgress === "resultat") {
      setDisplayElement(true);
    } else {
      setDisplayElement(false);
    }
  }, [state.stepOfProjectProgress]);

  return (
    <div
      className={` w-full bg-gray-300 md:hidden fixed bottom-0 px-5 py-4 flex justify-between items-center ${
        displayElement ? null : "hidden"
      }`}
    >
      <div className="h-12 w-12 overflow-hidden rounded-full relative mr-3">
        <Image src="/femme.jpg" alt="femme" layout="fill" objectFit="cover" />
      </div>
      <div className="w-5/6">
        <Text color="purple" textSize="bigLight">
          Pour affiner ce résultat et vous accompagner dans votre projet, vous
          allez être appeler pas Nicolas dans les 24/48h. Pour le contacter
          votre conseiller:
        </Text>
        <PhoneWithLogo phoneNumber="+33631420045" />
      </div>
    </div>
  );
};

export default ContactBottomStepContainer;
