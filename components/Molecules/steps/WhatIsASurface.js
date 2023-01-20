import React, { useEffect, useState } from "react";
import Input from "../../Atoms/inputs/Input";
import Text from "../../Atoms/texts/Text";
import LayoutStep from "../../Layout/LayoutStep";
import { useDispatch } from "react-redux";
import { updateASurface } from "../../../redux/action";

const WhatIsASurface = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  useEffect(() => {
    if (value !== "") dispatch(updateASurface(value));
    if (value === "") dispatch(updateASurface(null));
  }, [value]);

  return (
    <LayoutStep title="Quelle est la surface de votre bien ?">
      <div className="mb-2">
        <Text textSize="bigLight" color="purple" children="Valeur en m²" />
      </div>
      <Input
        placeholder="Exemple: 100m²"
        type="number"
        callback={setValue}
        callbackValue={value}
      />
    </LayoutStep>
  );
};

export default WhatIsASurface;
