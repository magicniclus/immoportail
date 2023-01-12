import React, { useEffect, useState } from "react";
import TitleSecondary from "../Atoms/titles/TitleSecondary";
import InputWithLogo from "../Atoms/inputs/InputWithLogo";
import ButtonPrimary from "../Atoms/buttons/ButtonPrimary";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { updateAddressCoordinate } from "../../redux/action";
import { useRouter } from "next/router";

const SetInputWithTitleAndButton = (props) => {
  const bgColor = props.bgColor;
  const titleColor = props.titleColor;
  const buttonVersion = props.buttonVersion;
  const colorInput = props.colorInput;
  const textWithColor = props.textWithColor;
  const disabled = props.disabled;

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const router = useRouter();

  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.address !== "" && state.address !== undefined) {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${state.address}&key=AIzaSyBhFIY1nvseuxoi4xA0HPiM-PvwNQdx9kI&inputtype=textquery&fields=geometry`
        )
        .then((res) => {
          setCoordinates({
            lat: res.data.candidates[0].geometry.location.lat,
            lng: res.data.candidates[0].geometry.location.lng,
          });
          dispatch(
            updateAddressCoordinate({
              lat: res.data.candidates[0].geometry.location.lat,
              lng: res.data.candidates[0].geometry.location.lng,
            })
          );
          //   Creer une promess
          //   if (state.addressCoordinate !== null) {
          //     router.push("/estimation-immobiliere");
          //   }
        })
        .then(() => {})
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    if (state.addressCoordinate !== null) {
      router.push("/estimation-immobiliere");
    }
  }, [coordinates, state.addressCoordinate]);

  return (
    <form
      onSubmit={handleSubmit}
      className={
        bgColor !== undefined
          ? "bg-" + bgColor + " py-5 px-7 my-4 rounded-lg md:w-10/12"
          : "bg-white py-5 px-7 my-4 rounded-lg md:w-10/12"
      }
    >
      <TitleSecondary
        text="Adresse du bien à estimer"
        textWithColor={textWithColor}
        color={titleColor !== undefined ? titleColor : "purple"}
      />
      <InputWithLogo
        componentIsForAdress={true}
        image={
          titleColor === "purple"
            ? "/Vectorlocalization.png"
            : "/vector/VectorlocalizationPurple.png"
        }
        marginY="my-4"
        placeholder="Saisir une adresse"
        color={colorInput !== undefined ? colorInput : "purple"}
      />
      <ButtonPrimary
        type="submit"
        disabled={disabled}
        text="Estimer"
        version={buttonVersion !== undefined ? buttonVersion : "primary"}
      />
    </form>
  );
};

export default SetInputWithTitleAndButton;
