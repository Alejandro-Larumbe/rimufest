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
  return (
    <>
      <Hero bgImage={image}>
        <h1 className="uppercase text-white">{title}</h1>
        <h2 className="normal-case text-lg text-white">{subtitle}</h2>
      </Hero>

      <div className="p-8 md:w-1/4 md:mx-auto md:my-32">
        <p className="py-2 text-lg">
          {Date(date)}, {time}
        </p>
        {timeDoorsOpen && <p>{`doors open at ${timeDoorsOpen}`}</p>}
        {price === "donation" ? (
          <p>enter by donation</p>
        ) : price === "chose" ? (
          <>
            <b>Choose your ticket price</b>
            <p>Support RimuFest: $25</p>
            <p>Love RimuFest: $40</p>
            <p>RimuFest is Amazing: $55</p>
          </>
        ) : null}
        <div className="py-4">
          <p>{locationName}</p>
          <p>{address}</p>
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
        {contentHtml && (
          <div className="py-4">
            <p className="text-lg">Program</p>
            <div
              className="py-1"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>
        )}
        {id === "donald-maurice" && (
          <>
            <h3 className="text-lg mt-8">About Donald</h3>
            <p>
              Donald Maurice has performed internationally for four decades as a
              solo violist and chamber musician and has given world premieres
              and New Zealand premieres of many works.
            </p>
            <p>
              He has presented at twenty International Viola Congresses. He was
              awarded the Silver Alto Clef by the International Viola Society in
              2000, was made an Honorary Life Member of the American Viola
              Society in 2007, and in 2009 he gave the William Primrose Memorial
              Concert in Utah.
            </p>
            <p>
              He has performed for New Zealand diplomatic missions in Washington
              DC, New York, Ottawa, Berlin, Bangkok, Kuala Lumpur and Warsaw. In
              2014 he was made a Member of the New Zealand Order of Merit.
            </p>
          </>
        )}
      </div>
    </>
  );
}
