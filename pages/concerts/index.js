import Hero from "../../components/Hero";
import React from "react";
import Button from "../../components/primitives/button";

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
      <Hero bgImage="concerts">
        <h1 className="uppercase text-white">Concerts</h1>
      </Hero>

      <div className="md:w-101 md:mx-auto md:my-20 p-8">
        <h2 style={{ fontSize: "20px", marginTop: "56px" }}>
          Donald Maurice in Concert
        </h2>
        <h3>October 1st, 6:30pm</h3>
        <span style={{ fontSize: "14px", marginTop: "16px" }}>Venue: TBA</span>
        {/* <p style={{ fontSize: "14px", margin: "16px 0" }}>
          For violists, cellists and violinists wanting to learn about the
          viola.
        </p> */}

        {/* <Button>Learn more</Button> */}
        <h2 style={{ fontSize: "20px", marginTop: "64px" }}>
          RimuFest Term 3 Holiday Program - Student Concert
        </h2>
        <h3 style={{ marginTop: "64pxpx" }}>October 4th, 1pm</h3>
        <span style={{ fontSize: "14px", marginTop: "16px" }}>
          @ The Jam Factory
        </span>
        <span style={{ fontSize: "14px", display: "block" }}>
          Featuring viola and cello ensembles{" "}
        </span>

        <h2 style={{ fontSize: "20px", marginTop: "64px" }}>
          Rimufest NZ Annual Festival - Opening Event
        </h2>
        <h3 style={{ marginTop: "64pxpx" }}>January 6th, 6pm</h3>
        <span style={{ fontSize: "14px", marginTop: "16px" }}>Venue: TBA</span>

        <h2 style={{ fontSize: "20px", marginTop: "64px" }}>
          Rimufest NZ Annual Festival - Student Concert
        </h2>
        <h3 style={{ marginTop: "64pxpx" }}>January 9th, 1pm</h3>
        <span style={{ fontSize: "14px", marginTop: "16px" }}>
          @ Graham Young Youth Theater
        </span>
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
