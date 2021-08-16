import React from "react";
import Hero from "../components/Hero";
import Button from "../components/primitives/button";

export default function HolidayProgramme() {
  return (
    <>
      <Hero bgImage="holiday-programme">
        <h1 className="uppercase text-white">Term 3</h1>
        <h1 className="uppercase text-white">Holiday Programme</h1>
      </Hero>
      <div className="md:w-1/3 md:mx-auto md:my-20 p-8">
        <div className="py-4">
          <p className="text-2xl text-pink">
            RimuFest Term 3 Holiday Programme is an opportunity to build your
            knowledge and skill of the viola alongside the prestigious Donald
            Maurice. In these four days students will experience joy in
            learning, bonding and performing with friends.
          </p>
        </div>
        <div className="py-4">
          <p className="text-lg font-extrabold">
            Rimufest's Term 3 Holiday Program
          </p>
          <p className="text-lg">2nd - 5th October 2021</p>
        </div>
        <div className="py-4 text-base">
          <p>
            We’re excited to bring back RimuFest’s Holiday Programme. This is an
            opportunity for both violinists and violists aged 7yrs-16yrs to work
            closely with Donald Maurice on the viola. All violinists will have
            use of a viola during the programme.
          </p>
        </div>
        <div className="py-4 text-base">
          <p>
            During our Four-day holiday programme, students will participate in
            the RimuFest Viola ensemble (led by Donald Maurice and Amelia
            Taylor). Students will take part in the student concert as well as
            learning the alto clef among other classes.
          </p>
        </div>
        <div className="flex justify-center py-4">
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/1f23Dw8qHKibnKfEyZj8cppAvUqqOJYg9ol_d6JAFw8s/"
          >
            <Button>Apply now</Button>
          </a>
        </div>
      </div>

      <div className="md:flex md:ml-56 md:my-24">
        <img className="py-4 md:w-1/4" src="/donald-maurice1.jpeg"></img>
        <div className="p-8 md:w-1/4 md:self-center">
          <div className="py-4">
            <p className="text-lg font-extrabold">About Donald Maurice</p>
          </div>
          <div className="py-4">
            <p>
              Donald was until retiring in 2020 Professor of Music at Victoria
              University of Wellington. He has performed internationally for
              four decades as a solo violist and chamber musician and has given
              world premieres and New Zealand premieres of many works. He has
              presented at twenty International Viola Congresses.
            </p>
          </div>
          <div className="py-4">
            Check out his impressive bio{" "}
            <a
              target="_blank"
              href="https://www.donaldmaurice.org"
              className="text-pink text-lg"
            >
              here
            </a>
            .
          </div>
        </div>
      </div>
    </>
  );
}
