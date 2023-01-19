import React, { useState } from "react";
import Text from "../../Atoms/texts/Text";

const Check = (props) => {
  const [isValid, setIsValid] = useState(false);

  const title = props.title;
  const updateStyle = props.updateStyle;

  const afterValidButton =
    "after:content-[''] after:h-2 after:w-2 md:after:w-4 md:after:h-4 after:absolute after:rounded-full after:bg-purple after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2";

  return (
    <div
      onClick={(e) => setIsValid(!isValid)}
      className={`w-20 h-14 md:w-32 md:h-28 border border-purple rounded-lg relative flex flex-col items-center justify-around p-3 cursor-pointer ${updateStyle}`}
    >
      <div
        className={`absolute top-1 right-1 md:top-2 md:right-2 rounded-full bg-newGray h-3 w-3 md:h-5 md:w-5 ${
          isValid ? afterValidButton : null
        }`}
      ></div>
      <Text
        children={title}
        color="purple"
        textSize="titleCard"
        center="text-center"
      />
    </div>
  );
};

export default Check;
