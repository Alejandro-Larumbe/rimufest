import React from "react";
import Hero from "../components/Hero";
import { GalleryComponent } from "../components/Gallery";

const t32021 = [
  {
    src: "/t3-2021/t3-1.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/t3-2021/t3-3.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/t3-2021/t3-2.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/t3-2021/t3-4.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/t3-2021/t3-5.jpg",
    width: 3,
    height: 4,
  },
];
const t3 = [
  {
    src: "/term3/t3-1.jpeg",
    width: 3,
    height: 4,
  },
  {
    src: "/term3/t3-2.jpeg",
    width: 4,
    height: 3,
  },
  {
    src: "/term3/t3-3.jpeg",
    width: 4,
    height: 3,
  },
  {
    src: "/term3/t3-4.jpeg",
    width: 4,
    height: 3,
  },
  {
    src: "/term3/t3-5.jpeg",
    width: 3,
    height: 4,
  },
];
const nz2021 = [
  {
    src: "/2021/2021-1.jpeg",
    width: 4,
    height: 3,
  },
  {
    src: "/2021/2021-2.jpeg",
    width: 3,
    height: 4,
  },
  {
    src: "/2021/2021-3.jpeg",
    width: 4,
    height: 3,
  },
  {
    src: "/2021/2021-4.jpeg",
    width: 4,
    height: 3,
  },
];
const nz2022 = [
  {
    src: "/2022/2022-1.jpeg",
    width: 4,
    height: 3,
  },
  {
    src: "/2022/2022-2.jpeg",
    width: 3,
    height: 4,
  },
  {
    src: "/2022/2022-3.jpeg",
    width: 4,
    height: 3,
  },
  {
    src: "/2022/2022-4.jpeg",
    width: 4,
    height: 3,
  },
  {
    src: "/2022/2022-5.jpeg",
    width: 4,
    height: 3,
  },
  {
    src: "/2022/2022-6.jpeg",
    width: 3,
    height: 4,
  },
  {
    src: "/2022/2022-7.jpeg",
    width: 4,
    height: 3,
  },
  {
    src: "/2022/2022-8.jpeg",
    width: 4,
    height: 3,
  },
];

export default function Pictures() {
  return (
    <>
      <Hero bgImage="holiday-programme">
        <h1 className="uppercase text-white">Gallery</h1>
      </Hero>
      {/* <div className="md:w-101 md:mx-auto md:my-20 p-8"> */}
      <div className="mx-auto p-4 md:p-8">
        <div className="py-12">
          <p className="text-3xl pb-4 ">Annual NZ 2022</p>
          <GalleryComponent photos={nz2022} />
        </div>
        <div className="py-12">
          <p className="text-3xl pb-4 ">
            RimuFest Term 3 Holiday Programme 2021
          </p>
          <GalleryComponent photos={t32021} />
        </div>
        <div className="py-12">
          <p className="text-3xl pb-4 ">Annual NZ 2021</p>
          <GalleryComponent photos={nz2021} />
        </div>
        <div className="py-12">
          <p className="text-3xl pb-4 ">
            RimuFest Term 3 Holiday Programme 2020
          </p>
          <GalleryComponent photos={t3} />
        </div>
      </div>
    </>
  );
}
