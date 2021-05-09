import Concert from "../../components/Concert";
import { getSortedConcertsData } from "../../lib/concerts";
import Image from "next/image";

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
      <h1 className="text-yellow font-bold font-title text-6xl">CONCERTS</h1>
      <div className="container  ">
        {/* <divl
        className="fixed h-100 bg-no-repeat bg-con
        certs-background "
      ></div> */}
        {/* <div className="w-fukk"> */}
        <div className=" z-0">
          <Image
            src="/concertBackground.jpg"
            width={1920 * 0.75}
            height={1080 * 0.75}
          />
        </div>
        {/* </div> */}
        {/* <section className="w-full z-1 absolute h-64 md:full md:h-100">
        <div className="w-full  h-full bg-cover bg-splash-info">
        <div className="w-full z-1 h-full bg-black opacity-25"></div>
        </div>
      </section> */}

        {/* <div className="md:flex">
        <div className="flex items-center justify-center w-full px-6 py-8 md:h-128 md:w-1/2">
        <div className="max-w-xl">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Build Your New <span className="text-indigo-600 dark:text-indigo-400">Concerts</span></h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates.</p>
        </div>
        </div>

        <div className="w-full h-64 md:w-1/2 md:h-auto">
        <div className="w-full h-full bg-cover" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80)" }}>
        <div className="w-full h-full bg-black opacity-25"></div>
        </div>
        </div>
      </div> */}

        <div className="z-50">
          {allConcertsData.map((data) => {
            const { id, title, date, imgSrc, subtitle } = data;
            return (
              <Concert
                imgSrc={imgSrc}
                title={title}
                date={date}
                ticketsUrl="https://www.eventbrite.com/e/the-2nd-annual-national-antiracist-book-festival-tickets-94478727417?aff=ebdssbcitybrowse"
                path={`/concerts/${id}.jpeg`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
