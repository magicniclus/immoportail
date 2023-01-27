import React from "react";

const TitleTertiary = (props) => {
  const text = props.text;
  const textWithColor = props.textWithColor;
  const color = props.color;
  const marginY = props.marginY;

  const classDesign = {
    white: "text-white text-base md:text-2xl text-center " + marginY,
    purple: "text-purple text-base md:text-2xl text-center " + marginY,
  };

  return (
    <>
      {textWithColor !== undefined && textWithColor !== null ? (
        <h3
          className={
            color !== undefined && color !== null
              ? classDesign[color]
              : classDesign.white
          }
        >
          {text}&nbsp;<span className="text-blue">{textWithColor}</span>
        </h3>
      ) : (
        <h3
          className={
            color !== undefined && color !== null
              ? classDesign[color]
              : classDesign.white
          }
        >
          {text}
        </h3>
      )}
    </>
  );
};

export default TitleTertiary;
