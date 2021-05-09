import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

import Appbar from "./Appbar";

const name = "Your Name";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@300&display=swap"
          rel="stylesheet"
        /> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,700&display=swap"
          rel="stylesheet"
        /> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,700&family=Raleway:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Appbar />
      {/* <div className={'container'}> */}
      {children}
      {/* </div> */}
      <Footer />
    </>
  );
}
