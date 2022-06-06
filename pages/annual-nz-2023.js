import React from "react";
import Hero from "../components/Hero";
import Button from "../components/primitives/button";

const artists = [
  { name: "Joella Pinto", title: "Chamber music coach", instrument: "violin" },
  { name: "Martin Roberts", title: "Chamber music coach", instrument: "cello" },
  { name: "Yotam Levy", title: "Chamber music coach", instrument: "cello" },
  {
    name: "Amelia Taylor",
    title: "Chamber music coach",
    instrument: "violin/viola",
  },
  {
    name: "Alejandro Larumbe",
    title: "Orchestra conductor/Chamber music coach",
    instrument: "conductor/violin/viola",
  },
  {
    name: "Salina Fisher",
    title: "Composer/Chamber music coach",
    instrument: "composer/violin",
  },
];

export default function AnnualNZ2022() {
  return (
    <>
      <Hero bgImage="nz-2023">
        <h1 className="uppercase text-white">Annual New Zealand 2023</h1>
      </Hero>
      <div className="md:w-101 md:mx-auto md:my-20 p-8">
        <div className="py-4">
          <p className="text-2xl font-extrabold">Rimufest Annual Festival</p>
          <p className="text-lg">4th - 10th January 2023, Tauranga NZ</p>{" "}
          <div className="py-4 text-base">
            <p>**Application form coming out soon!</p>
          </div>
          {/* <p className="text-">* Last day to apply: November 20th</p> */}
        </div>
        <div className="py-4 text-base">
          <p>
            RimuFest Chamber Music Festival, founded by Amelia Taylor and
            Alejandro Larumbe, is a 7-day summer chamber music programme for
            beginner to advanced string players between the ages of 7-18.
          </p>
        </div>
        <div className="py-4 text-base">
          <p>
            Students come together in a social setting using teamwork and
            leadership skills to create music while expanding their
            understanding of chamber music and strengthening their own
            individual ability.
          </p>
        </div>
        <div className="py-4 text-base">
          <p>
            Students will participate in: daily chamber coachings and rehearsals
            | private lessons | masterclasses | Alexander Technique |
            performance opportunities
          </p>
        </div>

        {/* <div className="flex justify-center py-10">
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSevuoKBHNeJ6bqZrJg0K81pVHrFc-0lzf2-d1dWEbHw-gyv5A/viewform?usp=sf_link"
          >
            <Button>Apply now</Button>
          </a>
        </div> */}
        {/* <div className="py-4 text-base">
          <p>Application and detailed info coming out soon!</p>
          <p>
            Notified of acceptance, waitlist, or decline: 27th November 2021
          </p>
          <p>Email rimufest@gmail.com with any further questions.</p>
        </div> */}

        {/* <p className="mt-8 text-2xl font-extrabold">Faculty</p>
        <p className="mt-8 text-xl font-extrabold">Amelia Taylor</p> */}

        {/* <div className="py-4 mt-10 text-sm">
          <p>COVID-19</p>
          <p>
            Rules regarding COVID change over time. Our first priority is to
            have sensible procedures so that everyone is as safe as possible
            during the program as we learn together. We will make sure both
            health care and learning music happens. It could mean that we may
            need to make changes according to whatever situation presents, even
            at short notice, from time to time. So we will always appreciate
            your understanding and cooperation.
          </p>
          <p className="mt-2">
            Please email any questions you may have. We look forward to you
            joining our planned experiences in a program aimed to inspire and
            excite people.{" "}
          </p>
          <p>Email rimufest@gmail.com with any further questions.</p>
        </div> */}
      </div>
    </>
  );
}
