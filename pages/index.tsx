import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { CopyToClipboardBtn } from "../components/CopyToClipboardBtn";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>tburke.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold mb-8">Tayler Burke</h1>
        <div>
          <h2 className="text-4xl mb-6">Portfolio Coming Soon.</h2>
          <p className="text-2xl">
            In the meantime, send me an email at{" "}
            <span className="flex justify-center items-center">
              <span className="text-blue-500">tayler@tburke.dev</span>{" "}
              <CopyToClipboardBtn
                className="ml-2"
                content={"tayler@tburke.dev"}
              />
            </span>
          </p>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        tburke
      </footer>
    </div>
  );
};

export default Home;
