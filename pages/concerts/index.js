import ConcertCard from "../../components/ConcertCard";
import { getSortedConcertsData } from "../../lib/concerts";

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
      <div className="justify-end bg-center flex flex-col bg-opacity-10 w-screen h-96 bg-concerts bg-cover">
        <div className="p-8">
          <p className="text-white text-3xl uppecase">Concerts</p>
        </div>
      </div>
      <div className="flex flex-col p-8">
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
