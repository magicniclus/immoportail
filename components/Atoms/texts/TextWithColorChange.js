import React from "react";

const TextWithColorChange = (props) => {
  const text = props.text;
  const isSelected = props.isSelected;
  const valueIdx = props.valueIdx;
  const updateStyle = props.updateStyle;

  return (
    <p
      className={
        isSelected
          ? `text-sm text-newGray font-semibold ${updateStyle}`
          : `text-xs text-purple font-semibold ${updateStyle}`
      }
    >
      {text}
    </p>
  );
};

export default TextWithColorChange;

// 2xl: v md:min-h-[calc((100vh-7rem))]
