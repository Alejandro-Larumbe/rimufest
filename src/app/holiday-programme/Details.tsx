import React from "react";
import { LinkButton } from "~/components/LinkButton";

export const Details = () => {
  return (
    <div className="flex flex-col leading-none gap-1 lg:w-2/5 text-2xl">
      <span className="font-bold">Tauranga, NZ</span>
      <span className="italic font-bold">September 21-24, 2025</span>
      <span className="text-lg">Open to violin, viola, cello, and piano</span>
      <span className="text-xl">
        Registrations Open:{" "}
        <span className="font-normal italic text-nowrap">June 10th, 2025</span>
      </span>
      <span className="text-xl">
        Application deadline:{" "}
        <span className="font-normal italic text-nowrap">
          August 10th, 2025
        </span>
      </span>
      <span className="text-xl">Tuition: $260 </span>

      <LinkButton href="https://forms.gle/W8Juu2QNSVc7gYdP6">
        apply now
      </LinkButton>
    </div>
  );
};
