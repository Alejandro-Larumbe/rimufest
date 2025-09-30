import React from "react";
import { LinkButton } from "~/components/LinkButton";

export const Details = () => {
  return (
    <div className="flex flex-col leading-none gap-1 lg:w-2/5 text-2xl">
      <span className="font-bold">Tauranga, NZ</span>
      <span className="italic font-bold">January 6th - 11th, 2026</span>
      <span className="text-lg">
        Open to violin, viola, cello, double bass and piano
      </span>
      <span className="text-xl">
        Registrations Open:{" "}
        <span className="font-normal italic text-nowrap">
          October 1st, 2025
        </span>
      </span>
      <span className="text-xl">
        Application deadline:{" "}
        <span className="font-normal italic text-nowrap">
          October 31st, 2025
        </span>
      </span>
   
      <span className="text-xl">Tuition: $300 
        </span>
        <span className="text-lg">Early bird discount until Oct 17th: $275</span>

      <LinkButton href="https://forms.gle/D8vDEQTRL6qYVmig9">
        apply now
      </LinkButton>
    </div>
  );
};
