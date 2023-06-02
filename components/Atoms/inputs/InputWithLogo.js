import Image from "next/image";
import React, { useState, useEffect } from "react";
import TestFormAddress from "../../Molecules/form/TestFormAddress";
import { useDispatch, useSelector } from "react-redux";

const InputWithLogo = (props) => {
  // Récupération des propriétés passées en paramètres
  const placeholder = props.placeholder;
  const image = props.image;
  const marginY = props.marginY;
  const color = props.color;
  const componentIsForAdress = props.componentIsForAdress;
  const width = props.width;

  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  // Initialisation de l'état `value` à une chaîne vide, et définition de la fonction `setValue` pour mettre à jour cet état
  const [value, setValue] = useState("");

  // `valueCallback`, la fonction de retour de la valeur
  const valueCallback = props.valueCallback;

  // `callback`, la fonction de retour de la valeur
  const callback = props.callback;

  useEffect(() => {
    // Exécution de l'effet lorsque le composant est monté ou que la valeur change
    if (callback) {
      // Si `callback` existe
      if (value !== "") {
        // Si la valeur n'est pas vide
        callback(value); // Appel de la fonction `callback` avec la valeur en entrée
      } else callback(null); // Sinon appel de la fonction `callback` avec `null` en entrée
    }
  }, [value]);

  const [seed, setSeed] = useState(1);

  return (
    <div className={"relative sm:w-full h-12 max-w-[450px] " + marginY}>
      {componentIsForAdress && componentIsForAdress !== undefined ? (
        <TestFormAddress color={color} placeholder={placeholder} />
      ) : (
        // <AutocompleteAddress />
        <input
          className={
            color !== undefined
              ? "border min-w-[200px] text-base rounded-lg placeholder-gray-200::placeholder px-3 w-full h-12 text-ellipsis overflow-hidden whitespace-nowrap border-" +
                color
              : "border min-w-[200px] texte-base rounded-lg placeholder-gray-200::placeholder px-3 w-full h-12 text-ellipsis overflow-hidden whitespace-nowrap border-purple"
          }
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
      <div
        className={
          color !== undefined
            ? "absolute right-0 top-1/2 transform -translate-y-1/2 h-12 w-14 hidden sm:flex content-center items-center rounded-r-lg bg-" +
              color
            : "absolute right-0 top-1/2 transform -translate-y-1/2 h-12 w-14 hidden sm:flex content-center items-center rounded-r-lg bg-purple"
        }
      >
        <div className="mx-auto">
          <Image
            src={image}
            height={15}
            width={15}
            objectFit="contain"
            objectPosition="right"
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default InputWithLogo;
