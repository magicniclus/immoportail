import React from "react";
import { useSelector } from "react-redux";
import { removeDecimals } from "../../lib/utils/func";
import Text from "../Atoms/texts/Text";

const DisplayEstimationPrice = () => {
  const state = useSelector((state) => state);
  return (
    <div>
      <div className="">
        <div className="">
          <Text textSize="titleCard" color="purple" children="Prix bas" />
          <Text
            textSize="normal"
            color="purple"
            children={
              removeDecimals(
                state.resultatEstimation.mainValuation.confidence_min
              ) + " €"
            }
          />
        </div>
        <div className="">
          <Text
            textSize="titleCard"
            color="purple"
            children="Prix net vendeur"
          />
          <Text
            textSize="big"
            color="purple"
            children={
              removeDecimals(
                state.resultatEstimation.mainValuation.predicted_price
              ) + " €"
            }
          />
        </div>
        <div>
          <Text textSize="titleCard" color="purple" children="Prix haut" />
          <Text
            textSize="normal"
            color="purple"
            children={
              removeDecimals(
                state.resultatEstimation.mainValuation.confidence_max
              ) + " €"
            }
          />
        </div>
      </div>
      <div className="">
        Soit {removeDecimals(state.resultatEstimation.mainValuation.price_m2)}
        /m2
      </div>
    </div>
  );
};

export default DisplayEstimationPrice;
