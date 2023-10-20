import React from "react";
import Hero from "../components/Hero";
import SEO from "../components/SEO";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Button from "../components/primitives/button";

const SectionHeader = ({ children }) => (
  <p className="text-purple text-xl font-thin mt-8">{children}</p>
);

const artists = [
  { name: "Joella Pinto", title: "Chamber music coach", instrument: "violin" },
  { name: "Martin Roberts", title: "Chamber music coach", instrument: "cello" },
  { name: "Yotam Levy", title: "Chamber music coach", instrument: "cello" },
  {
    name: "Amelia Taylor",
    title: "Chamber music coach",
    instrument: "violin/viola",
  },
  {
    name: "Alejandro Larumbe",
    title: "Orchestra conductor/Chamber music coach",
    instrument: "conductor/violin/viola",
  },
  {
    name: "Salina Fisher",
    title: "Composer/Chamber music coach",
    instrument: "composer/violin",
  },
];

const instructions = [
  "Go to",
  "Sign in or create an account.",
  "Click Upload.",
  "Set privacy setting to ‘unlisted’ (this is very important).",
  "Upload your audition clip. You will need to copy the video URL (link) and enter it into the application form.",
];

const highlights = [
  {
    label: "Customisation",
    paragraph:
      "Customisation: Students may opt to participate in both violin and viola if desired. We provide loaner violas to accommodate students interested in exploring this.",
  },
  {
    label: "Orchestra Participation",
    paragraph:
      "Everyone is involved in orchestra. For those not yet ready for chamber music, orchestra will be their only session.",
  },
  {
    label: "University Mentors",
    paragraph:
      "Each group will be assigned a university mentor who will help guide rehearsals and enhance group dynamics.",
  },
  {
    label: "Tailored Curriculum",
    paragraph:
      " We offer a curated program for younger students to ensure a balanced and enjoyable experience.",
  },
  {
    label: "Ensemble Work",
    paragraph:
      "Students collaborate in small groups, including trios, quartets, or quintets, guided by experienced coaches.",
  },
  {
    label: "Chamber Concert Series:",
    paragraph:
      "Enjoy inspiring performances by our esteemed faculty and guest artists.",
  },
  {
    label: "Daily Coaching",
    paragraph:
      "Benefit from daily coaching sessions and rehearsals to refine your ensemble skills.",
  },
  {
    label: "Masterclasses",
    paragraph:
      "Participate in enriching masterclasses to elevate your performance.",
  },
  {
    label: "Alexander Technique",
    paragraph: "Experience specialized training tailored to string students.",
  },
];

const fellowshipOfferings = [
  "Chamber rehearsal time with other students in the fellowship programme",
  "Daily coachings",
  "Mentor chamber music students through their rehearsals",
  "Performance opportunities ",
  "Lodging by host ",
  "Most meals included ",
];

export default function AnnualNZ2022() {
  return (
    <>
      <SEO
        title="Rimufest Chamber Music Festival | Annual NZ 2024"
        description="RimuFest Chamber Music Festival, founded by Amelia Taylor and Alejandro Larumbe, offers two programmes a year in Tauranga - a 4-day holiday programme and a 6-day summer programme for beginner to advanced string players between the ages of 7-18. Both these programmes provide music collaboration opportunities. Students can develop effective communication, teamwork, goal-setting and organisational skills, all transferable life skills."
      />
      <Hero bgImage="nz-2023">
        <h1 className="uppercase text-white">Annual New Zealand 2024</h1>
      </Hero>
      <div className="md:w-100 md:mx-auto md:my-20 p-8">
        <div className="py-4">
          <p className="text-3xl font-extrabold text-pink">
            Rimufest 5th Annual Festival
          </p>
          <p className="text-lg  mt-4">4th-9th January 2024, 9am - 3pm</p>{" "}
          <p className="text-lg ">Tauranga, NZ</p>{" "}
          <p className="text-lg ">
            Open to Violin, Viola, Cello, Double Bass, and Piano
          </p>{" "}
          <p className="mt-4">* Last day to apply: November 12th, 2023</p>
        </div>
        <div className="mt-4 mb-12">
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/1knrJ838H9bIyp7q8t95kWpab0JF64vYfguKeGXOta5I/edit?pli=1"
          >
            <Button>Apply now</Button>
          </a>
        </div>
        <p className="text-purple text-xl font-thin mt-8">Program highlights</p>
        <ul className="text-md mt-2 ">
          {highlights.map((highlight) => (
            <li
              className="mt-6"
              style={{ display: "flex", alignItems: "flex-start" }}
            >
              <div className="text-pink">
                <ChevronRightIcon className="w-6 h-6 font-bold" />
              </div>
              <span className="text-base ml-1">
                <span className="text-pink">{highlight.label}: </span>{" "}
                {highlight.paragraph}
              </span>
            </li>
          ))}
        </ul>
        <SectionHeader>The audition process</SectionHeader>
        <p className="mt-8">
          {
            "Please provide a YouTube link which demonstrates your musical ability (5-minute maximum)."
          }
        </p>
        <p className="mt-2">* Auditions will only be accepted via YouTube.</p>
        <p className="mt-8">Follow these instructions:</p>
        <ul className="text-md mt-2 ">
          {instructions.map((instruction, i) => (
            <li
              className="mt-2"
              style={{ display: "flex", alignItems: "flex-start" }}
            >
              <div className="text-pink mr-2">{i + 1})</div>
              <span className="text-base ml-1">
                {/* <span className="text-pink">{highlight.label}: </span>{" "} */}
                {instruction}{" "}
                {i === 0 && (
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={"https://www.youtube.com/"}
                    className="text-blue"
                  >
                    youtube.com.
                  </a>
                )}
              </span>
            </li>
          ))}
        </ul>
        <a className="w-full flex justify-center mt-16" href="/learn-more">
          <Button>Learn more...</Button>
        </a>
        <p className="text-purple text-xl font-thin mt-8">
          String Fellowship Program
        </p>
        <p className="text-pink text-md  mt-2">4th-9th January 2024</p>{" "}
        <p className="mt-4">
          The RimuFest String Fellowship Program is a course for university
          music students early in their career. The programme will help to
          enhance rehearsal techniques, hone your artistry, gain performing and
          teaching experience.
        </p>
        <p className="mt-4">The programme includes:</p>
        <ul className="text-md mt-2 ">
          {fellowshipOfferings.map((item) => (
            <li
              className="mt-2"
              style={{ display: "flex", alignItems: "flex-start" }}
            >
              <div className="text-pink">
                <ChevronRightIcon className="w-6 h-6 font-bold" />
              </div>
              <span className="text-base ml-1">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-pink text-lg font-thin mt-8">
          Admission Requirements:
        </p>
        <ul className="text-md mt-2 ">
          <li
            className="mt-2"
            style={{ display: "flex", alignItems: "flex-start" }}
          >
            <div className="text-pink">
              <ChevronRightIcon className="w-6 h-6 font-bold" />
            </div>
            <span className="text-base ml-1">
              {" "}
              Fill out the{" "}
              <a
                className=" mt-4 text-lg text-blue hover:font-extrabold	 transition-colors duration-150 hover:underline decoration-8 underline-offset-4"
                target="_blank"
                href="https://forms.gle/fcxgq2nnJXmnbkWA6"
              >
                application form
              </a>{" "}
            </span>
          </li>
          <li
            className="mt-2"
            style={{ display: "flex", alignItems: "flex-start" }}
          >
            <div className="text-pink">
              <ChevronRightIcon className="w-6 h-6 font-bold" />
            </div>
            <span className="text-base ml-1">
              {"Audition recording (max duration of 10 minutes)"}
            </span>
          </li>
        </ul>
        <p className="mt-8">* Pre-formed groups allowed to apply</p>
        {/* <div className="py-4 text-base">
          <p>Application and detailed info coming out soon!</p>
          <p>
            Notified of acceptance, waitlist, or decline: 27th November 2021
          </p>
          <p>Email rimufest@gmail.com with any further questions.</p>
        </div> */}
        {/* <p className="mt-8 text-2xl font-extrabold">Faculty</p>
        <p className="mt-8 text-xl font-extrabold">Amelia Taylor</p> */}
        {/* <div className="py-4 mt-10 text-sm">
          <p>COVID-19</p>
          <p>
            Rules regarding COVID change over time. Our first priority is to
            have sensible procedures so that everyone is as safe as possible
            during the program as we learn together. We will make sure both
            health care and learning music happens. It could mean that we may
            need to make changes according to whatever situation presents, even
            at short notice, from time to time. So we will always appreciate
            your understanding and cooperation.
          </p>
          <p className="mt-2">
            Please email any questions you may have. We look forward to you
            joining our planned experiences in a program aimed to inspire and
            excite people.{" "}
          </p>
          <p>Email rimufest@gmail.com with any further questions.</p>
        </div> */}
        {/* <p className="text-2xl my-4 text-purple">FAQ </p>
        <b
          className="text-pink"
          style={{ marginTop: "24px", display: "block" }}
        >
          What is a chamber group / chamber music?
        </b>
        <p style={{ fontSize: "14px", marginTop: "8px" }}>
          Broadly speaking it means music that is performed by a small number of
          musicians and one person per part. At RimuFest you will typically see
          groups of 3, 4 or 5. Chamber music has been described as “The music of
          friends”
        </p>
        <b
          className="text-pink"
          style={{ marginTop: "24px", display: "block" }}
        >
          What is a rehearsal?{" "}
        </b>
        <p style={{ fontSize: "14px", marginTop: "8px" }}>
          This is when the chamber group gets together and figures out how to
          put each part of the music together. Other things involved during this
          time are making musical decisions together. At RimuFest students will
          have a room assigned to them to rehearse during the day without a
          teacher in the room. However there's always a teacher floating by.
        </p>
        <b
          className="text-pink"
          style={{ marginTop: "24px", display: "block" }}
        >
          What is a coaching?{" "}
        </b>
        <p style={{ fontSize: "14px", marginTop: "8px" }}>
          This is like a rehearsal but with a teacher/coach in the room
          providing constructive criticism, helping the students work together,
          nutting out musical ideas, providing inspiration for the group to then
          go and work on their piece some more.
        </p>
        <b
          className="text-pink"
          style={{ marginTop: "24px", display: "block" }}
        >
          What is a masterclass?{" "}
        </b>
        <p style={{ fontSize: "14px", marginTop: "8px" }}>
          This is the group's chance to practice the performance of their piece
          and how to present themselves in front of an audience. To see what
          worked or didn’t work from the rehearsal/coaching. RimuFest provides
          students with Masterclasses everyday to allow students to learn how to
          perform and to get additional comments from all the coaches.
        </p> */}
      </div>
    </>
  );
}
