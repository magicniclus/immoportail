import React, { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { updateAddress, updateAddressCoordinate } from "../../../redux/action";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

export default function TestFormAddress(props) {
  const placeholder = props.placeholder;
  const color = props.color;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBhFIY1nvseuxoi4xA0HPiM-PvwNQdx9kI",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map placeholder={placeholder} color={color} />;
}

const Map = (props) => {
  const placeholder = props.placeholder;
  const color = props.color;

  const router = useRouter();
  const currentUrl = router.asPath;

  const dispatch = useDispatch();

  const [selected, setSelected] = useState(null);

  const state = useSelector((state) => state);

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  useEffect(() => {
    console.log(ready);
  }, [ready]);

  useEffect(() => {
    currentUrl === "/estimation-immobiliere" ? setValue(state.address) : "";
  }, [state.address, currentUrl]);

  const handleSelect = async (description) => {
    setValue(description, false);
    clearSuggestions();
    dispatch(updateAddress(description));
    const results = await getGeocode({ address: description });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
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
        className={
          color !== undefined
            ? "border text-purple rounded-lg placeholder:text-slate-400 px-3 w-full h-12 border-" +
              color
            : "border text-purple rounded-lg placeholder:text-slate-400 px-3 w-full h-12 border-purple"
        }
        placeholder={placeholder !== undefined ? placeholder : null}
      />
      <div>
        <ul className={"bg-white py-1"}>
          {status === "OK" &&
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
