import Image from "next/image";
import Date from "../components/date";
import Button from "./primitives/button";

export default function ParagraphWithImage(props) {
  const { imgSrc, title, title2, p, ticketsUrl, path, date } = props;

  // console.log(imgSrc)

  return (
    <>
      <section className="bg-gray-100 dark:bg-gray-900 lg:py-12 align-center ">
        <div className="my-8 bg-pink-100 border-4 border-pink rounded-lg w-96 lg:w-100 dark:bg-gray-800 ">
          {/* <div className="lg:w-1/2">
            <div
              className="h-64 bg-cover lg:rounded-sm lg:h-full"
              style={{
                backgroundImage: "url('/concerts/studentConcert.jpeg')",
              }}
            ></div>
          </div> */}

          <div className="max-w-xl px-6 py-12 lg:max-w-5xl l">
            <h2 className="text-3xl uppercase text-pink font-title font-bold md:text-4xl">
              {title}
              <span className="text-indigo-600 dark:text-indigo-400">
                {title2}
              </span>
            </h2>
            <h3 className="text-lg font-extrabold text-pink md:text-l">
              Ft The Harikoa Collective & guest artists
            </h3>
            <h3 className="text-md mt-2 font-bold text-pink md:text-l">
              {Date(date)}
            </h3>

            <div className="mt-8">
              <Button label="tickets" />
              <Button label="More info..." />
              {/* <button class="h-10 px-5 mr-5 text-pink transition-colors duration-150 border border-pink rounded-lg focus:shadow-outline hover:text-green">
                Tickets
              </button>
              <button class="h-10 px-5 text-pink transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-white">
                More...
              </button> */}
              {/* <a href={path} className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">Tickets</a> */}
              {/* <a href={ticketsUrl} className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">Details</a> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
