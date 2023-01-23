import React, { useEffect, useState } from "react";
import Input from "../../Atoms/inputs/Input";
import Text from "../../Atoms/texts/Text";
import LayoutStep from "../../Layout/LayoutStep";
import { useDispatch, useSelector } from "react-redux";
import { updateASurface } from "../../../redux/action";

const WhatIsASurface = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [value, setValue] = useState("");
  const [type, setType] = useState("bien");

  useEffect(() => {
    if (state.estimationElements.accommodation !== null)
      setType(state.estimationElements.accommodation);
    else setType("bien");
  }, [state.estimationElements.accommodation]);

  useEffect(() => {
    if (value !== "") dispatch(updateASurface(value));
    if (value === "") dispatch(updateASurface(null));
  }, [value]);

  return (
    <LayoutStep title={`Quelle est la surface de votre ${type} ?*`}>
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
