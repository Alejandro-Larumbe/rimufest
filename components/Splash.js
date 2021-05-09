import EventCard from "../components/EventCard";
import Image from "next/image";
import Button from "../components/primitives/button";

export default function Splash() {
  return (
    <>
      <div className="container md:flex">
        <div className="">
          <Image
            src="/splash3.jpg"
            // layout='fill'
            height={11811 / 5}
            width={4724 / 5}
          />
        </div>
        <section className="w-3/4 text-pink body-font my-36">
          <div className="container px-5 py-24 mx-auto">
            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#A8FCA2"
                className="inline-block w-8 h-8 text-pink mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-2xl">
                Amazing opportunity to work with world-className musicians.
                Wholistic learning and development of skills beyond music.
                Positive and kind teachers.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
              <h2 className="text-pink font-medium title-font tracking-wider text-lg">
                Rimufest Parent
              </h2>
              <p className="text-pink text-md">Term 2 Holiday Program</p>
            </div>
          </div>
        </section>
      </div>

      <div className="md:flex">
        <div className="flex items-center justify-center w-full py-8 md:h-128 md:w-1/2">
          <div className="max-w-xl">
            {/* <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Rimufest <span className="text-indigo-600 dark:text-indigo-400">Mexico Online 2022</span></h2> */}

            <p className="m-8 text-lg text-pink ">
              RimuFest NZ is a one week summer chamber music programme for
              beginner to advanced string players between the ages of 7-18.
              Students come together in a social setting using teamwork and
              leadership skills to create music together. \n Chamber music is
              one of the most beneficial, supportive and fun ways to improve
              your playing. Not only will students refine fundamental skills
              such as rhythm, pitch, timing and dynamics, but chamber music also
              develops creative thinking, co-ordination, memorisation, social
              and emotional skills. The 2021 programme will run from January 3rd
              - 10th in Tauranga. RimuFest includes daily coachings and
              rehearsals as well as private lessons, technique classes,
              masterclasses, rhythm classes and Yoga.
            </p>

            <Button className="" label={"Learn more"} />

            {/* <div className="flex mt-6">
              <a href="#" className="block px-3 py-2 text-xs font-semibold text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">Apply</a>
              <a
                href="#"
                className="block px-3 py-2 mx-4 text-xs font-semibold text-pink transition-colors duration-200 transform bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Learn More
              </a>
            </div> */}
          </div>
        </div>

        <div className="w-full h-72 md:w-3/4 md:h-128 bg-cover bg-splash-info">
          {/* <div className="w-full h-full bg-cover bg-splash-info"> */}
          <div className="w-full h-full bg-black opacity-25"></div>
          {/* </div> */}
        </div>
      </div>

      {/* <section className="overflow-x-auto lg:py-12 lg:flex lg:justify-center"> */}
      <section className="overflow-x-auto mx-auto dark:bg-gray-900 py-56 lg:flex sm:w-4/5 w-full lg:justify-center">
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
      </section>
    </>
  );
}
