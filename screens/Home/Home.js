import React from "react";
import styles from "./Home.module.css";
import Button from "../../components/primitives/button";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div
          className={styles.text}
          style={{ backgroundColor: "var(--color-1)" }}
        >
          <h1>RIMUFEST ANNUAL NZ FROM 4 TO 10 JANUARY 2023</h1>
          <h2>@Tauranga Boys' College</h2>
          <Button>More</Button>
        </div>
        <div
          className={styles.image}
          style={{ backgroundColor: "var(--color-3)" }}
        >
          <img src="/splash.png" />
        </div>
      </section>

      <section
        style={{ backgroundColor: "var(--color-2" }}
        className={styles.section}
      >
        <img src="/term3/t3-2.jpeg" />
        <div
          // style={{ backgroundColor: "white", color: "black" }}
          className={styles.content}
        >
          <h3>Our Term 3 Holiday Program</h3>
          <p>
            Music Director Riccardo Chailly and the Lucerne Festival Orchestra
            will perform the new annual Spring Festival for the first time from
            8 to 10 April 2022. In 2022 and 2023, the focus will be on Felix
            Mendelssohn. Online ticket sales have started.
          </p>
          <Button>all concerts</Button>
        </div>
        {/* <h2>Term 3 Holiday Program 2022</h2> */}
        <div></div>
      </section>
      <section
        style={{ backgroundColor: "var(--color-4)" }}
        className={styles.section}
      >
        <img src="/term3/t3-3.jpeg" />
        <div
          // style={{ backgroundColor: "white", color: "black" }}
          className={styles.content}
        >
          <h3>Mexico Online 2022</h3>
          <p>
            Music Director Riccardo Chailly and the Lucerne Festival Orchestra
            will perform the new annual Spring Festival for the first time from
            8 to 10 April 2022. In 2022 and 2023, the focus will be on Felix
            Mendelssohn. Online ticket sales have started.
          </p>
          <Button>all concerts</Button>
        </div>
        {/* <h2>Term 3 Holiday Program 2022</h2> */}
        <div></div>
      </section>
      <section>
        <h3>Artists</h3>
      </section>
    </>
  );
}
