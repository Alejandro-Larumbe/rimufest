import React from "react";
import Hero from "../../components/Hero";
import SEO from "../../components/SEO";
import styles from "./pressRoom.module.css";

export default function PressRoom() {
  return (
    <>
      <SEO
        title="Rimufest Chamber Music Festival | Home"
        description="RimuFest Chamber Music Festival, founded by Amelia Taylor and Alejandro Larumbe, offers two programmes a year in Tauranga - a 4-day holiday programme and a 6-day summer programme for beginner to advanced string players between the ages of 7-18. Both these programmes provide music collaboration opportunities. Students can develop effective communication, teamwork, goal-setting and organisational skills, all transferable life skills."
      />
      <Hero bgImage="press-room">
        <h1 className="uppercase text-white">Press Room</h1>
      </Hero>
      <div
        className={["md:w-101 md:mx-auto md:my-20 p-8", styles.container].join(
          " "
        )}
      >
        {" "}
        <h2 style={{ fontSize: "24px", marginTop: "56px" }}>Annual NZ 2021</h2>
        <a
          target="_blank"
          className={styles.link}
          href="https://sunlive.co.nz/news/259879-childrens-chamber-music-festival-takes-tauranga.html"
        >
          <p style={{ marginTop: "16px" }}>
            Children’s chamber music festival takes Tauranga{" "}
          </p>
          <p style={{ fontSize: "14px" }}>by Ursula Keay / Sunlive</p>
        </a>
        <a
          target="_blank"
          className={styles.link}
          href="https://www.sunlive.co.nz/news/259762-rimufest-concerts-to-showcase-chamber-music.html"
        >
          <p style={{ marginTop: "16px" }}>
            RimuFest concerts to showcase chamber music
          </p>
          <p style={{ fontSize: "14px" }}>by Rosalie Liddle / Sunlive</p>
        </a>
        <h2 style={{ fontSize: "24px", marginTop: "56px" }}>Annual NZ 2020</h2>
        <a
          target="_blank"
          className={styles.link}
          href="https://www.sunlive.co.nz/news/231456-students-string-performance-at-tauranga-library.html"
        >
          <p style={{ marginTop: "16px" }}>
            Students string performance at Tauranga Library
          </p>
          <p style={{ fontSize: "14px" }}>by Caitlin Houghton / Sunlive</p>
        </a>
        <h2 style={{ fontSize: "24px", marginTop: "56px" }}>
          Innaugural Mexico 2019
        </h2>
        <a
          target="_blank"
          className={styles.link}
          href="https://www.cenart.gob.mx/eventos/veracruz-concierto-de-clausura-rimufest/"
        >
          <p style={{ marginTop: "16px" }}>
            Veracruz | Concierto de Clausura Rimufest
          </p>
          <p style={{ fontSize: "14px" }}>Centro Nacional de las Artes</p>
        </a>
        <a
          target="_blank"
          className={styles.link}
          href="https://www.eldictamen.mx/sociales/viviendo-veracruz-50/"
        >
          <p style={{ marginTop: "16px" }}>Viviendo Veracruz</p>
          <p style={{ fontSize: "14px" }}>By Rodolfo Gonzalez / Notiver</p>
        </a>
      </div>
    </>
  );
}
