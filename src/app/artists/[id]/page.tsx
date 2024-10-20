import React from "react";
import Image from "next/image";
import type { NextPage } from "next"; // Import NextPage type
import { artists } from "~/lib/artists";
import type { Artists } from "~/lib/artists";

export const dynamicParams = false;

export async function generateStaticParams() {
  const paths = Object.keys(artists).map((key) => ({
    id: key,
  }));

  return paths;
}

const Artist: NextPage<{ params: { id: Artists } }> = ({ params }) => {
  const id = params.id;

  const artist = artists[id];

  return (
    <>
      <div className="md:w-100 p-8 md:mx-auto md:my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:self-end">
            <div className="text-5xl font-extrabold">{artist.name}</div>
            {artist.title && <p className="text-3xl">{artist.title}</p>}
            <p className="text-2xl">{artist.instrument}</p>
            {artist.website && (
              <a
                href={artist.website}
                className="text-xl text-blue-500 hover:underline"
              >
                {artist.website}
              </a>
            )}
          </div>
          <div className="md:w-1/2">
            <Image
              height={2000}
              width={1000}
              src={`/artists/${artist.image}.jpeg`}
              alt={artist.name}
              className="h-96 w-full object-cover md:w-auto"
            />
          </div>
        </div>
        {artist.bio && (
          <div className="mt-4">
            {artist.bio.map((paragraph, index) => (
              <div key={index} className="text-lg">
                {paragraph}
              </div>
            ))}
          </div>
        )}{" "}
      </div>
    </>
  );
};

export default Artist;
