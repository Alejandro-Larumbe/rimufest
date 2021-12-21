import Link from "next/link";
import { getAllConcertIds, getConcertData } from "../../lib/concerts";
import Date from "../../components/date";
import Hero from "../../components/Hero";
import Button from "../../components/primitives/button";

export async function getStaticProps({ params }) {
  const eventData = await getConcertData(params.id);
  return {
    props: {
      eventData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllConcertIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Event({ eventData }) {
  const {
    address,
    contentHtml,
    date,
    description,
    image,
    locationName,
    runtime,
    subtitle,
    ticketsUrl,
    time,
    title,
    timeDoorsOpen,
    price,
    timeDoorsClose,
    id,
  } = eventData;
  return (
    <>
      <Hero bgImage={image}>
        <h1 className="uppercase text-white">{title}</h1>
        <h2 className="normal-case text-lg text-white">{subtitle}</h2>
      </Hero>

      <div className="p-8 md:w-99 md:mx-auto md:my-32">
        <p className="pt-2 text-lg">
          {Date(date)}, {time}
        </p>
        {timeDoorsOpen && (
          <p>
            {id === "music-in-the-garden-2022"
              ? `Start arriving at ${timeDoorsOpen} to enjoy pizza and wine`
              : `doors open at ${timeDoorsOpen}`}
          </p>
        )}
        {/* {timeDoorsClose && (
          <p>
            {id === "music-in-the-garden-2022"
              ? `Doors close at ${timeDoorsClose}`
              : ""}
          </p>
        )} */}
        <p className="py-2 text-sm">{price}</p>
        <div className="pt-4">
          <p>{locationName}</p>
          <p className="text-base">{address}</p>
        </div>
        {ticketsUrl && (
          <div className="my-8">
            <a target="_blank" href={ticketsUrl}>
              <Button>Buy Tickets</Button>
            </a>
          </div>
        )}
        {id === "taioro" ? (
          <>
            <p className="pt-8">
              TAIORO is an ensemble establisted in 2021 to create and perform a
              niche repertoire combining poetry and music by Aotearoa New
              Zealand authors and composers. This collaboration of spoken word
              poet, violist, cellist and pianist embraces our diverse
              backgrounds and the whenua which we call home.
            </p>
            <p className="mt-2">
              Taioro - The dynamics of sound, one of the main elements of music,
              namely the heaviness of lightness of the sound.
            </p>
            <p className="mt-2">
              Tai - The tide. Representing the ebbs and flows of tangaroa and
              the energy that we hold with the sounds the we create.
            </p>
            <p className="mt-2">
              Oro - To resound or resonate. Also the Kupu used for a musical
              note.
            </p>
            <p className="mt-8">PROGRAMME</p>
            <p className="mt-2">
              RimuFest will have the prvilage of hosting TAIORO in their first
              appearance as an ensemble. Bringing together an acclaimed Maori
              spoken word poet, with violist Donald Maurice and cellist Inbal
              Megiddo. They will be joined for this concert by guest violinist
              Amelia Taylor in a fascinating programme ranging from Beethoven
              through to three of Aotearoa's most significant composers. With
              Alfred Hill born in 1869, Douglas Lilburn born in 1915, and
              Anthony Ritchie from the baby boomer years, this is a collage of
              the country's entire western classical music history. Interwoven
              with the poetry of Sharn Maree Cassady this will be an evening to
              remember.
            </p>
          </>
        ) : id === "music-in-the-garden-2022" ? (
          <>
            <p className="pt-8">
              RimuFest's opening event is a concert like no other. A magical
              evening in the garden with a pizza out of the oven and a beautiful
              glass of pinto. Artist director and founder of RimuFest Amelia
              Taylor will be performing along guest artists. Expect to hear
              music from living composers and to participate in audience
              activities.
            </p>
            <p className="mt-4">
              Come and support you local Chamber music festival.
            </p>
            <p className="mt-4">
              RimuFest is more than this one concert it is a recent innovation,
              developing chamber music festival offering educational programmes
              and a concert series staged in Tauranga. It provides music
              collaboration opportunities for children aged 7 - 18yrs. As part
              of the festival, RimuFest presents accessible live performances to
              introduce people to the joys of classical music through innovation
              programming promoting New Zealand and Mexican composers.{" "}
            </p>
          </>
        ) : (
          <>
            <p className="pt-8">
              Come along and support the students of this years RimuFest chamber
              music festival.
            </p>
            <p className="py-4">
              Showcasing world premiers by Salina Fisher and Ross Carey
              specifically written for RimuFest students.
            </p>
          </>
        )}
      </div>
    </>
  );
}
