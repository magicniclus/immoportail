import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import TitlePrimary from "../../components/Atoms/titles/TitlePrimary";
import { useRouter } from "next/router";

const index = () => {
  const route = useRouter();
  useEffect(() => {
    route.push("/connexion");
  }, []);

  return (
    <Layout>
      <TitlePrimary text="Vos Favoris" />
    </Layout>
  );
};

export default index;
//
