import Header from "../Organisms/headers/Header";
import Head from "next/head";
import Footer from "../Organisms/Footer";
import { useSelector } from "react-redux";
import Loader from "../Organisms/Loader";
import React, { useEffect, useState } from "react";
import CookieBanner from "../Organisms/CookieBanner";
import Modal from "../Molecules/modals/Modal";

export default function Layout(props) {
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
      <header>
        <Header />
      </header>
      <main className="relative flex flex-col justify-between  min-h-[calc(100vh-12rem)] h-max mx-auto drop-shadow-md w-full">
        {loading ? <Loader /> : props.children}
      </main>
      <Footer />
      <CookieBanner />
      <Modal />
    </>
  );
}
