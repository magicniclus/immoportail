import React, { useState, useEffect } from "react";

const SelectValue = (props) => {
  const option = props.option;

  const [value, setValue] = useState("");

  const valueCallback = props.valueCallback;
  const callback = props.callback;

  useEffect(() => {
    if (callback) {
      if (value > "") {
        callback(value);
      } else callback(null);
    }
  }, [value]);

  return (
    <select
      className="text-base border min-w-[200px] max-w-[450px] rounded-lg placeholder-gray-200::placeholder px-3 h-12 border-purple text-purple"
      name="type"
      onChange={(e) => {
        setValue(e.target.value);
      }}
    >
      <option disabled selected>
        Selectionnez une option
      </option>
      {option.map((el, idx) => (
        <option className="text-normal" key={idx}>
          {el}
        </option>
      ))}
    </select>
  );
};

export default SelectValue;
