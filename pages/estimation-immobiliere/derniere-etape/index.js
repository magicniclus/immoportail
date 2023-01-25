import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import LayoutEstimation from "../../../components/Layout/LayoutEstimation";
import Inscription from "../../../components/Molecules/form/Inscription";
import { updateStepOfProjectProgress } from "../../../redux/action";

const index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateStepOfProjectProgress("lastStep"));
  }, []);
  return (
    <LayoutEstimation>
      <Inscription />
    </LayoutEstimation>
  );
};

export default index;
