import Image from "next/image";
import React from "react";
import AdressForm from "../../Molecules/form/AdressForm";

const InputWithLogo = (props) => {
  const placeholder = props.placeholder;
  const image = props.image;
  const marginY = props.marginY;
  const color = props.color;
  const componentIsForAdress = props.componentIsForAdress;
  const width = props.width;

  return (
    <div className={"relative sm:w-full h-12 max-w-[450px] " + marginY}>
      {componentIsForAdress && componentIsForAdress !== undefined ? (
        <AdressForm color={color} placeholder={placeholder} />
      ) : (
        <input
          className={
            color !== undefined
              ? "border min-w-[200px] rounded-lg placeholder-gray-200::placeholder px-3 w-full h-12 text-ellipsis overflow-hidden whitespace-nowrap border-" +
                color
              : "border min-w-[200px] rounded-lg placeholder-gray-200::placeholder px-3 w-full h-12 text-ellipsis overflow-hidden whitespace-nowrap border-purple"
          }
          type="text"
          placeholder={placeholder}
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
            property
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
