import React from "react";
import { useSelector } from "react-redux";
import { removeDecimals } from "../../lib/utils/func";
import Text from "../Atoms/texts/Text";

const DisplayEstimationPrice = (props) => {
  const state = useSelector((state) => state);
  const updateStyle = props.updateStyle || null;

  return (
    <div className={`flex flex-col items-center ${updateStyle}`}>
      <div className="flex md:items-end md:flex-row flex-col">
        <div className=" flex flex-col items-center">
          <Text textSize="titleCard" color="purple" children="Prix bas" />
          <Text
            textSize="bigSubTitle"
            color="purple"
            children={
              removeDecimals(
                state.resultatEstimation.mainValuation.confidence_min
              ) + " €"
            }
          />
        </div>
        <div className="md:mx-28 md:my-0 my-5 flex flex-col items-center">
          <Text
            textSize="titleCard"
            color="purple"
            children="Prix net vendeur"
          />
          <Text
            textSize="bigTitle"
            color="purple"
            children={
              removeDecimals(
                state.resultatEstimation.mainValuation.predicted_price
              ) + " €"
            }
          />
        </div>
        <div className=" flex flex-col items-center">
          <Text textSize="titleCard" color="purple" children="Prix haut" />
          <Text
            textSize="bigSubTitle"
            color="purple"
            children={
              removeDecimals(
                state.resultatEstimation.mainValuation.confidence_max
              ) + " €"
            }
          />
        </div>
      </div>
      <div className="text-purple mt-2">
        Soit {removeDecimals(state.resultatEstimation.mainValuation.price_m2)}
        /m2
      </div>
    </div>
  );
};

export default DisplayEstimationPrice;
