import Image from "next/image";
import React, { useState, useEffect } from "react";

const SelectNumber = (props) => {
  const [value, setValue] = useState(0);

  const placeholder = props.placeholder;

  const valueCallback = props.valueCallback;
  const callback = props.callback;

  const updateMoreValue = () => {
    if ((value) => 0) setValue(value + 1);
    else null;
  };

  useEffect(() => {
    if (callback) {
      if (value > 0) {
        callback(value);
      } else callback(null);
    }
  }, [value]);

  const updateLessValue = () => {
    if (value > 0) setValue(value - 1);
    else null;
  };

  return (
    <div>
      <div className="flex">
        <div
          onClick={updateLessValue}
          className={`h-12 w-10 bg-purple ${
            value > 0 ? "opacity-100" : "opacity-80"
          } rounded-l-lg flex items-center justify-center cursor-pointer`}
        >
          <Image
            priority
            width={21}
            height={21}
            alt="moins"
            src="/vector/moins.png"
          />
        </div>
        <input
          className={`text-xs md:text-sm border w-[80px] placeholder-gray-200::placeholder px-3 h-12 border-purple`}
          required
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div
          onClick={updateMoreValue}
          className="h-12 w-10 bg-purple rounded-r-lg flex items-center justify-center cursor-pointer"
        >
          <Image width={21} height={21} alt="plus" src="/vector/plus.png" />
        </div>
      </div>
    </div>
  );
};

export default SelectNumber;
