import React from "react";

const Text = (props) => {
  const textSize = props.textSize;
  const color = props.color;
  const marginY = props.marginY;
  const marginX = props.marginX;
  const center = props.center;

  const classDesign = {
    titleCard: {
      white:
        "text-white text-xs md:text-sm font-light w-6/6 " +
        marginY +
        " " +
        marginX +
        " " +
        center +
        " ",
      purple:
        "text-purple text-xs md:text-sm font-light w-/6 " +
        marginY +
        " " +
        marginX +
        " " +
        center +
        " ",
    },
    light: {
      white:
        "text-white text-xs md:text-sm font-light w-4/6 md:w-3/6 " +
        marginY +
        " " +
        marginX +
        " " +
        center +
        " ",
      purple:
        "text-purple text-xs md:text-sm font-light w-4/6 md:w-3/6 " +
        marginY +
        " " +
        marginX +
        " " +
        center +
        " ",
    },
    bigLight: {
      white:
        "text-white text-xs md:text-sm font-light w-6/6 " +
        marginY +
        " " +
        marginX +
        " " +
        center +
        " ",
      purple:
        "text-purple text-xs md:text-sm font-light w-6/6 " +
        marginY +
        " " +
        marginX +
        " " +
        center +
        " ",
    },
    normal: {
      white:
        "text-white text-sm md:text-base font-light " +
        marginY +
        " " +
        marginX +
        " " +
        center +
        " ",
      purple:
        "text-purple text-sm md:text-base font-light " +
        marginY +
        " " +
        marginX +
        " " +
        center +
        " ",
    },
    big: {
      white:
        "text-white text-xl md:text-base " +
        marginY +
        " " +
        marginX +
        " " +
        center +
        " ",
      purple:
        "text-purple text-xl md:text-base " +
        marginY +
        " " +
        marginX +
        " " +
        center +
        " ",
    },
  };

  return (
    <p
      className={
        textSize !== undefined && color !== undefined
          ? classDesign[textSize][color]
          : classDesign.normal.white
      }
    >
      {props.children}
    </p>
  );
};

export default Text;
