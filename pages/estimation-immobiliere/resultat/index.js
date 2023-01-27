import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutEstimation from "../../../components/Layout/LayoutEstimation";
import { getEstimation } from "../../api/homadata/estimation";
import { handleLoader, makeResultatEstimation } from "../../../redux/action";
import { addDataToUserDoc } from "../../api/firebase/Doc";
import ResultEstimationBanner from "../../../components/Organisms/ResultEstimationBanner";
import HowToStandOutBanner from "../../../components/Organisms/HowToStandOutBanner";
import { updateStepOfProjectProgress } from "../../../redux/action";

const index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(updateStepOfProjectProgress("resultat"));
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
    getEstimation()
      .then((value) => {
        updateDate(state.id, value);
        dispatch(makeResultatEstimation(value));
        dispatch(handleLoader(false));
      })
      .catch((err) => {
        dispatch(handleLoader(false));
        alert("Erreur du chargement de vos données...");
        router.push("/estimation-immobiliere");
      });
  }, []);

  return (
    <LayoutEstimation>
      <ResultEstimationBanner />
      <HowToStandOutBanner />
    </LayoutEstimation>
  );
};

export default index;
