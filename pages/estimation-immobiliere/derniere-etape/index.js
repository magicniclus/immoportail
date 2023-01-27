import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutEstimation from "../../../components/Layout/LayoutEstimation";
import Inscription from "../../../components/Molecules/form/Inscription";
import {
  handleLoader,
  updateStepOfProjectProgress,
} from "../../../redux/action";
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
      dispatch(handleLoader(true));
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
        router.push("/estimation-immobiliere/resultat");
      })
      .catch((err) => {
        alert("Une erreur est survenue, veuillez essayer à nouveau.");
        console.log(err);
        dispatch(handleLoader(false));
      });
  };

  useEffect(() => {
    dispatch(handleLoader(false));
    dispatch(updateStepOfProjectProgress("lastStep"));
  }, []);

  return (
    <LayoutEstimation>
      <div className="flex  min-h-[calc(100vh-7rem)]">
        <div className=" min-h-[calc(100vh-7rem)] w-3/6 relative md:flex hidden">
          <Image src="/houses/campagne.jpg" layout="fill" objectFit="cover" />
        </div>
        <Inscription />
      </div>
    </LayoutEstimation>
  );
};

export default index;
