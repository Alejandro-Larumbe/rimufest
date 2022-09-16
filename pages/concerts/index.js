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
          <h2 className="text-purple text-3xl mt-8 mb-2">
            Donald Maurice in Concert ft. Martin Roberts
          </h2>
          <h3 className="text-xl ">October 1st, 6:30pm @Charlemagne Lodge</h3>
          <div className="flex">
            <img src="/donald-maurice1.jpeg" className="w-1/2 my-8"></img>
            <img src="/martin.jpg" className="w-1/2 my-8"></img>
          </div>
          <a
            target="_blank"
            href="https://www.eventbrite.com/e/viola-and-cello-sonorities-tickets-400494589097"
          >
            <Button>Get Tickets</Button>
          </a>
          <div>{/* <h3 className="text-pink">ft. Martin Roberts</h3> */}</div>
        </div>
        <div></div>
        {/* <p style={{ fontSize: "14px", margin: "16px 0" }}>
          For violists, cellists and violinists wanting to learn about the
          viola.
        </p> */}

        {/* <Button>Learn more</Button> */}
        <h2 className="text-purple text-3xl mt-8 mb-2">
          RimuFest Term 3 Holiday Program - Student Concert
        </h2>
        <h3 className="text-xl ">October 4th, 1pm @ The Jam Factory</h3>

        <span style={{ fontSize: "14px", display: "block" }}>
          Featuring viola and cello ensembles{" "}
        </span>

        <h2 className="text-purple text-3xl mt-8 mb-2">
          Rimufest NZ Annual Festival - Opening Event
        </h2>
        <h3 className="text-xl ">January 6th, 6pm</h3>
        <span style={{ fontSize: "14px", marginTop: "16px" }}>Venue: TBA</span>

        <h2 className="text-purple text-3xl mt-8 mb-2">
          Rimufest NZ Annual Festival - Student Concert
        </h2>
        <h3 className="text-xl ">
          January 9th, 1pm @ Graham Young Youth Theater
        </h3>

        <p style={{ fontSize: "14px", marginTop: "8px" }}>
          Unique opportunity to support NZ's next generation of musicians at
          their first experiences in chamber music and orchestra.
        </p>
        <p style={{ fontSize: "14px", marginTop: "8px" }}>
          Featuring the world premier of Salina Fisher’s piece commissioned for
          RimuFest students.
        </p>
        <i style={{ marginTop: "64px", display: "block" }}>
          More information on our concert series coming soon...
        </i>
      </div>
    </>
  );
}
