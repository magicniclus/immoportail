import React, { useState, useEffect } from "react";
import SelectNumber from "../../Atoms/select/SelectNumber";
import Text from "../../Atoms/texts/Text";
import LayoutStep from "../../Layout/LayoutStep";
import { useDispatch } from "react-redux";
import { updateParts, updateRooms } from "../../../redux/action";

const NumberOfParts = () => {
  const dispatch = useDispatch();

  const [valueParts, setValueParts] = useState("");
  const [valueRooms, setValueRooms] = useState("");

  useEffect(() => {
    if (valueParts !== "") dispatch(updateParts(valueParts));
    if (valueParts === "") dispatch(updateParts(null));
    if (valueRooms !== "") dispatch(updateRooms(valueRooms));
    if (valueRooms === "") dispatch(updateRooms(null));
  }, [valueParts, valueRooms]);

  return (
    <LayoutStep title="Combien de pièce comporte votre bien ?">
      <div className="">
        <div className="mb-2">
          <Text children="Nombre de pièce" color="purple" textSize="bigLight" />
        </div>
        <SelectNumber callback={setValueParts} callbackValue={valueParts} />
      </div>
      <div className="mt-5">
        <div className="mb-2">
          <Text
            children="Nombre de chambre"
            color="purple"
            textSize="bigLight"
          />
        </div>
        <SelectNumber callback={setValueRooms} callbackValue={valueRooms} />
      </div>
    </LayoutStep>
  );
};

export default NumberOfParts;
