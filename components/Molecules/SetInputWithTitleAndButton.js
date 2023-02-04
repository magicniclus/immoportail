import React, { useEffect, useState } from "react";
import TitleSecondary from "../Atoms/titles/TitleSecondary";
import InputWithLogo from "../Atoms/inputs/InputWithLogo";
import ButtonPrimary from "../Atoms/buttons/ButtonPrimary";
import { useDispatch, useSelector } from "react-redux";
import { updateAddressCoordinate } from "../../redux/action";
import { useRouter } from "next/router";
import { getCoordinateOfAddress } from "../../lib/googleMap/googleMap";

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

  const fetchAddressCoordinate = (address) => (dispatch) => {
    return getCoordinateOfAddress(address)
      .then((res) => {
        dispatch(updateAddressCoordinate(res));
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.address !== "" && state.address !== undefined) {
      dispatch(fetchAddressCoordinate(state.address)).then(() => {
        router.push(`/${"estimation-immobiliere"}`);
      });
    }
  };

  const dispatchAddress = () => {
    return new Promise((resolve, reject) => {});
  };

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
