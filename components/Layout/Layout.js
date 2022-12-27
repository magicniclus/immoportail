import Header from "../Organisms/Header";
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
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    )
}