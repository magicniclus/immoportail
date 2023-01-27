import React from "react";

const SubTitle = (props) => {
  const text = props.text;
  const textWithColor = props.textWithColor;
  const color = props.color;
  const updateWidth = props.updateWidth || null;
  const updateWeight = props.updateWeight || null;

  const classDesign = {
    white: `text-white text-2xl md:text-4xl ${
      updateWeight !== null ? updateWeight : "font-bold "
    } ${updateWidth !== null ? updateWidth : " md:w-10/12"}`,
    purple: `text-purple text-2xl md:text-4xl ${
      updateWeight !== null ? updateWeight : "font-bold "
    } ${updateWidth !== null ? updateWidth : "md:w-10/12"}`,
  };

  return (
    <>
      {textWithColor !== undefined && textWithColor !== null ? (
        <h2
          className={
            color !== undefined ? classDesign[color] : classDesign.white
          }
        >
          {text}&nbsp;<span className="text-blue">{textWithColor}</span>
        </h2>
      ) : (
        <h2
          className={
            color !== undefined ? classDesign[color] : classDesign.white
          }
        >
          {text}
        </h2>
      )}
    </>
  );
};

export default SubTitle;
