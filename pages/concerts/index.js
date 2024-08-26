import Hero from "../../components/Hero";
import React from "react";
import Button from "../../components/primitives/button";
import SEO from "../../components/SEO";

const concertsData = [
  {
    date: "September 29th, 6:30pm",
    title: "Chamber Music Series: Faculty concert",
    href: "mixtape-vol-1",
    subtitle: "Mixtape Vol. 1: Music to Meet Again",
    price: "Adult $35, Student $25",
    image: "musicToMeetAgain",
    location: "St. Peter's Church, Mount Maunganui, NZ",
  },
  {
    date: "October 3rd, 1:30pm",
    title: "Student concert",
    price: "Adults $10, Student free",
  },
  {
    date: "January 12th, 1pm",
    title: "University mentors concert",
    price: "Adult $35, Student $25",
  },
  {
    date: "January 14th, 1pm",
    title: "Student concert",
    price: "Adults $10, Student free",
  },
];
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

      <div className="md:w-101 md:mx-auto md:my-20 p-8 flex flex-col gap-6">
        <h1 className={"text-pink text-5xl"}>2025 Concert Series</h1>
        {concertsData.map(
          ({ date, title, price, image, subtitle, href, location }) => (
            <div key={title} className="my-4">
              <h2 className={"text-4xl"}>{title}</h2>
              <h2 className={"text-3xl mt-1"}>{subtitle}</h2>
              <p className="text-2xl mt-2">{date}</p>
              {location && <p className="text-xl">{location}</p>}
              <p>Tickets: {price}</p>
              {image && href && (
                <a href={`/concerts/${href}`}>
                  <div
                    style={{
                      backgroundImage: `url("/${image}.png")`,
                      backgroundRepeat: "no-repeat",
                      paddingTop: "56.25%", // 16:9 aspect ratio
                    }}
                    className={`w-full mt-4 bg-contain bg-center mb-4`}
                  ></div>
                </a>
              )}
            </div>
          )
        )}
      </div>
    </>
  );
}
