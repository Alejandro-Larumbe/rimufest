import React from "react";
import Hero from "../../components/Hero";
import Button from "../../components/primitives/button";

export default function Upcoming() {
  return (
    <>
      <Hero bgImage="upcoming">
        <h1 className="uppercase text-white">Upcoming</h1>
      </Hero>
      <div className="md:w-101 md:mx-auto md:my-20 p-8">
        <h2 style={{ fontSize: "24px", marginTop: "56px" }}>
          Term 3 Holiday Programme
        </h2>
        <h3>1st - 4th October 2022</h3>
        <span style={{ fontSize: "14px", marginTop: "16px" }}>
          Imparted by Donald Maurice and Martin Roberts
        </span>
        <p style={{ fontSize: "14px", margin: "16px 0" }}>
          For violists, cellists and violinists wanting to learn about the
          viola.
        </p>
        <Button>
          <a href="/holiday-program">Learn more</a>
        </Button>
        <h2 style={{ fontSize: "24px", marginTop: "64px" }}>
          NZ 4th Annual Festival
        </h2>
        <h3 style={{ marginTop: "64pxpx" }}>January 4th - 9th 2023</h3>
        <span style={{ fontSize: "14px", marginTop: "16px", display: "block" }}>
          RimuFest offers two programmes for all levels of string players.
        </span>
        <p style={{ fontSize: "14px", marginTop: "16px" }}>
          Our ½ day programme is for the student that has little or no
          experience in chamber music that is teacher led. Throughout the 6 days
          students will work on a chamber piece as a group learning how to play
          together, how to lead and how to follow among other chamber music
          skills. Students will be divided into smaller groups for the final
          concert.
        </p>
        <p style={{ fontSize: "14px", margin: "24px 0" }}>
          Our full chamber programme is for the student that has some to a lot
          of experience in chamber music or other types of ensembles and is
          student led. Students work together in small groups putting together a
          trio, quartet or quintet with guidance from our high-caliber coaches.
          Students have the opportunity to premier commissioned works by NZ
          composers and have the experience of working directly with the
          composer.{" "}
        </p>
        <Button>
          <a href="/annual-nz-2023">Learn more</a>
        </Button>
        <h3 style={{ fontSize: "20px", marginTop: "64px" }}>FAQ </h3>{" "}
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
        <span style={{ fontSize: "14px", marginTop: "8px" }}></span>
        <span style={{ fontSize: "14px", marginTop: "8px" }}></span>
        <span style={{ fontSize: "14px", marginTop: "8px" }}></span>
      </div>
    </>
  );
}
