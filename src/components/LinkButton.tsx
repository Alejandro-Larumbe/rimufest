import Link from "next/link";
import React from "react";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ href, children }) => {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  return isExternal ? (
    <a
      className={"italic group relative h-16 text-xl font-semibold w-fit mt-4"}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span className="absolute bottom-6 left-0 lg:left-1/2 h-[2px] w-full bg-black transition-all duration-300 lg:w-0 lg:group-hover:left-0 lg:group-hover:w-full" />
    </a>
  ) : (
    <Link
      className={"italic group relative h-16 text-xl font-semibold w-fit mt-4"}
      href={href}
    >
      {children}
      <span className="absolute bottom-6 left-0 lg:left-1/2 h-[2px] w-full bg-black transition-all duration-300 lg:w-0 lg:group-hover:left-0 lg:group-hover:w-full" />
    </Link>
  );
};
