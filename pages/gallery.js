import React from "react";
import { GalleryComponent } from "../components/Gallery";
import SEO from "../components/SEO";

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
      <SEO
        title="Rimufest Chamber Music Festival | Gallery"
        description="RimuFest Chamber Music Festival, founded by Amelia Taylor and Alejandro Larumbe, offers two programmes a year in Tauranga - a 4-day holiday programme and a 6-day summer programme for beginner to advanced string players between the ages of 7-18. Both these programmes provide music collaboration opportunities. Students can develop effective communication, teamwork, goal-setting and organisational skills, all transferable life skills."
      />
      {/* <Hero bgImage="holiday-programme">
        <h1 className="uppercase text-white">Gallery</h1>
      </Hero> */}
      <div className="p-8 text-white md:text-5xl text-3xl">Gallery</div>
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
