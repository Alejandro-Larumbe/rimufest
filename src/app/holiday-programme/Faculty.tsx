import React from "react";
import { FeatureBox } from "~/components/FeatureBox";
import { artists } from "~/lib/artists";
import type { Artist } from "~/lib/artists";

const facultyMembers: Artist[] = [
  artists["amelia-taylor"],
  artists["alejandro-larumbe"],
  artists["maria-mo"],
  artists["jesbery-hartono-hall"],
];

export const Faculty = () => {
  return (
    <div className="my-12 w-full lg:px-24">
      <h2 className="text-2xl font-bold ">Faculty</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
        {Object.values(facultyMembers).map((artist) => (
          <FeatureBox
            key={artist.path}
            imageSrc={`/artists/${artist.image}.jpeg`}
            captions={[artist.instrument]}
            href={`/artists/${artist.path}`}
            title={artist.name}
            borderColor="green"
          />
        ))}
      </div>
    </div>
  );
};
