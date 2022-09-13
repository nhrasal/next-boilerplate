import { LocalStorageService } from "@services/utils/localStorage.service";
import type { NextPage } from "next";
import Head from "next/head";

import styles from "../../styles/Home.module.css";

const Home: NextPage = () => {
    console.log(LocalStorageService.get("accessToken"));
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    );
};

export default Home;
