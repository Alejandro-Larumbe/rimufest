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
            <h2 className="text-purple text-xl ">
              Featuring Donald Maurice and the Family lockdown quartet
            </h2>
            <h3 className="text-xl ">
              Friday 22nd September, 2023, 7pm @ The Jam Factory
            </h3>
          </div>

          <img src="/garden-concert.jpeg" className="w-full "></img>

          <a
            className="w-full flex justify-center"
            target="_blank"
            href="https://www.eventspronto.co.nz/LockdownQuartet"
          >
            <Button>Get Tickets</Button>
          </a>
          <p>
            During Aotearoa's 2020 pandemic lockdown, Lucy and Gemma, along with
            their parents Rupa Maitra and Donald Maurice, formed the Family
            Lockdown Quartet. They started by performing in live zoom concerts
            for audiences worldwide. Despite the occasional fiery rehearsals,
            the quartet has stayed together and has since played at public
            venues like Te Papa and Wellington's Eat, Drink, Play Festival, in
            addition to having a Youtube channel.
          </p>
          <p>
            The Family Lockdown Quartet is a mesmerizing ensemble that delights
            audiences with their diverse and captivating musical repertoire.
            Their performances strike a perfect balance between classical
            elegance and contemporary flair, encompassing mesmerizing classical
            masterpieces alongside upbeat 90s pop and rock hits. Their music
            transcends genres and captivates listeners of all ages, creating an
            enchanting symphony that resonates deeply with the heart and soul of
            the audience. Whether performing in intimate settings or on grand
            stages, the quartet's passion for music shines through, leaving an
            indelible impression on all who have the pleasure of experiencing
            their harmonious melodies. Prepare to be swept away on a musical
            journey that is both timeless and modern, as the Family Lockdown
            Quartet creates an unforgettable and truly unique musical
            experience.
          </p>

          <div className="flex flex-col mt-32 gap-2">
            <h2 className="text-purple text-3xl ">
              RimuFest holiday programme, 2023 - Student concert
            </h2>
            <p className="text-xl">
              September 26th, 2023, 1:30pm @ Graham Young Youth Theatre,
              Tauranga Boys College
            </p>
            <p className="text-lg ">Enter by donation</p>
          </div>
          <img src="/student-concert-2022.jpeg" className="w-full "></img>

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
            of the faculty. Don't miss this incredible showcase of musical
            talent at the RimuFest student concert, as it inspires and delights
            young and old alike.
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
      </div>
    </>
  );
}
