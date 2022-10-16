import React from "react";
import { GalleryComponent } from "../components/Gallery";
import Hero from "../components/Hero";
import SEO from "../components/SEO";

const t32021 = [
  {
    src: "/t3-2021/t3-1.jpg",
    original: "/t3-2021/t3-1.jpg",
    width: 400,
    height: 300,
  },
  {
    src: "/t3-2021/t3-3.jpg",
    original: "/t3-2021/t3-3.jpg",
    width: 300,
    height: 400,
  },
  {
    src: "/t3-2021/t3-2.jpg",
    original: "/t3-2021/t3-2.jpg",
    width: 400,
    height: 300,
  },
  {
    src: "/t3-2021/t3-4.jpg",
    original: "/t3-2021/t3-4.jpg",
    width: 300,
    height: 400,
  },
  {
    src: "/t3-2021/t3-5.jpg",
    original: "/t3-2021/t3-5.jpg",
    width: 300,
    height: 400,
  },
];
const t3 = [
  {
    src: "/term3/t3-1.jpeg",
    original: "/term3/t3-1.jpeg",
    width: 300,
    height: 400,
  },
  {
    src: "/term3/t3-2.jpeg",
    original: "/term3/t3-2.jpeg",
    width: 400,
    height: 300,
  },
  {
    src: "/term3/t3-3.jpeg",
    original: "/term3/t3-3.jpeg",
    width: 400,
    height: 300,
  },
  {
    src: "/term3/t3-4.jpeg",
    original: "/term3/t3-4.jpeg",
    width: 400,
    height: 300,
  },
  {
    src: "/term3/t3-5.jpeg",
    original: "/term3/t3-5.jpeg",
    width: 300,
    height: 400,
  },
];
const nz2021 = [
  {
    src: "/2021/2021-1.jpeg",
    original: "/2021/2021-1.jpeg",
    width: 400,
    height: 300,
  },
  {
    src: "/2021/2021-2.jpeg",
    original: "/2021/2021-2.jpeg",
    width: 300,
    height: 400,
  },
  {
    src: "/2021/2021-3.jpeg",
    original: "/2021/2021-3.jpeg",
    width: 400,
    height: 300,
  },
  {
    src: "/2021/2021-4.jpeg",
    original: "/2021/2021-4.jpeg",
    width: 400,
    height: 300,
  },
];
const nz2022 = [
  // {
  //   src: "/2022/2022-1.jpeg",
  //   original: "/2022/2022-1.jpeg",
  //   width: 450,
  //   height: 300,
  // },
  // {
  //   src: "/2022/2022-2.jpeg",
  //   original: "/2022/2022-2.jpeg",
  //   width: 300,
  //   height: 400,
  // },
  // {
  //   src: "/2022/2022-3.jpeg",
  //   original: "/2022/2022-3.jpeg",
  //   width: 400,
  //   height: 300,
  // },
  // {
  //   src: "/2022/2022-4.jpeg",
  //   original: "/2022/2022-4.jpeg",
  //   width: 400,
  //   height: 300,
  // },
  // {
  //   src: "/2022/2022-5.jpeg",
  //   original: "/2022/2022-5.jpeg",
  //   width: 400,
  //   height: 300,
  // },
  {
    src: "/2022/2022-6.jpeg",
    original: "/2022/2022-6.jpeg",
    width: 300,
    height: 400,
  },
  {
    src: "/2022/2022-7.jpeg",
    original: "/2022/2022-7.jpeg",
    width: 400,
    height: 300,
  },
  {
    src: "/2022/2022-8.jpeg",
    original: "/2022/2022-8.jpeg",
    width: 400,
    height: 300,
  },
];

export default function Pictures() {
  return (
    <>
      <SEO
        title="Rimufest Chamber Music Festival | Gallery"
        description="RimuFest Chamber Music Festival, founded by Amelia Taylor and Alejandro Larumbe, offers two programmes a year in Tauranga - a 4-day holiday programme and a 6-day summer programme for beginner to advanced string players between the ages of 7-18. Both these programmes provide music collaboration opportunities. Students can develop effective communication, teamwork, goal-setting and organisational skills, all transferable life skills."
      />
      <Hero bgImage="gallery">
        <h1 className="uppercase text-white">Gallery</h1>
      </Hero>
      <div className="md:w-2/6 md:mx-auto md:my-20">
        {/* <div className="md:w-101 md:mx-auto md:my-20 p-8"> */}
        <div className="mx-auto p-4 md:p-8">
          <div className="py-12">
            <p className="text-2xl text-pink pb-4 ">Annual NZ 2022</p>
            <GalleryComponent images={nz2022} />
          </div>
          <div className="py-12">
            <p className="text-2xl text-pink pb-4 ">
              RimuFest Term 3 Holiday Programme 2021
            </p>
            <GalleryComponent images={t32021} />
          </div>
          <div className="py-12">
            <p className="text-2xl text-pink pb-4 ">Annual NZ 2021</p>
            <GalleryComponent images={nz2021} />
          </div>
          <div className="py-12">
            <p className="text-2xl text-pink pb-4 ">
              RimuFest Term 3 Holiday Programme 2020
            </p>
            <GalleryComponent images={t3} />
          </div>
        </div>
      </div>
    </>
  );
}
