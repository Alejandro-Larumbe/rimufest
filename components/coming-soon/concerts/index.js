import ConcertCard from "../../ConcertCard";
import { getSortedConcertsData } from "../../../lib/concerts";
import Hero from "../../Hero";

export async function getStaticProps() {
  const allConcertsData = getSortedConcertsData();
  return {
    props: {
      allConcertsData,
    },
  };
}

export default function Concerts({ allConcertsData }) {
  return (
    <>
      <Hero bgImage="concerts">
        <h1 className="uppercase text-white">Concerts</h1>
      </Hero>
      <div className="flex flex-col md:py-20 items-center p-8">
        {allConcertsData.length ? (
          allConcertsData.map(
            ({
              id,
              title,
              date,
              time,
              imgSrc,
              subtitle,
              ticketsUrl,
              published,
            }) => {
              return (
                published && (
                  <ConcertCard
                    key={id}
                    imgSrc={imgSrc}
                    title={title}
                    date={date}
                    ticketsUrl={ticketsUrl}
                    subtitle={subtitle}
                    time={time}
                    path={`/concerts/${id}`}
                  />
                )
              );
            }
          )
        ) : (
          <h1>No concerts coming up</h1>
        )}
      </div>
    </>
  );
}
