import React, { useState, useEffect } from "react";
import SelectNumber from "../../Atoms/select/SelectNumber";
import Text from "../../Atoms/texts/Text";
import LayoutStep from "../../Layout/LayoutStep";
import { useDispatch, useSelector } from "react-redux";
import { updateParts, updateRooms } from "../../../redux/action";

const NumberOfParts = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [type, setType] = useState("bien");

  useEffect(() => {
    if (state.estimationElements.accommodation)
      setType(state.estimationElements.accommodation);
    else setType("bien");
  }, [state.estimationElements.accommodation]);

  const [valueParts, setValueParts] = useState("");
  const [valueRooms, setValueRooms] = useState("");

  useEffect(() => {
    if (valueParts !== "") dispatch(updateParts(valueParts));
    if (valueParts === "") dispatch(updateParts(null));
    if (valueRooms !== "") dispatch(updateRooms(valueRooms));
    if (valueRooms === "") dispatch(updateRooms(null));
  }, [valueParts, valueRooms]);

  return (
    <LayoutStep title={`Combien de pièce comporte votre ${type} ?*`}>
      <div className="">
        <div className="mb-2">
          <Text color="purple" textSize="bigLight">
            Nombre de pièce
          </Text>
        </div>
        <SelectNumber callback={setValueParts} callbackValue={valueParts} />
      </div>
      <div className="mt-5">
        <div className="mb-2">
          <Text color="purple" textSize="bigLight">
            Nombre de chambre
          </Text>
        </div>
        <SelectNumber callback={setValueRooms} callbackValue={valueRooms} />
      </div>
    </LayoutStep>
  );
};

export default NumberOfParts;
