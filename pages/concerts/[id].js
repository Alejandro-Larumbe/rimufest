import { useRouter } from "next/router";
import React from "react";
import SEO from "../../components/SEO";
import Button from "../../components/primitives/button";

const concertsData = [
  {
    id: "mixtape-vol-1",
    date: "September 29th, 1:30pm",
    title: "Chamber Music Series: Faculty concert",
    subtitle: "Mixtape Vol. 1: Music to Meet Again",
    location: "St. Peter's Church, Mount Maunganui, NZ",
    price: "Adult $35, Student $25",
    image: "mixtapeVol1",
    image2: "mixtapeVol1List",
    description: [
      "Come find your seat, press play, and let the music take over. We’ve curated this mixtape just for you—a selection of fresh and captivating chamber music by some of the world’s most exciting composers.",
      "Each piece, interpreted with exquisite artistry by our Rimusfest Artists, unfolds like a story, a memory, a shared emotion—a place to meet again. Let the music be your guide as you embrace the moment.",
      "Music by Salina Fisher, Gabriela Lena Frank, Caroline Shaw, Eduardo Gamboa, Peter Gregson, Giovanni Piacentini, and Paul Wiancko.",
    ],
    performers: [
      "Alejandro Larumbe, violin",
      "Benjamin Harrison, viola",
      "Jesbery Hartono-Hall, cello",
      "Callum Hall, cello",
    ],
  },
];

export default function Concert() {
  const router = useRouter();
  const { id } = router.query;

  const concert = concertsData.find((c) => c.id === id);

  if (!concert) {
    return <div>Concert not found</div>;
  }

  return (
    <>
      <SEO
        title={`Rimufest Chamber Music Festival | ${concert.title}`}
        description={concert.description}
      />
      <div className="p-24" />
      <div className="w-screen h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <img
          src={`/${concert.image}.png`}
          alt={concert.title}
          className="w-full h-auto object-cover"
        />
        <img
          src={`/${concert.image}.png`}
          alt={concert.title}
          className="w-full h-auto object-cover hidden sm:block"
        />
        <img
          src={`/${concert.image}.png`}
          alt={concert.title}
          className="w-full h-auto object-cover hidden md:block"
        />
      </div>

      <div className="md:w-101 md:mx-auto md:mb-20 mt-8 p-4 flex flex-col gap-1">
        <h1 className="text-pink text-5xl">{concert.title}</h1>
        {concert.subtitle && (
          <h2 className="text-3xl mt-4">{concert.subtitle}</h2>
        )}
        <p className="text-2xl ">{concert.date}</p>
        <p className="text-xl">{concert.location}</p>
        <p className="text-xl">Tickets: {concert.price}</p>
        {/* <div className="mt-4">
          <Button>
            <a href="#">Book Tickets</a>
          </Button>
        </div> */}

        {concert.description.map((paragraph, index) => (
          <p key={index} className={index === 0 ? "mt-4" : "mt-2"}>
            {paragraph}
          </p>
        ))}

        <h3 className="text-xl mt-6 mb-2">Performers</h3>
        <div>
          {concert.performers.map((performer, index) => (
            <p key={index} className="">
              {performer}
            </p>
          ))}
        </div>

        <img
          src={`/${concert.image2}.png`}
          alt={concert.title}
          className="w-full pt-4 h-auto object-cover"
        />
      </div>
    </>
  );
}
