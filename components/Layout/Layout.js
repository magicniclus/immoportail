import Header from "../Organisms/headers/Header";
import Head from 'next/head'
import Footer from "../Organisms/Footer";

export default function Layout(props){
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta property="og:title" content={props.description} key={props.key !== undefined ? props.key : "title"} />
            </Head>
            <header>
                <Header />
            </header>
            <main className="relative">
                {props.children}
            </main>
            <Footer />
        </>
    )
}