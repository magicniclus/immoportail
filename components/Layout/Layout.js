import Header from "../Organisms/headers/Header";
import Head from "next/head";
import Footer from "../Organisms/Footer";
import { useSelector } from "react-redux";
import Loader from "../Organisms/Loader";
import React, { useEffect, useState } from "react";
import CookieBanner from "../Organisms/CookieBanner";
import Modal from "../Molecules/modals/Modal";
import FooterGlobal from "../Organisms/FooterGlobal";

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
        <meta
          property="og:title"
          content={props.description}
          key={props.key !== undefined ? props.key : "title"}
        />
      </Head>
      <header>
        <Header />
      </header>
      <main className="relative min-h-[calc((100vh-7rem))]">
        {loading ? <Loader /> : props.children}
      </main>
      <FooterGlobal />
      <CookieBanner />
      <Modal />
    </>
  );
}
