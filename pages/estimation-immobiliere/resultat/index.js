import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TitlePrimary from "../../../components/Atoms/titles/TitlePrimary";
import Layout from "../../../components/Layout/Layout";
import { getEstimation } from "../../api/homadata/estimation";
import { handleLoader } from "../../../redux/action";

const index = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleLoader(true));
    getEstimation()
      .then((value) => {
        console.log(value);
        dispatch(handleLoader(false));
      })
      .catch((err) => {
        dispatch(handleLoader(false));
        alert("Erreur du chargement de vos données...");
        router.push("/estimation-immobiliere");
      });
  }, []);

  return (
    <Layout>
      <TitlePrimary
        color="purple"
        text="Voici le resultat de votre"
        textWithColor="estimation"
        updateWeight="font-light"
      />
    </Layout>
  );
};

export default index;
