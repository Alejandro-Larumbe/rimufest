import React from "react";
import Hero from "../components/Hero";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/gallery/term-3-holiday-program-2021/about.jpeg",
  },
  {
    original: "/gallery/term-3-holiday-program-2021/coaching2.jpeg",
  },
  {
    original: "/gallery/term-3-holiday-program-2021/coaching3.jpeg",
  },
  {
    original: "/gallery/term-3-holiday-program-2021/donald-maurice1.jpeg",
  },
  {
    original: "/gallery/term-3-holiday-program-2021/student-concert1.jpeg",
  },
];

export default function Gallery() {
  return (
    <>
      <Hero bgImage="holiday-programme">
        <h1 className="uppercase text-white">Gallery</h1>
      </Hero>
      {/* <div className="md:w-101 md:mx-auto md:my-20 p-8"> */}
      <div className="md:w-99 mx-auto p-8">
        <div className="py-4">
          <p className="text-2xl text-pink">
            RimuFest Term 3 Holiday Programme 2021
          </p>
          <ImageGallery items={images} />
        </div>
        <div className="py-4">
          <p className="text-2xl text-pink">Annual NZ 2021</p>
        </div>
        <div className="py-4">
          <p className="text-2xl text-pink">
            RimuFest Term 3 Holiday Programme 2020
          </p>
        </div>
      </div>
    </>
  );
}
