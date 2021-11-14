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
    id,
  } = eventData;
  console.log(image);
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
        {timeDoorsOpen && <p>{`doors open at ${timeDoorsOpen}`}</p>}
        <p className="py-2 text-sm">{price}</p>
        <div className="py-4">
          <p>{locationName}</p>
          <p className="text-base">{address}</p>
        </div>
        {ticketsUrl && (
          <a
            target="_blank"
            href="https://www.eventbrite.com/e/concert-featuring-donald-maurice-tickets-154060560283"
          >
            <Button>Buy Tickets</Button>
          </a>
        )}
        {description && <p className="py-4">{description}</p>}
      </div>
    </>
  );
}
