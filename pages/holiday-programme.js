import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Hero from "../components/Hero";
import Button from "../components/primitives/button";
import SEO from "../components/SEO";

const artists = [
  {
    name: "Donald Maurice",
    bio: [
      "Donald was until retiring in 2020 Professor of Music at Victoria University of Wellington. He has performed internationally for four decades as a solo violist and chamber musician and has given world premieres and New Zealand premieres of many works. He has presented at twenty International Viola Congresses.",
      "He was awarded the Silver Alto Clef by the International Viola Society in 2000, was made an Honorary Life Member of the American Viola Society in 2007, and in 2009 he gave the William Primrose Memorial Concert in Utah. He has performed for New Zealand diplomatic missions in Washington DC, New York, Ottawa, Berlin, Bangkok, Kuala Lumpur and Warsaw. In 2014 he was made a Member of the New Zealand Order of Merit.",
      "He has performed for New Zealand diplomatic missions in Washington DC, New York, Ottawa, Berlin, Bangkok, Kuala Lumpur and Warsaw. In 2014 he was made a Member of the New Zealand Order of Merit.",
    ],
    picture: "donald-maurice1.jpeg",
  },
];

export default function AnnualNZ2022() {
  const router = useRouter();
  return (
    <>
      <SEO
        title="Rimufest Chamber Music Festival | Term 3 Holiday Programme 2022"
        description="RimuFest Chamber Music Festival, founded by Amelia Taylor and Alejandro Larumbe, offers two programmes a year in Tauranga - a 4-day holiday programme and a 6-day summer programme for beginner to advanced string players between the ages of 7-18. Both these programmes provide music collaboration opportunities. Students can develop effective communication, teamwork, goal-setting and organisational skills, all transferable life skills."
      />
      <Hero bgImage="holiday-programme">
        <h1 className="uppercase text-white">
          RimuFest NZ 2024 Term 3 Holiday Programme
        </h1>
      </Hero>
      <div className="md:w-101 md:mx-auto md:my-20 p-8">
        <div className="py-4">
          <p className="text-2xl font-extrabold">
            RimuFest NZ 2024 Term 3 Holiday Programme
          </p>
          <p className="text-lg">September 23rd → 26th</p>{" "}
          <p className="text-lg">10am - 3:30pm</p>{" "}
          <p className="text-lg">Open to: Violin, Viola and Cello</p>{" "}
          <div className="py-4 text-base">
            <p className="mb-4">**Last date to register: 1st of September</p>
          </div>
          <a href="https://forms.gle/zD5Z1DgdNafAkzWv8 ">
            <Button>Apply here</Button>
          </a>
          {/* <p className="text-">* Last day to apply: November 20th</p> */}
        </div>
        <div className="py-4 text-base">
          <p>
            The upcoming RimuFest Holiday Programme offers a chance for
            violinists, violists, and cellists to enhance their chamber music
            skills and techniques.{" "}
            <span className="text-pink">Students aged 7 to 18</span>, regardless
            of their level or ability, are encouraged to apply.
          </p>
        </div>
        <div className="py-4 text-base">
          <p>
            The four-day program includes engaging activities such as ensemble
            rehearsals, chamber music sessions, technique classes, and ends with
            a student concert.
          </p>
        </div>
        <div className="py-8 text-base">
          <p>
            <span className="text-pink">Customise</span> your experience:
            violinists can explore both violin and viola. - Let us know in your
            application form.
          </p>
          <p>
            <span className="text-pink">RimuFest Chamber Music Festival</span>,
            co-founded by Amelia Taylor and Alejandro Larumbe, presents two
            annual programs in Tauranga: a 4-day holiday program and a 6-day
            summer program. Designed for ages 7-18, these inclusive programs
            foster music collaboration, enabling students to cultivate essential
            life skills such as communication, teamwork, goal-setting, and
            organization.
          </p>
          <p>
            Want to learn more about RimuFest and the different classes students
            are involved in? Check out our{" "}
            <Link href="/about">
              <a className="text-pink">about page</a>
            </Link>
            .
          </p>
        </div>

        <h2 style={{ fontSize: "24px", marginBottom: "24px" }}>Faculty</h2>

        {artists.map(({ name, bio, picture }) => {
          return (
            <div key={name}>
              <h3 style={{ fontSize: "20px", margin: "24px 0 24px" }}>
                {name}
              </h3>
              <img
                src={`/${picture}`}
                className="w-full md:w-auto md:h-99"
                style={{
                  margin: "24px 0 24px",
                }}
              />
              {bio.map((paragraph) => (
                <p key={paragraph} style={{ marginTop: "8px" }}>
                  {paragraph}
                </p>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}
