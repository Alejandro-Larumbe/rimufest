import Hero from "../../components/Hero";
import React from "react";
import Button from "../../components/primitives/button";
import SEO from "../../components/SEO";

// export async function getStaticProps() {
//   const allConcertsData = getSortedConcertsData();
//   return {
//     props: {
//       allConcertsData,
//     },
//   };
// }

export default function Concerts() {
  return (
    <>
      <SEO
        title="Rimufest Chamber Music Festival | Concerts"
        description="RimuFest Chamber Music Festival, founded by Amelia Taylor and Alejandro Larumbe, offers two programmes a year in Tauranga - a 4-day holiday programme and a 6-day summer programme for beginner to advanced string players between the ages of 7-18. Both these programmes provide music collaboration opportunities. Students can develop effective communication, teamwork, goal-setting and organisational skills, all transferable life skills."
      />
      <Hero bgImage="concerts">
        <h1 className="uppercase text-white">Concerts</h1>
      </Hero>

      <div className="md:w-101 md:mx-auto md:my-20 p-8">
        <div className="">
          <h2 className="text-purple text-3xl mt-8 mb-2">Faculty Concert</h2>
          <h3 className="text-xl ">
            Saturday Jan 7th 2023, 6:30pm @ Charlemagne Lodge, Te Puna
          </h3>

          <img src="/garden-concert.jpeg" className="w-full my-8"></img>

          <p>
            Bring a picnic and enjoy an exciting music repertoire performed by
            Rimufest's world class musicians.{" "}
          </p>
          {/* <a
            target="_blank"
            href="https://www.eventbrite.com/e/viola-and-cello-sonorities-tickets-400494589097"
          >
            <Button>Get Tickets</Button>
          </a> */}
        </div>
        <div></div>

        {/* <Button>Learn more</Button> */}
        <h2 className="text-purple text-3xl mt-32 mb-2">
          RimuFest Annual 2023 - Student Concert
        </h2>
        <h3 className="text-xl ">
          Monday Jan 9th, 1:30pm @ Graham Young Youth Theatre, Tauranga Boys
          College
        </h3>
        <img src="/student-concert-2022.jpeg" className="w-full my-8"></img>

        <span style={{ fontSize: "14px", display: "block" }}>
          Come and support young students in a variety of chamber groups. Fun
          for the family.{" "}
        </span>

        <h2 className="text-purple text-3xl mt-32 mb-2">
          Chase Ward in Concert
        </h2>
        <h3 className="text-xl ">
          Jan 10th, 6:30pm @ Graham Young Youth Theater, Tauranga Boys College
        </h3>
        <img src="/chase.jpeg" className="w-full my-8"></img>

        <p style={{ fontSize: "14px", marginTop: "8px" }}>
          USA violinist Chase Ward will be performing at the Graham Young Youth
          Theatre, Tauranga Boys College. Chase is a faculty member for the
          January 2023 festival.
        </p>
      </div>
    </>
  );
}
