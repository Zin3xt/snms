import React from "react";
import Head from "next/head";
import DatePicker from "../components/datePicker";
export default function Home() {


  return (
    <>
      <Head>
        <title> Maiskarte</title>
        <meta name="keyword" content="web development, programing" />
      </Head>
      

      <DatePicker />

    
    </>
  );
};
