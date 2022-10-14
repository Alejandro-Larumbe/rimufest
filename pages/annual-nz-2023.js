import React from "react";
import Hero from "../components/Hero";
import Button from "../components/primitives/button";
import SEO from "../components/SEO";

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

export default function AnnualNZ2022() {
  return (
    <>
      <SEO
        title="Rimufest Chamber Music Festival | Annual NZ 2023"
        description="RimuFest Chamber Music Festival, founded by Amelia Taylor and Alejandro Larumbe, offers two programmes a year in Tauranga - a 4-day holiday programme and a 6-day summer programme for beginner to advanced string players between the ages of 7-18. Both these programmes provide music collaboration opportunities. Students can develop effective communication, teamwork, goal-setting and organisational skills, all transferable life skills."
      />
      <Hero bgImage="nz-2023">
        <h1 className="uppercase text-white">Annual New Zealand 2023</h1>
      </Hero>
      <div className="md:w-101 md:mx-auto md:my-20 p-8">
        <div className="py-4">
          <p className="text-3xl font-extrabold text-purple">
            Rimufest 4th Annual Festival
          </p>
          <p className="text-lg text-pink">
            4th - 9th January 2023, Tauranga NZ
          </p>{" "}
          <div className="py-4 text-base text-lg">
            <p>**DEADLINE TO APPLY: 20TH NOVEMBER 2022</p>
          </div>
          {/* <p className="text-">* Last day to apply: November 20th</p> */}
        </div>
        <div className="py-4 text-base">
          <p>
            <b className="text-pink">RimuFest Chamber Music Festival</b>,
            founded by Amelia Taylor and Alejandro Larumbe, is a 6-day summer
            chamber music programme for beginner to advanced string players
            between the ages of 7-18.
          </p>
        </div>
        <div className="py-4 text-base">
          <p>
            Students come together in a social setting using teamwork and
            leadership skills to create music while expanding their
            understanding of chamber music and strengthening their own
            individual ability.
          </p>
        </div>
        <div className="py-4 text-base">
          <p>
            Students will participate in: daily chamber coachings and rehearsals
            | orchestra | private lessons | masterclasses | Alexander Technique
            | performance opportunities
          </p>
        </div>
        <div className="pt-12 text-base">
          <p className="">
            RimuFest offers two programmes for all levels of string players:
          </p>
        </div>
        <div className="py-4 text-base">
          <p>
            Our <b className={"text-pink"}>beginner chamber music programme </b>
            is for the student that has little or no experience in chamber
            music. This programme is teacher led. Throughout the 6 days (9am -
            12:30pm) students will work on a chamber piece as a group learning
            how to play together, how to lead and how to follow, including other
            chamber music skills. Students will be divided into smaller groups
            for the final concert.{" "}
          </p>
        </div>
        <div className="py-4 text-base">
          <p>
            Our <b className="text-pink">full chamber music programme</b> (9am -
            2:45pm) is for the student that has some to a lot of experience in
            chamber music or other types of ensembles. This programme is student
            led. Students work together in small groups, either a trio, quartet
            or quintet with guidance from our high-caliber coaches. Students
            have the opportunity to premier commissioned works by NZ composers
            and have the experience of working directly with the composer.
          </p>
        </div>
        <div className="pt-12 text-base">
          <p className="text-2xl my-4 text-purple">How to apply </p>
          <ul>
            <li style={{ display: "flex", alignItems: "center" }}>
              <span className="ml-2">
                • Fill out the{" "}
                <a
                  className="inline text-pink"
                  // className="block"
                  target="_blank"
                  href="https://forms.gle/kREu3iFXrcJhbTFC7 "
                >
                  application form
                </a>
              </span>
            </li>
            <li
              className="mt-2"
              style={{ display: "flex", alignItems: "flex-start" }}
            >
              <span className="ml-2">
                • Upload audition video to Youtube performing one piece of no
                more thank 5 minutes in length that demonstrates your technical
                and musical ability.
              </span>
            </li>
          </ul>
        </div>
        <div className="py-4 text-base"></div>
        {/* <div className="flex justify-center py-10">
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSevuoKBHNeJ6bqZrJg0K81pVHrFc-0lzf2-d1dWEbHw-gyv5A/viewform?usp=sf_link"
          >
            <Button>Apply now</Button>
          </a>
        </div> */}
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
        <p className="text-2xl my-4 text-purple">FAQ </p>
        <b style={{ marginTop: "24px", display: "block" }}>
          What is a chamber group / Chamber music?
        </b>
        <p style={{ fontSize: "14px", marginTop: "8px" }}>
          Broadly speaking it means music that is performed by a small number of
          musicians and one person per part. At RimuFest you will typically see
          groups of 3, 4 or 5. Chamber music has been described as “The music of
          friends”
        </p>
        <b style={{ marginTop: "24px", display: "block" }}>
          What is a rehearsal?{" "}
        </b>
        <p style={{ fontSize: "14px", marginTop: "8px" }}>
          This is when the chamber group gets together and figures out how to
          put each part of the music together. Other things involved during this
          time are making musical decisions together. At RimuFest students will
          have a room assigned to them to rehearse during the day without a
          teacher in the room. However there's always a teacher floating by.
        </p>
        <b style={{ marginTop: "24px", display: "block" }}>
          What is a coaching?{" "}
        </b>
        <p style={{ fontSize: "14px", marginTop: "8px" }}>
          This is like a rehearsal but with a teacher/coach in the room
          providing constructive criticism, helping the students work together,
          nutting out musical ideas, providing inspiration for the group to then
          go and work on their piece some more.
        </p>
        <b style={{ marginTop: "24px", display: "block" }}>
          What is a masterclass?{" "}
        </b>
        <p style={{ fontSize: "14px", marginTop: "8px" }}>
          This is the group's chance to practice the performance of their piece
          and how to present themselves in front of an audience. To see what
          worked or didn’t work from the rehearsal/coaching. RimuFest provides
          students with Masterclasses everyday to allow students to learn how to
          perform and to get additional comments from all the coaches.
        </p>
      </div>
    </>
  );
}
