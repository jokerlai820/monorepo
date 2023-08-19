"use client";

import Head from "next/head";
import { Container } from "ui";
import "ui/styles.css";

const API_HOST = process.env.NEXT_PUBLIC_API_HOST || "http://localhost:3001";

export default function Web() {
  return (
    <> 
      <Head>
        <title>CLP</title>
        <meta
          name="description"
          content="SEC Developer Case Study"
        />
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>
      <main className=" h-full">
        <Container className="h-full flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 lg:justify-end`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                Simon Lai
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                SEC Developer Case Study
              </p>
            </div>

          </div>
        </div>
        </Container>
      </main>
    </>
  );
}
