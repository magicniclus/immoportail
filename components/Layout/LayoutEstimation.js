import React, { useEffect, useState } from "react";
import Head from "next/head";
import HeaderEstimation from "../Organisms/headers/HeaderEstimation";
import BottomStepContainer from "../Organisms/BottomStepContainer";
import { useSelector } from "react-redux";
import Loader from "../Organisms/Loader";
import ContactBottomStepContainer from "../Organisms/ContactBottomStepContainer";
import CookieBanner from "../Organisms/CookieBanner";
import Modal from "../Molecules/modals/Modal";

const LayoutEstimation = (props) => {
  const state = useSelector((state) => state);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (state.loader) setLoading(true);
    else setLoading(false);
  }, [state.loader]);

  useEffect(() => {
    if (state.loader) setLoading(true);
    else setLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <header className=" mx-auto">
        <HeaderEstimation />
      </header>
      <main className="flex flex-col item-center justify-between relative min-h-[calc(100vh-7rem)] h-max mx-auto drop-shadow-md w-full">
        {loading ? <Loader /> : props.children}
      </main>
      <BottomStepContainer />
      <ContactBottomStepContainer />
      <CookieBanner />
      <Modal />
    </>
  );
};

export default LayoutEstimation;
