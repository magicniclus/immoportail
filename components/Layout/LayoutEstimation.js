import React from 'react';
import Header from "../Organisms/headers/Header";
import Head from 'next/head'
import Footer from "../Organisms/Footer";
import HeaderEstimation from '../Organisms/headers/HeaderEstimation';

const LayoutEstimation = (props) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta property="og:title" content={props.description} key={props.key !== undefined ? props.key : "title"} />
            </Head>
            <header>
                <HeaderEstimation />
            </header>
            <main className="relative">
                {props.children}
            </main>
            <Footer />
        </>
    );
};

export default LayoutEstimation;