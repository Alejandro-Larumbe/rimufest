import React from "react";
import { useRouter } from "next/router";
import Hero from "../components/Hero";
import Button from "../components/primitives/button";
import SEO from "../components/SEO";

const chevronRight = (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={24}
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
  "Faculty and student concerts: Learn by watching professionals and participating yourself",
  "Daily Chamber Coaching: Work with our expert coaches in daily sessions, both in small groups and larger ensembles",
  " Chamber Music Masterclasses: Focus on performance techniques and public speaking",
];

const artists = [
  {
    name: "Alejandro Larumbe",
    picture: "alejandro.jpeg",
    bio: [
      "Alejandro Larumbe Martínez (RimuFest co-founder) is a violinist and conductor based in San Diego, California. Alejandro has performed as a violinist in the USA and Mexico with orchestras such as the Louisiana Philharmonic, Baton Rouge Symphony Orchestra, Lansing Symphony and the Miami Symphoni Orchestra.",
      "Alejandro started his violin studies at age five in his native Mexico. He received a bachelor’s degree in violin performance from Florida International University, and a masters and doctoral degrees in orchestral conducting studying with Carlos Riazuelo at Louisiana State University.",
    ],
  },
  {
    name: "Jesbery Hartono-Hall",
    bio: [
      "Jesbery Hartono-Hall holds a Master of Music with First Class Honours from the University of Auckland, New Zealand. She was awarded scholarships and funding such as the Anne Bellam and the Wallace Foundation to further her studies in Europe.",
      "Jesbery has played for and worked with many renowned artists such as cellists Daniel Müller-Schott, Torleif Thedéen, Alexander Gebert, Clemens Krieger (Dresdner Philharmonie), Dinar Enikeev (Robert Schumann Philharmonie), Ramón Jaffé, Mario di Secondi and Elisabeth Kufferath of the Tetzlaff String Quartet, amongst many others in Germany, America and New Zealand.",
      "She has played in prestigious venues around Europe, most notibly the Berlin Konzerthaus and Predjama Castle, among many others. Jesbery has also played in film soundtracks and other music videos in New Zealand. A founding member of the prize-winning Akato Piano Trio, the group has also been successful in New Zealand and Europe.",
      "Jesbery is an active orchestral musician who performs regularly with the Christchurch Symphony Orchestra, Auckland Philharmonia Orchestra and the Royal New Zealand Ballet, and has also worked with the Auckland Chamber Orchestra, Bach Musica NZ, Orchestra Wellington and Trust Waikato Symphony Orchestra.",
      "Jesbery now teaches at the Epsom Music School and also runs a private cello studio of which all who have sat their ABRSM grade exams received marks with Distinction.",
    ],
    picture: "jesbery.jpeg",
  },
  {
    name: "Callum Hall",
    bio: [
      "Auckland cellist Callum Hall holds a Doctorate of Musical Arts from Michigan State University, where he studied as a teaching assistant with Suren Bagratuni.",
      "Callum has been on contract with the Auckland Philharmonia Orchestra since 2017. Prior to his studies in the USA he completed his Masters degree in cello performance at the University of Waikato, studying with James Tennant.",
      "Callum has taken part in masterclasses with Gautier Capuçon, Alexander Ivashkin, Laurence Lesser, Leslie Parnas, and Torleif Thedéen.",
      "In 2014 Callum toured for Chamber Music New Zealand as a member of the Rangitoto Piano Trio, which was recorded live in concert for broadcast on Radio New Zealand, and he recently recorded the six Michl bassoon quartets for Atoll Records with his two sisters and bassoonist Ben Hoadley.",
      "Callum currently teaches at the Epsom Music School and has taught at the Pettman National Junior Academy of Music and the Albany School of Music. He has also played regularly in orchestras such as the Auckland Chamber Orchestra, Opus Chamber Orchestra, Jackson Symphony, Lansing Symphony and the West Michigan Symphony.",
    ],
    // picture: "callum.jpeg",
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
          <p className="text-3xl text-pink font-extrabold">
            RimuFest NZ 2024 Term 3 Holiday Programme
          </p>
          <p className="text-lg mt-2">September 29th → October 3rd</p>{" "}
          {/* <p className="text-lg">10am - 3:30pm</p>{" "} */}
          <p className="text-lg">Open to: Violin, Viola and Cello</p>{" "}
          <div className="py-4 text-base">
            <p className="mt-4">**Applications open July 1st</p>
            <p className="mt-1">**Applications close August 24th</p>
            <p className="mt-1">**Tuition: $260</p>
            <a
              className="mt-6 block"
              href="https://forms.gle/ySSu5CJXZU6VNToD6"
            >
              <Button>Apply</Button>
            </a>
          </div>
          {/* <a href="https://forms.gle/zD5Z1DgdNafAkzWv8 ">
            <Button>Apply here</Button>
          </a> */}
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
            The five-day program includes engaging activities such as ensemble
            rehearsals, chamber music sessions, technique classes, and ends with
            a student concert.
          </p>
        </div>
        <div className="text-base">
          <ul className={["text-md mt-2 flex flex-col gap-2"].join(" ")}>
            {bulletPoints.map((item) => (
              <li className="flex align-middle gap-2">
                {chevronRight}
                {item}
              </li>
            ))}
          </ul>
        </div>

        <h2
          className="mt-8 text-purple"
          style={{ fontSize: "24px", marginBottom: "24px" }}
        >
          Faculty
        </h2>

        {artists.map(({ name, bio, picture }) => {
          return (
            <div key={name}>
              <h3 className="text-pink text-xl my-6">{name}</h3>
              {!!picture && (
                <img
                  src={`/${picture}`}
                  className="w-full md:w-auto md:h-99"
                  style={{
                    margin: "24px 0 24px",
                  }}
                />
              )}
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
