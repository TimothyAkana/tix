import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>RavExchange</title>
                <meta name="description" content="Making a game for the funs" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/Logo_favicon.png" />
            </Head>
            <main className={styles.main}></main>
        </>
    );
}
