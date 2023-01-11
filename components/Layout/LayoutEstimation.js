import React from 'react';
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
            <header className=' mx-auto'>
                <HeaderEstimation />
            </header>
            <main className="flex flex-col item-center relative h-[calc(100vh-7rem)] mx-auto drop-shadow-md w-full">
                {props.children}
            </main>
            <Footer />
        </>
    );
};

export default LayoutEstimation;