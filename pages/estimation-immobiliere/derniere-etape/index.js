import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitlePrimary from "../../../components/Atoms/titles/TitlePrimary";
import LayoutEstimation from "../../../components/Layout/LayoutEstimation";
import Inscription from "../../../components/Molecules/form/Inscription";
import { updateStepOfProjectProgress } from "../../../redux/action";
import { setUserDoc } from "../../api/firebase/Doc";

const index = () => {
  const router = useRouter();

  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();
  const stateUserInformations = useSelector((state) => state.userInformations);
  const stateEstimationElements = useSelector(
    (state) => state.estimationElements
  );
  const date = new Date();

  const allEstimaitonInformations = {
    id: Date.now().toString(),
    data: {
      date: date.toLocaleDateString("fr-FR"),
      heure: date.toLocaleTimeString("fr-FR"),
    },
    stateUserInformations,
    stateEstimationElements,
  };

  useEffect(() => {
    if (
      stateUserInformations.firstName !== null &&
      stateUserInformations.lastName !== null &&
      stateUserInformations.phone !== null &&
      stateUserInformations.mail !== null
    ) {
      setLoader(true);
      udateEstimationInformationInReducer();
    }
  }, [
    stateUserInformations.fistName,
    stateUserInformations.lastName,
    stateUserInformations.phone,
    stateUserInformations.mail,
  ]);

  const udateEstimationInformationInReducer = () => {
    setUserDoc(allEstimaitonInformations)
      .then((success) => {
        setLoader(false);
        router.push("/");
      })
      .catch((err) => {
        alert("Une erreur est survenue, veuillez essayer à nouveau.");
        console.log(err);
        setLoader(false);
      });
  };

  useEffect(() => {
    dispatch(updateStepOfProjectProgress("lastStep"));
  }, []);

  const loading = () => {
    return (
      <div className="w-screen h-96 flex justify-center items-center">
        <div className="">
          <TitlePrimary color="purple" text="Loading..." />
        </div>
      </div>
    );
  };

  return (
    <LayoutEstimation>{loader ? loading() : <Inscription />}</LayoutEstimation>
  );
};

export default index;
