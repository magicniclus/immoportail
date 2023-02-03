import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LayoutStep from "../../Layout/LayoutStep";
import SelectNumber from "../../Atoms/select/SelectNumber";
import Text from "../../Atoms/texts/Text";
import { updateLevel } from "../../../redux/action";

const Level = () => {
  //TODO: Faire commencer le nombre par un quand c'est une maison
  const state = useSelector((state) => state.estimationElements.accommodation);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("Étage");
  const [text, setText] = useState("");

  const [valueLevel, setValueLevel] = useState(
    state === "Appartement" ? 0 : null
  );

  useEffect(() => {
    dispatch(updateLevel(valueLevel));
  }, []);

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
    if (state === "Appartement") {
      if (valueLevel === 0 || valueLevel === null) dispatch(updateLevel(0));
      else dispatch(updateLevel(valueLevel));
    } else {
      if (valueLevel === 0 || valueLevel === null) dispatch(updateLevel(null));
      else dispatch(updateLevel(valueLevel));
    }
  }, [valueLevel, state]);

  return (
    <LayoutStep title={title + "*"}>
      <div className="mb-2">
        <Text color="purple" textSize="bigLight">
          {text}
        </Text>
      </div>
      <SelectNumber callback={setValueLevel} callbackValue={valueLevel} />
    </LayoutStep>
  );
};

export default Level;
