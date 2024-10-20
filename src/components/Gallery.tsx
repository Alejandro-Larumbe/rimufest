"use client";
import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";
import type { Photo } from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import React from "react";

type Props = { photos: Photo[]; title: string };

export const Gallery = ({ photos, title }: Props) => {
  const [index, setIndex] = React.useState(-1);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 448);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize); // Update on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  return (
    <div className="mt-4 w-full">
      <h2 className="items-start justify-start py-4 text-3xl">{title}</h2>
      <div className="flex flex-col">
        <ColumnsPhotoAlbum
          defaultContainerWidth={1200}
          photos={photos}
          onClick={({ index }) => !isMobile && setIndex(index)}
          columns={(containerWidth) => {
            if (containerWidth < 400) return 1;
            if (containerWidth < 800) return 2;
            return 3;
          }}
        />
        <div className="hidden sm:block">
          <Lightbox
            slides={photos}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            plugins={[Fullscreen, Thumbnails, Zoom]}
          />
        </div>
      </div>
    </div>
  );
};
