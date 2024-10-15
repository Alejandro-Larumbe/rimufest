import React from "react";
import Hero from "../components/Hero";
import SEO from "../components/SEO";
import Button from "../components/primitives/button";
import { ChevronRightIcon } from "@heroicons/react/solid";

const fellowshipOfferings = [
  "Chamber rehearsal time with other students in the fellowship programme",
  "Daily coachings",
  "Mentor chamber music students through their rehearsals",
  "Performance opportunities ",
  "Lodging by host ",
  "Most meals included ",
];

const chevronRight = (
  <svg
    versi
    className="mt-1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={18}
    viewBox="80 0 80 185.343"
    style={{ display: "inline-block" }}
  >
    <g>
      <g>
        <path
          fill="#75499D"
          d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
			l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
			c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
        />
      </g>
    </g>
  </svg>
);

const bulletPoints = [
  "Chamber Concert Series: Watch and learn from professional musicians.",
  "Daily Chamber Coaching: Work with one of our expert coaches in daily sessions.",
  "Chamber Music Masterclasses: Focus on performance techniques and public speaking.",
  "Alexander Technique for musicians: Learn how to take care of your body and improve posture.",
  "Orchestra Sessions: Join all students to rehearse, listen, and dive deeper into the music with conductor Alejandro Larumbe.",
];

const artists = [
  {
    name: "Amelia Taylor",
    instrument: "Violin, Co-Founder",
    title: "Director, Co-Founder",
    website: "https://www.ameliacetaylor.com",
    image: "amelia-4",
    path: "/amelia-taylor",
  },
  // {
  //   name: "Alejandro Larumbe",
  //   instrument: "Violin, Orchestra Conductor",
  //   title: "Co-Founder",
  //   image: "alejandro",
  //   path: "/alejandro-larumbe",
  // },
  // {
  //   name: "Kate Ellingham-Hunt",
  //   instrument: "Violin, Alexander Technique",
  //   website: "https://kate-eh.co.nz",
  //   image: "kate",
  //   path: "/kate-ellingham-hunt",
  // },
  // {
  //   name: "Donald Maurice",
  //   instrument: "Viola",
  //   website: "https://www.donaldmaurice.org",
  //   image: "donald-maurice1",
  //   path: "/donald-maurice",
  // },
  {
    name: "Maria Mo",
    instrument: "Piano",
    image: "maria-mo",
    path: "/maria-mo",
  },
];

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
            RimuFest 6th Annual Festival 2025
          </p>
          <p className="text-lg  mt-4">9th - 14th January, 2025</p>{" "}
          <p className="text-lg ">Tauranga, NZ</p>{" "}
          <p className="text-lg ">
            Open to Violin, Viola, Cello, Double Bass, and Piano
          </p>{" "}
          {/* <p className="mt-4">Applications Open October 1st</p> */}
          {/* <p className="mt-1">Applications Close November 17th</p> */}
          <p className="mt-1">Tuition fee: $300</p>
          <a className="mt-6 block" href="https://forms.gle/PAVTpLEVct2aKSm79">
            <Button>Apply</Button>
          </a>
          <div className="py-8 text-base">
            <ul className={["text-md mt-2 flex flex-col gap-2"].join(" ")}>
              {bulletPoints.map((item) => (
                <li className="flex align-middle gap-2">
                  {chevronRight}
                  {item}
                </li>
              ))}
              <p className="mt-4 flex">
                We provide a limited number of financial assistance
                scholarships. These scholarships are need-based and may cover up
                to the full cost of the program. If you wish to be considered,
                please specify this in your application.
              </p>
              <a
                className="w-full flex justify-center mt-16"
                href="/learn-more"
              >
                <Button>Learn more...</Button>
              </a>
              <p className="text-purple text-3xl font-thin mt-8">
                String Fellowship Program
              </p>
              {/* <p className="text-pink text-md  mt-2">4th-9th January 2024</p>{" "} */}
              <p className="mt-4">
                The RimuFest String Fellowship Program is a course for
                university music students early in their career. The programme
                will help to enhance rehearsal techniques, hone your artistry,
                gain performing and teaching experience.
              </p>
              <p className="mt-4">The programme includes:</p>
              <ul className="text-md mt-2 ">
                {fellowshipOfferings.map((item) => (
                  <li
                    className="mt-2"
                    style={{ display: "flex", alignItems: "flex-start" }}
                  >
                    <div className="text-pink">
                      <ChevronRightIcon className="w-6 h-6 font-bold" />
                    </div>
                    <span className="text-base ml-1">{item}</span>
                  </li>
                ))}
              </ul>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            {artists.map((artist) => (
              <a
                href={"/artists" + artist.path}
                className="gap-4 flex flex-col group"
              >
                <div className="relative">
                  <img
                    className="h-96 w-full object-cover grayscale transition duration-300 group-hover:grayscale-0"
                    src={`/${artist.image}.jpeg`}
                    alt={artist.name}
                  />
                </div>
                <div>
                  <h5 className="text-pink text-2xl">{artist.name}</h5>
                  <h6 className="text-lg">{artist.instrument}</h6>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
