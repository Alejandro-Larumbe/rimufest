import EventCard from "../components/EventCard";
import Image from "next/image";
import useTranslation from "../intl/useTranslation";

export default function Splash() {
  const { t } = useTranslation();

  return (
    <>
      <div className="container w-full mx-auto">
        <div className="md:flex md:flex-row-reverse">
          <div className="">
            <Image
              src="/splash.png"
              layout="intrinsic"
              height={3508}
              width={2480}
            />
          </div>
          <section className="w-3/4 hidden md:block mx-auto body-font md:my-36">
            <div className="container px-5 py-24 mx-auto">
              <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#A8FCA2"
                  className="inline-block w-8 h-8 mb-8"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed md:leading-relaxed text-lg md:text-2xl">
                  Amazing opportunity to work with world-class musicians.
                  Wholistic learning and development of skills beyond music.
                  Positive and kind teachers.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                <h2 className="font-medium title-font tracking-wider text-lg">
                  Rimufest Parent
                </h2>
                <p className="text-md">Term 2 Holiday Program</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="p-8">
        {/* <h2 className="text-2xl font-semibold text-gray-800 text-white md:text-3xl">Rimufest <span className="text-indigo-600 text-indigo-400">Mexico Online 2022</span></h2> */}

        <p className="">Rimufest</p>
        <p className="">is a chamber music festival </p>
        <p className="">and academy</p>
        <p className="">we inspire</p>
        <p className="">the youth</p>
        {/* <p className="mb-8">{t("blurb")}</p> */}

        {/* <div className="flex mt-6">
              <a href="#" className="block px-3 py-2 text-xs font-semibold text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">Apply</a>
              <a
              href="#"
              className="block px-3 py-2 mx-4 text-xs font-semibold text-pink transition-colors duration-200 transform bg-gray-200 rounded-md hover:bg-gray-300"
              >
              Learn More
              </a>
            </div> */}
        {/* <Button label={"Learn more"} /> */}
      </div>
      <div className="h-100 bg-no-repeat bg-contain  bg-splash-student"></div>

      {/* <section className="overflow-x-auto lg:py-12 lg:flex lg:justify-center"> */}
      {/* <section className="overflow-x-auto mx-auto bg-gray-900 py-56 lg:flex sm:w-4/5 w-full lg:justify-center">
        <h1 className="text-8xl text-green">Festivals</h1>
        <EventCard
          imgSrc="mx"
          imgAlt="Rimufest MX-icon 2021"
          title="RimuFest MX Online 2021"
          p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!"
          // href='/events/'
        />

        <EventCard
          imgSrc="nz"
          imgAlt="Holliday Program"
          title="Holiday Program"
          p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!"
          // href='/events/'
        />

        <EventCard
          imgSrc="nz"
          imgAlt="Rimufest NZ"
          title="RimuFest NZ 2022"
          p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!"
          // href='/events/'
        />
      </section> */}
    </>
  );
}
