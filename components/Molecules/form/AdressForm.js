import { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { updateAddress } from "../../../redux/action";
import { useRouter } from "next/router";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const AdressForm = (props) => {
  const placeholder = props.placeholder;
  const color = props.color;
  const router = useRouter();
  const currentUrl = router.asPath;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBhFIY1nvseuxoi4xA0HPiM-PvwNQdx9kI",
    libraries: ["places"],
  });
  const [selected, setSelected] = useState(null);
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();
  const [isClicked, setIsClicked] = useState(
    currentUrl === "/estimation-immobiliere" ? true : false
  );

  const handleSelect = async (address) => {
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  const handleAddress = (description) => {
    setValue(address, false);
    source.cancel(`Cancel request for ${address}`);
    setSuggestions([]);
    setAddress(description);
    setSource(axios.CancelToken.source());
    dispatch(updateAddress(description));
    // dispatch(updateStepOfProjectProgress(1));
    setIsClicked(true);
  };

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={
          color !== undefined
            ? "border text-purple rounded-lg placeholder:text-slate-400 px-3 w-full h-12 border-" +
              color
            : "border text-purple rounded-lg placeholder:text-slate-400 px-3 w-full h-12 border-purple"
        }
        placeholder={placeholder !== undefined ? placeholder : null}
      />
      <div>
        {!isClicked ? (
          <ul className={"bg-white py-1"}>
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <li
                  onClick={() => setValue(description)}
                  key={place_id}
                  className="text-purple cursor-pointer mx-3 my-3 hover:font-bold z-50"
                >
                  {description}
                </li>
              ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};
export default AdressForm;
