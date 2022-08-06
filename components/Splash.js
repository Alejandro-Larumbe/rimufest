import EventCard from "../components/EventCard";
import Image from "next/image";
import useTranslation from "../intl/useTranslation";
import SEO from "../components/SEO";

export default function Splash() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title="Rimufest Chamber Music Festival | Home"
        description="RimuFest Chamber Music Festival, founded by Amelia Taylor and Alejandro Larumbe, offers two programmes a year in Tauranga - a 4-day holiday programme and a 6-day summer programme for beginner to advanced string players between the ages of 7-18. Both these programmes provide music collaboration opportunities. Students can develop effective communication, teamwork, goal-setting and organisational skills, all transferable life skills."
      />
      <div className="flex flex-col justify-center align-center lg:w-128 mx-auto">
        <div className="md:flex md:flex-row">
          <Image
            src="/splash.png"
            layout="intrinsic"
            height={3508}
            width={2480}
          />
          <div className="h-96 md:w-full self-center pt-24 pb-16 md:pl-8 pl-16">
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
          </div>
        </div>
      </div>

      <div className="lg:flex lg:my-24 lg:pl-48 lg:flex-row">
        <div className="bg-cover lg:my:0 my-8 lg:my-0 bg-splash-student w-screen lg:h-96 lg:w-100 h-72"></div>
        <p className="lg:w-80 lg:h-96 lg:text-md px-8 mt-16 lg:mt-0 self-center">
          {t("blurb")}
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
