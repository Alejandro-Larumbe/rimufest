import React from "react";
import Hero from "../Hero";
import SEO from "../SEO";
import styles from "./support.module.css";

const chevronRight = (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    width="8px"
    height="12px"
    viewBox="80 0 80 185.343"
    style={{ display: "inline-block" }}
  >
    <g>
      <g>
        <path
          fill="#75499D"
          d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
			l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
			c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
        />
      </g>
    </g>
  </svg>
);

const data = [
  {
    title: "friend",
    amount: "250",
    contribute: [
      "Contribute towards venue",
      "Contribute towards catering",
      "Sponsor a festival meal break",
    ],
    benefits: [
      "Two tickets to one RimuFest concert",
      "Recognition in our event programmes and website",
      "Highlighted in RimuFest communications",
      "Acknowledgement in RimuFest official reports",
    ],
  },
  {
    title: "supporting",
    amount: "500",
    contribute: [
      "Contribute towards venue",
      "Contribute towards catering",
      "Sponsor a festival event session",
    ],
    benefits: [
      "Four tickets to one RimuFest concert",
      "Thank you on our Social Media platforms",
      "All the previous benefits",
      "Announcement message from stage for one of our concerts",
    ],
  },
  {
    title: "partner",
    amount: "1000",
    contribute: [
      "Sponsor an applicant scholarship",
      "Sponsor a student prize",
      "Contribute towards venue",
      "Contribute towards catering",
      "Sponsor a festival event session",
      "Sponsor a Faculty Member",
    ],
    benefits: [
      "Four tickets to two RimuFest concerts (Total 8)",
      "Acknowledgement on our programme and website",
      "One sponsored post on our social media highlighting your business",
      "Announcement message from stage for two of our concerts",
      "½ page ad in one concert programme",
      "Banner (Provided by Sponsor) displayed at one RimuFest concert",
      "Logo / Branding on event posters and programmes",
    ],
  },
  {
    title: "advocate",
    amount: "5000",
    contribute: [
      "Naming rights to main Festival concert",
      "Sponsor an applicant scholarship",
      "Sponsor a Faculty Member",
    ],
    benefits: [
      "Six tickets to two RimuFest concerts (Total 12)",
      "Acknowledgement on our programme and website",
      "Two sponsored posts on our social media highlighting your business",
      "Announcement message from stage for all of our concerts",
      "Full page ad in one concert programme or two ½ page ads in two concert programmes",
      "Banner (Provided by Sponsor) displayed at all RimuFest concerts",
      "Recognition in any media articles",
    ],
  },
];

export default function PressRoom() {
  return (
    <>
      <SEO
        title="Rimufest Chamber Music Festival | Home"
        description="RimuFest Chamber Music Festival, founded by Amelia Taylor and Alejandro Larumbe, offers two programmes a year in Tauranga - a 4-day holiday programme and a 6-day summer programme for beginner to advanced string players between the ages of 7-18. Both these programmes provide music collaboration opportunities. Students can develop effective communication, teamwork, goal-setting and organisational skills, all transferable life skills."
      />
      <Hero bgImage="press-room">
        <h1 className="uppercase">Support</h1>
      </Hero>
      <div className={["md:w-101 md:mx-auto md:my-20 p-8"].join(" ")}>
        {data.map(({ title, amount, contribute, benefits }) => (
          <div>
            <p className="text-pink mt-24">Become a</p>
            <h2 className="text-purple text-4xl">{title} </h2>
            <h2 className="text-purple text-4xl">sponsor</h2>
            <p className="text-pink font-lg mt-6">investment</p>
            <p className="text-pink text-xl font-thin">${amount}</p>
            <ul className={[styles.towards, "text-md mt-2 "].join(" ")}>
              {contribute.map((item) => (
                <li style={{ display: "flex", alignItems: "center" }}>
                  {chevronRight}
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-pink font-lg mt-6">benefits</p>
            <ul className={[styles.towards, "text-lg mt-2 "].join(" ")}>
              {benefits.map((item) => (
                <li
                  className="mt-1"
                  style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}
                >
                  <div className="mr-2">
                    {chevronRight}
                    {chevronRight}
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
