import React from "react";
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
  {
    name: "Martin Roberts",
    bio: [
      "French-New Zealand cellist Martin Roberts grew up in Christchurch, where his passion for music, and particularly chamber music, was first ignited. Martin studied initially at the University of Canterbury before finishing his Bachelor, Honours, and Masters degrees at the University of Auckland, under the guidance of Edith Salzmann. Following these studies, Martin spent three years in Germany with Prof. Mario De Secondi at the Staatliche Hochschule für Musik Trossingen, where he furthered his education in both solo performance and chamber music. To further enhance his training, Martin has attended many music festivals such as the Academy International d’Été De Nice (France), the Internationale Sommerakademie Schwetzingen-Worms (Germany), and the Tuckamore Music Festival (Canada).",
      "Martin has performed up and down the country within orchestras and chamber groups, most notably touring for Chamber Music New Zealand alongside the New Zealand String Quartet. While overseas, he was fortunate enough to join the Württembergische Philharmonie Reutlingen and regional youth orchestras, which saw him perform all over Germany, as well as in Switzerland, Italy, and China. He is also an artist for the Lincoln Center Stage programme aboard Holland America Line, based in New York City.",
      "Since his return to New Zealand, Martin has been teaching and performing, both in orchestral settings as well as with his string quartet, the Arcus Quartet.",
    ],
    picture: "martin.jpg",
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
          RimuFest NZ 2022 Term 3 Holiday Programme
        </h1>
      </Hero>
      <div className="md:w-101 md:mx-auto md:my-20 p-8">
        <div className="py-4">
          <p className="text-2xl font-extrabold">
            RimuFest NZ 2022 Term 3 Holiday Programme
          </p>
          <p className="text-lg">1st - 4th October 2022</p>{" "}
          <div className="py-4 text-base">
            <p className="mb-4">**Last date to register: 1st of September</p>
          </div>
          <a href="https://forms.gle/So1LkY1XCzJbp8EG6" target="_blank">
            <Button>Apply here</Button>
          </a>
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
            During the 2022 four-day holiday programme, students will
            participate in the RimuFest ensemble (led by Donald and Martin),
            chamber music, technique classes and the student concert.
          </p>
        </div>
        <div className="py-8 text-base">
          <p>
            <strong>RimuFest Chamber Music Festival</strong>, founded by Amelia
            Taylor and Alejandro Larumbe, offers two programmes a year in
            Tauranga - a 4-day holiday programme and a 6-day summer programme
            for beginner to advanced string players between the ages of 7-18.
            Both these programmes provide music collaboration opportunities.
            Students can develop effective communication, teamwork, goal-setting
            and organisational skills, all transferable life skills.
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
