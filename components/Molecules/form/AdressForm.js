import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateAddress } from "../../../redux/action";
import { getAddressPrediction } from "../../../lib/googleMap/googleMap";

const AdressForm = (props) => {
  const placeholder = props.placeholder;
  const color = props.color;
  const [source, setSource] = useState(axios.CancelToken.source());

  const API_KEY = "AIzaSyBhFIY1nvseuxoi4xA0HPiM-PvwNQdx9kI";

  const router = useRouter();
  const currentUrl = router.asPath;

  const state = useSelector((state) => state);
  // Déclarez un état local pour stocker l'adresse saisie par l'utilisateur
  const [address, setAddress] = useState(
    currentUrl === "/estimation-immobiliere" ? state.address : ""
  );
  // Déclarez un état local pour stocker les suggestions d'adresse
  const [suggestions, setSuggestions] = useState([]);

  const [suggestionsAreOpen, setSuggestionsAreOpen] = useState(false);

  const dispatch = useDispatch();

  const [isClicked, setIsClicked] = useState(
    currentUrl === "/estimation-immobiliere" ? true : false
  );

  // Utilisez useEffect pour récupérer les suggestions d'adresse à mesure que l'utilisateur saisit l'adresse
  useEffect(() => {
    setSuggestionsAreOpen(false);
    if (address.trim() === "") {
      setSuggestions([]);
      setSource(axios.CancelToken.source());
      dispatch(updateAddress(""));
      return;
    }

    // let baseUrl = "http://localhost:3005";
    // if (process.env.PORT) {
    // let baseUrl = `https://avenue-immo.com:${process.env.PORT}`;
    // }

    if (address.length < 3) {
      return;
    } else {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${address}&key=${API_KEY}&components=country:fr`
        )
        .then((res) => {
          setSuggestions(res.data.predictions);
        })
        .catch((error) => {
          console.error(error);
          setSuggestions("Erreur, veuillez essayer à nouveau");
        });
    }
  }, [address]);

  const handleAddress = (description) => {
    source.cancel(`Cancel request for ${address}`);
    setSuggestions([]);
    setAddress(description);
    setSource(axios.CancelToken.source());
    dispatch(updateAddress(description));
    // dispatch(updateStepOfProjectProgress(1));
    setIsClicked(true);
  };

  useEffect(() => {
    if (suggestions.length > 0) setSuggestionsAreOpen(true);
    else setSuggestionsAreOpen(false);
  }, [suggestions]);

  return (
    <div>
      {/* Utilisez un champ de saisie pour saisir l'adresse */}
      <input
        type="text"
        value={address}
        onChange={(e) => (!isClicked ? setAddress(e.target.value) : null)}
        onClick={() => setIsClicked(false)}
        className={
          color !== undefined
            ? "border text-purple rounded-lg placeholder:text-slate-400 px-3 w-full h-12 border-" +
              color
            : "border text-purple rounded-lg placeholder:text-slate-400 px-3 w-full h-12 border-purple"
        }
        placeholder={placeholder !== undefined ? placeholder : null}
      />
      {/* Affichez les suggestions d'adresse dans une liste */}
      {!isClicked && suggestionsAreOpen ? (
        <ul className={"bg-white py-1"}>
          {Array.isArray(suggestions) &&
            suggestions.map((suggestion, idx) => (
              <li
                key={idx}
                onClick={() => handleAddress(suggestion.description)}
                className="text-purple cursor-pointer mx-3 my-3 hover:font-bold z-50"
              >
                {suggestion.description}
              </li>
            ))}
        </ul>
      ) : null}
    </div>
  );
};

export default AdressForm;
