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
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-purple text-3xl ">Faculty Concert</h2>

            <h3 className="text-xl ">
              January 6th 2024, 6:30pm @ St Peter's Church
            </h3>
          </div>

          {/* <img src="/lockdown-quartet.png" className="w-full "></img> */}

          <a className="w-full flex justify-center" target="_blank">
            <Button>Get Tickets</Button>
          </a>

          <div className="flex flex-col mt-32 gap-2">
            <h2 className="text-purple text-3xl ">
              Lunchtime Chamber Music Concert
            </h2>

            <h3 className="text-xl ">January 7th 2024, 1:00pm @ TBD venue</h3>
          </div>

          {/* <img src="/lockdown-quartet.png" className="w-full "></img> */}

          <a
            className="w-full flex justify-center"
            target="_blank"
            // href="https://www.eventspronto.co.nz/LockdownQuartet"
          >
            <Button>Get Tickets</Button>
          </a>
        </div>

        <div className="flex flex-col mt-32 gap-2">
          <h2 className="text-purple text-3xl ">RimuFest Student Concert</h2>
          <p className="text-xl">
            January 9th 2024, 1:00pm @ Graham Young Youth Theatre, Tauranga Boys
            College
          </p>
          <p className="text-lg ">Enter by donation</p>
        </div>
        <img src="/student-concert.jpg" className="w-full "></img>

        <span>
          The RimuFest student concert is a family-friendly celebration,
          inspiring the next generation of music enthusiasts. It showcases the
          culmination of four days of dedicated hard work by our exceptional
          students and faculty. They present a mesmerizing display of
          high-caliber music that is sure to be enjoyed by audiences of all
          ages. With their talent and passion on full display, the concert
          promises to be a delightful and unforgettable musical experience for
          the entire family. It is a celebration of the students' growth and
          achievements, as well as a testament to the dedication and expertise
          of the faculty. Don't miss this incredible showcase of musical talent
          at the RimuFest student concert, as it inspires and delights young and
          old alike.
        </span>
      </div>

      {/* <h2 className="text-purple text-3xl mt-32">
          Chase Ward in Concert
        </h2>
        <h3 className="text-xl ">
          Jan 10th, 6:30pm @ Graham Young Youth Theater, Tauranga Boys College
        </h3>
        <img src="/chase.jpeg" className="w-full "></img>

        <p style={{ fontSize: "14px", marginTop: "8px" }}>
          USA violinist Chase Ward will be performing at the Graham Young Youth
          Theatre, Tauranga Boys College. Chase is a faculty member for the
          January 2023 festival.
        </p> */}
      {/* </div> */}
    </>
  );
}
