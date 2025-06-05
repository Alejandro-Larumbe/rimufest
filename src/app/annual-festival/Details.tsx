import React from "react";
import { LinkButton } from "~/components/LinkButton";

export const Details = () => {
  return (
    <div className="flex flex-col leading-none gap-1 lg:w-2/5 text-2xl">
      <span className="font-bold">Tauranga, NZ</span>
      <span className="italic font-bold">January 9th - 14th, 2025</span>
      <span className="text-lg">
        Open to violin, viola, cello, double bass and piano
      </span>
      <span className="text-xl">
        Application deadline:{" "}
        <span className="font-normal italic text-nowrap">
          November 17th, 2025
        </span>
      </span>
      <span className="text-xl">Tuition: $300 </span>

      <LinkButton href="https://forms.gle/7CXKCsb5BzDXL3ca7">
        apply now
      </LinkButton>
    </div>
  );
};
