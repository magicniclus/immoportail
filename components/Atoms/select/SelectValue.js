import React from "react";

const SelectValue = (props) => {
  const option = props.option;
  return (
    <select
      className="text-xs md:text-sm border min-w-[200px] max-w-[450px] rounded-lg placeholder-gray-200::placeholder px-3 h-12 border-purple text-purple"
      name="type"
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
