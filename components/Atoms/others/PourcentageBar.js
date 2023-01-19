import React from "react";

const PourcentageBar = (props) => {
  const value = props.value;
  return (
    <div className="w-5/6 h-2 bg-white rounded-lg relative">
      <div
        className={`h-full rounded-lg absolute top-0 left-0 bg-purple`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default PourcentageBar;
