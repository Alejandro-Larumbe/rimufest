import Head from "next/head";
import { getAllConcertIds, getConcertData } from "../../lib/concerts";
import Date from "../../components/date";
import Hero from "../../components/Hero";

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
    donation,
  } = eventData;
  return (
    <>
      <Hero bgImage={image}>
        <h1 className="uppercase">{title}</h1>
        <h2 className="normal-case text-lg">{subtitle}</h2>
      </Hero>

      <div className="p-8">
        <p className="py-2 text-lg">
          {Date(date)}, {time}
        </p>
        {timeDoorsOpen && <p>{`doors open at ${timeDoorsOpen}`}</p>}
        <div className="py-4">
          <p>{locationName}</p>
          <p>{address}</p>
        </div>
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
      </div>
    </>
  );
}
