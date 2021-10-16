import React from "react";
import Hero from "../components/Hero";
import Button from "../components/primitives/button";

export default function AnnualNZ2022() {
  return (
    <>
      <Hero bgImage="nz-2022">
        <h1 className="uppercase text-white">Annual New Zealand 2022</h1>
      </Hero>
      <div className="md:w-101 md:mx-auto md:my-20 p-8">
        {/* <div className="py-4">
          <p className="text-2xl text-pink">
            RimuFest Chamber Music Festival, founded by Amelia Taylor and
            Alejandro Larumbe, is an 7-day summer chamber music programme for
            beginner to advanced string players between the ages of 7-18.
            Students come together in a social setting using teamwork and
            leadership skills to create music while expanding their
            understanding of chamber music and strengthening their own
            individual voice.
          </p>
        </div> */}
        <div className="py-4">
          <p className="text-lg font-extrabold">Rimufest Annual NZ 2022</p>
          <p className="text-lg">5th - 11th January 2022</p>
          <p className="text-">* Last day to register: November 20th</p>
        </div>
        <div className="py-4 text-base">
          <p>
            RimuFest Chamber Music Festival, founded by Amelia Taylor and
            Alejandro Larumbe, is an 7-day summer chamber music programme for
            beginner to advanced string players between the ages of 7-18.
          </p>
        </div>
        <div className="py-4 text-base">
          <p>
            Students come together in a social setting using teamwork and
            leadership skills to create music while expanding their
            understanding of chamber music and strengthening their own
            individual voice.
          </p>
        </div>
        <div className="flex justify-center py-4">
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSevuoKBHNeJ6bqZrJg0K81pVHrFc-0lzf2-d1dWEbHw-gyv5A/viewform?usp=sf_link"
          >
            <Button>Apply now</Button>
          </a>
        </div>
      </div>
    </>
  );
}
