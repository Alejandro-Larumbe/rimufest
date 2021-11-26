import React, { useState, useCallback } from "react";
import Hero from "../components/Hero";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

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

const photos = [
  {
    src: "/gallery/term-3-holiday-program-2021/coaching3.jpeg",
    width: 4,
    height: 3,
  },
  {
    src: "/gallery/term-3-holiday-program-2021/donald-maurice1.jpeg",
    width: 1,
    height: 1,
  },
  {
    src: "/gallery/term-3-holiday-program-2021/student-concert1.jpeg",
    width: 4,
    height: 3,
  },
  {
    src: "/gallery/term-3-holiday-program-2021/coaching3.jpeg",
    width: 4,
    height: 3,
  },
  {
    src: "/gallery/term-3-holiday-program-2021/student-concert1.jpeg",
    width: 4,
    height: 3,
  },
  {
    src: "/gallery/term-3-holiday-program-2021/donald-maurice1.jpeg",
    width: 1,
    height: 1,
  },
];

export default function Pictures() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <Hero bgImage="holiday-programme">
        <h1 className="uppercase text-white">Gallery</h1>
      </Hero>
      {/* <div className="md:w-101 md:mx-auto md:my-20 p-8"> */}
      <div className="mx-auto p-8">
        <div className="py-4">
          <p className="text-2xl text-pink">
            RimuFest Term 3 Holiday Programme 2021
          </p>
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  style={{ width: "auto", margin: "auto" }}
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
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
