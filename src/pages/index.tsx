import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";
import NavBar  from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Duel Links Team Wars</title>
        <meta name="description" content="Duel Links Team Wars - A competitive league for Yu-Gi-Oh! Duel Links players." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Duel Links <span className="text-[hsl(32,83%,61%)]">Team Wars</span>
          </h1>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xl text-white">
              Under construction!
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;