import Image from "next/image";
import SEO from "../components/SEO";
import Button from "./primitives/button";

export default function Splash() {
  return (
    <>
      {/* <div className="min-h-32 md:min-h-24 bg-purple flex flex-col p-4 md:p-8 gap-4 justify-between	">
        <div className="m-auto flex gap-2 content-center flex-col  md:flex-row  text-center md:text-left text-white">
          <p className="self-center mr-4 text-sm"> Rimufest Concerts Series</p>
          <a
            className="self-center uppercase text-sm text-pink hover:font-extrabold	 transition-colors duration-150 hover:underline decoration-8 underline-offset-4"
            href="/concerts/faculty-2024"
          >
            More info
          </a>
        </div>
        <div className="m-auto flex gap-2 content-center flex-col md:flex-row  text-center md:text-left text-white">
          <p className="self-center mr-4 text-sm">
            Annual Festival NZ 2024, Jan - 4th - 9th
            <br />
          </p>

          <a
            className="self-center uppercase text-sm text-pink hover:font-extrabold	 transition-colors duration-150 hover:underline decoration-8 underline-offset-4"
            target="_blank"
            href="https://docs.google.com/forms/d/1knrJ838H9bIyp7q8t95kWpab0JF64vYfguKeGXOta5I/edit?pli=1"
          >
            Apply now
          </a>
        </div>
      </div> */}
      <SEO
        title="Rimufest Chamber Music Festival | Home"
        description="RimuFest Chamber Music Festival, founded by Amelia Taylor and Alejandro Larumbe, offers two programmes a year in Tauranga - a 4-day holiday programme and a 6-day summer programme for beginner to advanced string players between the ages of 7-18. Both these programmes provide music collaboration opportunities. Students can develop effective communication, teamwork, goal-setting and organisational skills, all transferable life skills."
      />
      <div className="flex flex-col md:flex-row items-center">
        {/* <Image
          src="/splash.png"
          layout="intrinsic"
          height={3508 * 0.4}
          width={2480 * 0.4}
        /> */}
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
          <Image
            src="/splash.jpeg"
            alt="Hero Image"
            layout="fill"
            objectFit="cover" // Optional: Specifies how the image should be fitted within its container
          />
          <div className="absolute flex flex-col items-end gap-4 right-24 text-right top-56">
            <p className="text-6xl">Annual Festival NZ 2024</p>
            <p className="text-4xl">Jan - 4th - 9th</p>
            {/* <Button> */}
            <a
              className="uppercase text-sm lg:text-xl text-pink hover:font-extrabold	 transition-colors duration-150 hover:underline decoration-8 underline-offset-4"
              target="_blank"
              href="https://docs.google.com/forms/d/1knrJ838H9bIyp7q8t95kWpab0JF64vYfguKeGXOta5I/edit?pli=1"
            >
              Apply now
            </a>
            {/* </Button> */}
          </div>
        </div>
        {/* <div className="h-96 md:w-full self-center pt-24 pb-16 ">
          <div className="flex items-center">
            <p className="text-4xl mr-2">Rimufest is</p>
          </div>
          <div className="flex items-center">
            <p className="text-xl mr-2">a chamber music festival</p>
          </div>
          <div className="flex items-center">
            <p className="text-3xl">& academy</p>
          </div>
          <div className="flex items-center">
            <p className="text-4xl text-pink">we inspire</p>
          </div>
          <p className="text-2xl">the youth</p>
        </div> */}
      </div>
      <p className="max-w-xl mx-auto my-72 self-center text-center text-xl">
        RimuFest envisions an inclusive and innovative chamber music festival,
        empowering young musicians to excel. We provide high-quality music
        tuition, promoting teamwork, leadership, and a diverse repertoire.
        Through captivating performances and community engagement, we aim to
        inspire and make a lasting impact on the musical journey of young
        talents in the Bay of Plenty and beyond.
      </p>

      <div className="flex p-6  flex-col lg:flex-row items-center justify-center gap-12">
        <Image
          src="/cofounders.jpg"
          layout="intrinsic"
          width={3637 * 0.12}
          height={5465 * 0.12}
        />
        <p className="max-w-lg lg:w-96 text-lg text-center text-md">
          <strong>RimuFest Chamber Music Festival</strong> is a non profit
          organization co-founded by Amelia Taylor and Alejandro Larumbe,
          presents two annual programs in Tauranga: a 4-day holiday program and
          a 6-day summer program. Designed for ages 7-18, these inclusive
          programs foster music collaboration, enabling students to cultivate
          essential life skills such as communication, teamwork, goal-setting,
          and organization.
        </p>
      </div>

      <section className="w-3/4 hidden md:block mx-auto body-font md:my-36">
        <div className="container px-5 py-24 mx-auto">
          <div className="md:w-99 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#A8FCA2"
              className="inline-block w-8 h-8 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed md:leading-relaxed text-lg md:text-2xl">
              Amazing opportunity to work with world-class musicians. Wholistic
              learning and development of skills beyond music. Positive and kind
              teachers.
            </p>

            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="font-medium title-font tracking-wider text-lg">
              Rimufest Parent
            </h2>
            <p className="text-md">Term 2 Holiday Program</p>
          </div>
        </div>
      </section>
    </>
  );
}
