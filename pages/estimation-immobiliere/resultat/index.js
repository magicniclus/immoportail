import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import TitlePrimary from "../../../components/Atoms/titles/TitlePrimary";
import Layout from "../../../components/Layout/Layout";
import { getEstimation } from "../../api/homadata/estimation";

const index = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getEstimation()
      .then((value) => {
        console.log(value);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert("Erreur du chargement de vos données...");
        router.push("/estimation-immobiliere");
      });
  }, []);

  const loader = () => {
    return (
      <>
        <TitlePrimary
          color="purple"
          text="Chargement ..."
          updateWeight="font-normal"
        />
      </>
    );
  };

  const component = () => {
    return (
      <>
        <TitlePrimary
          color="purple"
          text="Voici le resultat de votre"
          textWithColor="estimation"
          updateWeight="font-normal"
        />
      </>
    );
  };

  return <Layout>{loading ? loader() : component()}</Layout>;
};

export default index;
