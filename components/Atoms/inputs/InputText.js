import React, { useEffect, useState } from "react";
const inputText = (props) => {
  const placeholder = props.placeholder;
  const color = props.color;
  const type = props.type;
  const minLenght = props.minLenght;
  const required = props.required;
  const phone = props.phone || null;
  const mail = props.mail || null;

  const [value, setValue] = useState("");

  const valueCallback = props.valueCallback;
  const callback = props.callback;

  useEffect(() => {
    if (callback) {
      if (value !== "") {
        callback(value);
      } else callback(null);
    }
  }, [value]);

  return (
    <input
      className={`border min-w-[200px] rounded-lg placeholder-gray-200::placeholder px-3  max-w-[450px] h-12 border-purple text-xs md:text-sm text-ellipsis overflow-hidden whitespace-nowrap text-purple`}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type ? type : null}
    />
  );
};

export default inputText;
