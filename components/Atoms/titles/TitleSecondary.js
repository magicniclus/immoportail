import React from "react";

const TitleSecondary = (props) => {
  const text = props.text;
  const textWithColor = props.textWithColor;
  const color = props.color;
  const marginY = props.marginY;

  const classDesign = {
    white: "text-white text-ligth md:text-3xl " + marginY,
    purple: "text-purple text-ligth md:text-3xl " + marginY,
  };

  return (
    <>
      {textWithColor !== undefined && textWithColor !== null ? (
        <h2
          className={
            color !== undefined && color !== null
              ? classDesign[color]
              : classDesign.white
          }
        >
          {text}&nbsp;<span className="text-blue">{textWithColor}</span>
        </h2>
      ) : (
        <h2
          className={
            color !== undefined && color !== null
              ? classDesign[color]
              : classDesign.white
          }
        >
          {text}
        </h2>
      )}
    </>
  );
};

export default TitleSecondary;
