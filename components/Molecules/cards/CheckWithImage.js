import Image from "next/image";
import React, { useEffect, useState } from "react";
import Text from "../../Atoms/texts/Text";

const CheckWithImage = (props) => {
  const [isValid, setIsValid] = useState(false);

  const updateStyle = props.updateStyle;
  const image = props.image;
  const imageSize = props.imageSize;
  const imageAlt = props.imageAlt;
  const text = props.text;

  const valueCallback = props.valueCallback;
  const callback = props.callback;
  const value = props.value;

  useEffect(() => {
    if (valueCallback !== text) setIsValid(false);
  }, [valueCallback]);

  const handleValid = (e) => {
    e.preventDefault();
    if (isValid) {
      setIsValid(false);
      callback(null);
    }
    if (!isValid) {
      setIsValid(true);
      callback(text);
    }
  };

  const afterValidButton =
    "after:content-[''] after:h-2 after:w-2 md:after:w-4 md:after:h-4 after:absolute after:rounded-full after:bg-purple after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2";

  return (
    <div
      onClick={handleValid}
      className={`w-28 h-28 border border-purple rounded-lg relative flex flex-col items-center justify-around p-3 cursor-pointer ${updateStyle}`}
    >
      <div
        className={`absolute top-2 right-2 rounded-full bg-newGray h-3 w-3 md:h-5 md:w-5 ${
          isValid ? afterValidButton : null
        }`}
      ></div>
      <Image
        src={`/vector/${image}.png`}
        priority
        alt={imageAlt}
        width={imageSize.width}
        height={imageSize.height}
      />
      <Text color="purple" textSize="titleCard" center="text-center">
        {text}
      </Text>
    </div>
  );
};

export default CheckWithImage;
