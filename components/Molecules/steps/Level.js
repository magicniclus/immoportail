import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LayoutStep from "../../Layout/LayoutStep";
import SelectNumber from "../../Atoms/select/SelectNumber";
import Text from "../../Atoms/texts/Text";
import { updateLevel } from "../../../redux/action";

const Level = () => {
  const state = useSelector((state) => state.estimationElements.accommodation);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("Étage");
  const [text, setText] = useState("");

  const [valueLevel, setValueLevel] = useState("");

  useEffect(() => {
    if (state === "Maison") {
      setTitle("Combien de niveau que comporte votre maison ?");
    } else if (state === "Appartement")
      setTitle("A quel étage se situe votre appartement ?");
    else setTitle("Étage");
  }, [state]);

  useEffect(() => {
    if (state === "Maison") {
      setText("Le rez-de-chaussé est à prendre en compte");
    } else if (state === "Appartement") setText("Zero étant le rez-de-chaussé");
    else setText("");
  }, [state]);

  useEffect(() => {
    if (valueLevel !== "") dispatch(updateLevel(valueLevel));
    else dispatch(updateLevel(null));
  }, [valueLevel]);

  return (
    <LayoutStep title={title + "*"}>
      <div className="mb-2">
        <Text children={text} color="purple" textSize="bigLight" />
      </div>
      <SelectNumber callback={setValueLevel} callbackValue={valueLevel} />
    </LayoutStep>
  );
};

export default Level;
