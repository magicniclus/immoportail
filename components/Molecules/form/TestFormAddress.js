import React, { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  updateAddress,
  updateAddressCoordinate,
  updateFormAddressStatus,
  updateIsReady,
} from "../../../redux/action";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

// Component de form pour entrer une adresse
export default function TestFormAddress(props) {
  const router = useRouter();
  // Props qui sont passées depuis le parent
  const placeholder = props.placeholder;
  const color = props.color;
  const key = props.key;

  // Chargement de la bibliothèque Google Places API
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBhFIY1nvseuxoi4xA0HPiM-PvwNQdx9kI",
    libraries: ["places"],
  });

  const { ready } = usePlacesAutocomplete();

  // Si la bibliothèque n'est pas chargée, retourner un message de chargement
  if (!isLoaded)
    return (
      <div
        className={
          color !== undefined
            ? "border flex items-center text-purple rounded-lg placeholder:text-slate-400 px-3 w-full h-12 border-" +
              color
            : "border flex items-center text-purple rounded-lg placeholder:text-slate-400 px-3 w-full h-12 border-purple"
        }
      >
        Loading...
      </div>
    );

  // Sinon retourner le composant Map
  return <Map placeholder={placeholder} color={color} />;
}

const Map = (props) => {
  // Props qui sont passées depuis le parentx
  const placeholder = props.placeholder;
  const color = props.color;

  // Utilisation du hook useRouter pour récupérer l'URL courante
  const router = useRouter();
  const currentUrl = router.asPath;

  // Utilisation du hook useDispatch pour dispatch une action
  const dispatch = useDispatch();

  // État pour stocker la localisation sélectionnée
  const [selected, setSelected] = useState(null);

  // Récupération du state global via le hook useSelector
  const state = useSelector((state) => state);

  // Hook pour utiliser l'autocompletion de Google Places
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 46.227638, lng: () => 2.213749 }, // Les coordonnées du centre de la France
      radius: 1000000, // La distance maximale à laquelle chercher des résultats (en mètres)
      componentRestrictions: { country: "fr" }, // Seulement les résultats en France
    },
  });

  useEffect(() => {
    let timeoutId = null;

    if (!ready) {
      timeoutId = setTimeout(() => {
        dispatch(updateIsReady(true));
      }, 2000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [ready]);

  // Fonction pour sélectionner une adresse et obtenir ses coordonnées
  const handleSelect = async (description) => {
    setValue(description, false);
    dispatch(updateAddress(description));
    const results = await getGeocode({ address: description });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
    clearSuggestions();
  };

  useEffect(() => {
    selected !== null ? dispatch(updateAddressCoordinate(selected)) : null;
  }, [selected]);

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        // onClick={handleSelected}
        className={
          color !== undefined
            ? "border text-purple rounded-lg placeholder:text-slate-400 px-3 w-full h-12 border-" +
              color
            : "border text-purple rounded-lg placeholder:text-slate-400 px-3 w-full h-12 border-purple"
        }
        placeholder={placeholder !== undefined ? placeholder : null}
      />
      <div>
        <ul className={"bg-white"}>
          {data &&
            data.length > 0 &&
            status === "OK" &&
            data.map(({ place_id, description }) => (
              <li
                key={place_id}
                onClick={() => handleSelect(description)}
                className="text-purple cursor-pointer mx-3 my-3 hover:font-bold z-50"
              >
                {description}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
