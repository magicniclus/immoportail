import React from "react";

const Text = (props) => {
  const textSize = props.textSize;
  const color = props.color;
  const marginY = props.marginY;
  const marginX = props.marginX;
  const center = props.center;

  const classDesign = {
    litleText: {
      white:
        "text-white text-xs md:text-sm font-light w-5/6 " +
        marginY +
        " " +
        marginX +
        " " +
        center +
        " ",
      purple:
        "text-purple text-xs md:text-sm font-light w-5/6 " +
        marginY +
        " " +
        marginX +
        " " +
        center +
        " ",
    },
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
        "text-purple text-xs md:text-sm font-light w-6/6 " +
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
    normalLight: {
      white:
        "text-white text-sm md:text-base font-light w-9/12 " +
        marginY +
        " " +
        marginX +
        " " +
        center +
        " ",
      purple:
        "text-purple text-sm md:text-base font-light w-9/12 " +
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
    bigTitle: {
      white:
        "text-white font-normal md:text-6xl text-4xl " +
        marginY +
        " " +
        marginX +
        " " +
        center +
        " ",
      purple:
        "text-purple font-normal md:text-6xl text-4xl " +
        marginY +
        " " +
        marginX +
        " " +
        center +
        " ",
    },

    bigSubTitle: {
      white:
        "text-white font-semibold md:text-2xl text-xl " +
        marginY +
        " " +
        marginX +
        " " +
        center +
        " ",
      purple:
        "text-purple font-semibold md:text-2xl text-xl " +
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
      {props.children !== undefined || props.children !== null
        ? props.children
        : null}
    </p>
  );
};

export default Text;
