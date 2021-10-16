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
      <div className="md:w-101 md:mx-auto md:my-20 p-8">
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
          <p className="text-">* Last day to register: September 4th</p>
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

      <section className="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">
        <div className="lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
          <div className="lg:w-1/2">
            <div
              className="h-99 lg:h-100 bg-cover"
              style={{ backgroundImage: "url('/donald-maurice1.jpeg')" }}
            ></div>
          </div>

          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/3">
            <h2 className="font-bold text-lg">About Donald Maurice</h2>
            <p className="mt-4">
              Donald was until retiring in 2020 Professor of Music at Victoria
              University of Wellington. He has performed internationally for
              four decades as a solo violist and chamber musician and has given
              world premieres and New Zealand premieres of many works. He has
              presented at twenty International Viola Congresses.
            </p>
          </div>
        </div>
      </section>

      <div className="md:w-99 md:mx-auto md:my-20 p-8">
        <div className="pt-6">
          <p className="text-lg font-extrabold">Why viola?</p>
        </div>
        <div className="pt-2">
          <p>
            All string instruments play an important role, however, while the
            viola is an essential part of many ensembles, it is often forgotten.
            In chamber and orchestral music, the viola’s role is often to be the
            glue between the melody and harmony and plays the inner harmonies
            and rhythmic figures. It is also given beautiful melodies and
            moments to shine too.
          </p>
          <p>
            With the instrument being a crossbreed between the cello and the
            violin, it is able to play all of their music and its own, making it
            to be a very versatile and unique instrument. Composers today are
            now favoring the viola and its uniqueness in tone and colour and the
            versatility of the instrument.
          </p>
        </div>
        <div className="pt-6">
          <p className="text-lg font-extrabold">Can a violinist play viola?</p>
        </div>
        <div className="pt-2">
          <p>
            With similar techniques, young violinist can easily pick up the deep
            and warm sounding viola. Learning both instruments will benefit you
            in multiple ways. Your technique will improve on the violin such as
            intonation awareness, Bow technique and tone production and you will
            have the opportunity to experience different roles in chamber and
            orchestra music.
          </p>
          <p>
            Violas have a bigger size range than violin so you can easily find
            your perfect match.
          </p>
        </div>
      </div>
    </>
  );
}
