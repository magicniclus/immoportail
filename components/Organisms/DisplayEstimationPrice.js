import React from "react";
import { useSelector } from "react-redux";
import { formatNumber, removeDecimals } from "../../lib/utils/func";
import Text from "../Atoms/texts/Text";

const DisplayEstimationPrice = (props) => {
  const state = useSelector((state) => state);
  const updateStyle = props.updateStyle || null;

  return (
    <div className={`flex flex-col items-center ${updateStyle}`}>
      <div className="flex md:items-end md:flex-row flex-col">
        <div className=" flex flex-col items-center">
          <Text textSize="titleCard" color="purple">
            Prix bas
          </Text>
          <Text textSize="bigSubTitle" color="purple">
            {state.resultatEstimation !== null
              ? formatNumber(
                  removeDecimals(
                    state.resultatEstimation.mainValuation.confidence_min
                  )
                ) + " €"
              : "100000 €"}
          </Text>
        </div>
        <div className="md:mx-28 md:my-0 my-5 flex flex-col items-center">
          <Text textSize="titleCard" color="purple">
            Prix net vendeur
          </Text>
          <Text textSize="bigTitle" color="purple">
            {state.resultatEstimation !== null
              ? formatNumber(
                  removeDecimals(
                    state.resultatEstimation.mainValuation.predicted_price
                  )
                ) + " €"
              : "100000 €"}
          </Text>
        </div>
        <div className=" flex flex-col items-center">
          <Text textSize="titleCard" color="purple">
            Prix haut
          </Text>
          <Text textSize="bigSubTitle" color="purple">
            {state.resultatEstimation !== null
              ? formatNumber(
                  removeDecimals(
                    state.resultatEstimation.mainValuation.confidence_max
                  )
                ) + " €"
              : "100000 €"}
          </Text>
        </div>
      </div>
      <div className="text-purple mt-2">
        Soit{" "}
        {formatNumber(
          removeDecimals(
            state.resultatEstimation !== null
              ? state.resultatEstimation.mainValuation.price_m2
              : "100000 €"
          )
        )}
        /m2
      </div>
    </div>
  );
};

export default DisplayEstimationPrice;
