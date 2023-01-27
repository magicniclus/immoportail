import React from "react";

const Label = (props) => {
  const text = props.text;
  const nessessary = props.nessessary;

  return (
    <label className="text-purple md:text-base text-md font-light">
      {text ? text : null} :{nessessary ? "*" : null}
    </label>
  );
};

export default Label;
