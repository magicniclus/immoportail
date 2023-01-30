import Image from "next/image";
import React from "react";

const TitleWithLogo = (props) => {
  const text = props.text;
  const textWithColor = props.textWithColor;
  const color = props.color;
  const image = props.image;
  const marginX = props.marginX;
  const marginY = props.marginY;
  const updateWidth = props.updateWidth || null;

  const classDesign = {
    white:
      `text-white text-xl md:text-2xl font-normal ${
        updateWidth ? updateWidth + " " : " "
      } lg:mb-0 text-center ` +
      marginX +
      " " +
      marginY,
    purple:
      `text-purple text-xl md:text-2xl font-normal ${
        updateWidth ? updateWidth + " " : ""
      } lg:mb-0 text-center ` +
      marginX +
      " " +
      marginY,
  };

  return (
    <div className="flex ">
      <div className={"h-4 w-6 lg:mb-0 mr-3 " + marginX + " " + marginY}>
        <Image
          src={"/vector/" + image + ".png"}
          height={80}
          width={80}
          alt="icon"
        />
      </div>
      {textWithColor !== undefined && textWithColor !== null ? (
        <h3
          className={
            color !== undefined ? classDesign[color] : classDesign.white
          }
        >
          &nbsp;{text}&nbsp;<span className="text-blue">{textWithColor}</span>
        </h3>
      ) : (
        <h3
          className={
            color !== undefined ? classDesign[color] : classDesign.white
          }
        >
          &nbsp;{text}
        </h3>
      )}
    </div>
  );
};

export default TitleWithLogo;
