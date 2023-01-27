import Image from "next/image";
import React from "react";

const TitleWithLogo = (props) => {
  const text = props.text;
  const textWithColor = props.textWithColor;
  const color = props.color;
  const image = props.image;
  const marginX = props.marginX;
  const marginY = props.marginY;

  const classDesign = {
    white:
      "text-white text-2xl md:text-2xl font-normal md:w-10/12 lg:mb-0 " +
      marginX +
      " " +
      marginY,
    purple:
      "text-purple text-2xl md:text-2xl font-normal md:w-10/12 lg:mb-0 " +
      marginX +
      " " +
      marginY,
  };

  return (
    <div className="flex ">
      <div className={"h-4 w-6 lg:mb-0 " + marginX + " " + marginY}>
        <Image
          src={"/vector/" + image + ".png"}
          height={80}
          width={80}
          alt="icon"
        />
      </div>
      {textWithColor !== undefined && textWithColor !== null ? (
        <h1
          className={
            color !== undefined ? classDesign[color] : classDesign.white
          }
        >
          &nbsp;{text}&nbsp;<span className="text-blue">{textWithColor}</span>
        </h1>
      ) : (
        <h1
          className={
            color !== undefined ? classDesign[color] : classDesign.white
          }
        >
          &nbsp;{text}
        </h1>
      )}
    </div>
  );
};

export default TitleWithLogo;
