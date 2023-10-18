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
      <div className="md:w-100 md:mx-auto md:my-20 p-8">
        <p style={{ marginTop: "16px" }}>
          RimuFest is a vibrant and inclusive chamber music festival that offers
          two distinct programmes along with an engaging concert series. Founded
          by Amelia Taylor and Alejandro Larumbe, RimuFest aims to provide
          innovative and high-quality music tuition and coaching to young string
          players aged 7 to 18.
        </p>
        <p style={{ marginTop: "16px" }}>
          Our flagship festival is a 6-day summer programme that caters
          forbeginner to advanced string players. It offers a unique
          experiencewhere students can participate in chamber groups, orchestra,
          Alexandertechnique, coachings from high-caliber national and
          internationalmusicians, rehearsals, masterclasses, and performance
          opportunities.This programme also facilitates the development of
          essential lifeskills such as, effective communication, teamwork,
          goal-setting, andorganizational skills.
        </p>
        <p style={{ marginTop: "16px" }}>
          The second festival is a mini version of the summer programme. This
          programme is a 4-day opportunity for string players to enhance their
          chamber music skills while also attending classes in technique,
          ensemble and concluding with a concert.
        </p>
        <p style={{ marginTop: "16px" }}>
          Both programmes accept all levels and abilities. Students are paired
          with students of the same level and ability and provided with
          appropriate level music. Violinists can also customize the programme
          to include violin and/or viola.
        </p>
        <p style={{ marginTop: "16px" }}>
          In addition to these programmes, RimuFest hosts a captivating concert
          series. These concerts showcase and promote local and national talent,
          featuring both New Zealand and international male and female
          composers. The series provides culturally diverse events for everyone
          to enjoy, contributing to the growth and appreciation of the arts in
          the Bay of Plenty community. Students can attend any concert free as
          part of their musical development.
        </p>
      </div>
    </>
  );
}
