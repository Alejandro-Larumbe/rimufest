import React from "react";
import Button from "../components/primitives/button";

export default function HolidayProgramme() {
  return (
    <>
      <div className="justify-end bg-left flex flex-col bg-opacity-10 w-full h-96 bg-holidayProgram bg-cover">
        <div className="p-8">
          <p className="text-white text-3xl uppecase">Term 3</p>
          <p className="text-white text-3xl uppecase">Holiday Programme</p>
        </div>
      </div>
      <div className="p-8">
        <div className="py-4">
          <p className="text-2xl">
            RimuFest’s Term 3 Holiday Programme is an opportunity for both young
            violinists and violists aged 7yrs-16yrs to work closely with Donald
            Maurice, develop their talents, build friendships, and have fun!
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
      <img className="py-4" src="/donald-maurice.jpeg"></img>
      <div className="p-8">
        <div className="py-4">
          <p className="text-lg font-extrabold">About Donald Maurice</p>
        </div>
        <div className="py-4">
          <p>
            Donald was until retiring in 2020 Professor of Music at Victoria
            University of Wellington. He has performed internationally for four
            decades as a solo violist and chamber musician and has given world
            premieres and New Zealand premieres of many works. He has presented
            at twenty International Viola Congresses.
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
    </>
  );
}
