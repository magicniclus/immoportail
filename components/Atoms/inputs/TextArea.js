import React, { useEffect, useState } from "react";

const TextArea = (props) => {
  const { placeholder, color, minLength, required, callback } = props;

  const [value, setValue] = useState("");

  useEffect(() => {
    if (callback) {
      if (value !== "") {
        callback(value);
      } else callback(null);
    }
  }, [value]);

  return (
    <textarea
      className={`border min-w-200px rounded-lg placeholder-gray-200::placeholder px-3 max-w-450px h-24 border-${
        color || "purple"
      } text-xs md:text-sm text-ellipsis overflow-hidden whitespace-nowrap text-${
        color || "purple"
      }`}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default TextArea;
