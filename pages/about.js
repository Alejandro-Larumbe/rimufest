import React from "react";
import Hero from "../components/Hero";
import SEO from "../components/SEO";

export default function About() {
  return (
    <>
      <SEO
        title="Rimufest Chamber Music Festival | About"
        description="RimuFest Chamber Music Festival, founded by Amelia Taylor and Alejandro Larumbe, offers two programmes a year in Tauranga - a 4-day holiday programme and a 6-day summer programme for beginner to advanced string players between the ages of 7-18. Both these programmes provide music collaboration opportunities. Students can develop effective communication, teamwork, goal-setting and organisational skills, all transferable life skills."
      />
      <Hero bgImage="about">
        <h1 className="uppercase text-white">About</h1>
      </Hero>
      <div className="md:w-101 md:mx-auto md:my-20 p-8">
        <p style={{ marginTop: "16px" }}>
          RimuFest Chamber Music Festival, founded by Amelia Taylor and
          Alejandro Larumbe, is a 6-day summer programme for beginner to
          advanced string players between the ages of 7-18. It provides music
          collaboration opportunities where students can develop effective
          communication, teamwork, goal-setting and organisational skills.{" "}
        </p>
        <p style={{ marginTop: "16px" }}>
          The programme offers a one of a kind experience. Students will be
          involved in Chamber groups, orchestra, Alexander technique, coachings
          from high-caliber national and international musicians, rehearsals,
          masterclasses and performance opportunities.
        </p>
        <p style={{ marginTop: "16px" }}>
          RimuFest is also known for its concerts and events. We are dedicated
          to providing the Bay of Plenty community with music from living female
          and male composers and proud to have this platform to play works by
          New Zealand composers.
        </p>
      </div>
    </>
  );
}
