import React from "react";
import Hero from "../components/Hero";
import SEO from "../components/SEO";

export default function AnnualNZ2022() {
  return (
    <>
      <SEO
        title="Rimufest Chamber Music Festival | Annual NZ 2024"
        description="RimuFest Chamber Music Festival, founded by Amelia Taylor and Alejandro Larumbe, offers two programmes a year in Tauranga - a 4-day holiday programme and a 6-day summer programme for beginner to advanced string players between the ages of 7-18. Both these programmes provide music collaboration opportunities. Students can develop effective communication, teamwork, goal-setting and organisational skills, all transferable life skills."
      />
      <Hero bgImage="nz-2023">
        {/* <h1 className="uppercase text-white">Annual New Zealand 2025</h1> */}
      </Hero>
      <div className="md:w-100 md:mx-auto md:my-20 p-8">
        <div className="py-4">
          <p className="text-4xl font-extrabold text-pink">
            Rimufest 6th Annual Festival 2025
          </p>
          <p className="text-lg  mt-4">9th - 14th January, 2025</p>{" "}
          <p className="text-lg ">Tauranga, NZ</p>{" "}
          <p className="text-lg ">
            Open to Violin, Viola, Cello, Double Bass, and Piano
          </p>{" "}
          <p className="mt-4">Applications Open October 1st</p>
          <p className="mt-1">Applications Close November 17th</p>
          <p className="mt-1">Tuition fee: $300</p>
        </div>
      </div>
    </>
  );
}
