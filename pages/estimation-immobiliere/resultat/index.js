import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutEstimation from "../../../components/Layout/LayoutEstimation";
import { getEstimation } from "../../api/homadata/Estimation";
import { handleLoader, makeResultatEstimation } from "../../../redux/action";
import { addDataToUserDoc } from "../../api/firebase/Doc";
import ResultEstimationBanner from "../../../components/Organisms/ResultEstimationBanner";
import HowToStandOutBanner from "../../../components/Organisms/HowToStandOutBanner";
import { updateStepOfProjectProgress } from "../../../redux/action";
import { updateDPE, updateView } from "../../../lib/utils/func";

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [params, setParams] = useState({
    lon: state.addressCoordinate?.lng ? state.addressCoordinate.lng : null,
    lat: state.addressCoordinate?.lat ? state.addressCoordinate.lat : null,
    propertyType: state.estimationElements.accommodation === "Maison" ? 1 : 0,
    propertySurface: state.estimationElements.surface,
    roomNb: state.estimationElements.partNumber,
    bedroomNb: state.estimationElements.roomNumber,
    floor:
      state.estimationElements.accommodation === "Maison"
        ? 0
        : state.estimationElements.level,
    floorNb:
      state.estimationElements.accommodation === "Appartment"
        ? state.estimationElements.buildingLevel
        : state.estimationElements.level,
    gardenSurface:
      state.estimationElements.accommodation === "Maison"
        ? state.estimationElements.landArea
        : 0,
    parkingNb: state.estimationElements.parking
      ? state.estimationElements.parking
      : 0,
    terraceNb: state.estimationElements.balcon
      ? state.estimationElements.balcon
      : 0,
    ratingEnergyConso: updateDPE(state.estimationElements.energy),
    elevator:
      state.estimationElements.elevator !== null &&
      state.estimationElements.elevator === "Oui"
        ? 1
        : 0,
    view: updateView(state.estimationElements.view),
  });

  useEffect(() => {
    dispatch(updateStepOfProjectProgress("resultat"));
  }, []);

  useEffect(() => {
    if (state.estimationElements.accommodation === null) {
      router.push("/estimation-immobiliere");
    }
  }, []);

  const updateDate = (id, newData) => {
    addDataToUserDoc(id, newData)
      .then(() => {
        console.log("Data added successfully!");
      })
      .catch((error) => {
        console.error("Error adding data: ", error);
      });
  };

  useEffect(() => {
    dispatch(handleLoader(true));
    getEstimation(params)
      .then((value) => {
        updateDate(state.id, value);
        dispatch(makeResultatEstimation(value));
        dispatch(handleLoader(false));
      })
      .catch((err) => {
        dispatch(handleLoader(false));
      });
  }, [params]);

  return (
    <LayoutEstimation>
      <ResultEstimationBanner />
      <HowToStandOutBanner />
    </LayoutEstimation>
  );
};

export default Index;
