import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "~/lib/utils";

interface FeatureBoxProps {
  imageSrc: string;
  title: string;
  captions: string[];
  borderColor: string;
  href: string;
}

export const FeatureBox: React.FC<FeatureBoxProps> = ({
  imageSrc,
  title,
  captions,
  borderColor,
  href,
}) => {
  return (
    <div className="group w-full px-8 py-6">
      <Link href={href} className="block">
        <div className="relative">
          <span
            className={cn(
              "z-10 absolute left-[20px] top-[-26px] block h-full w-[calc(100%-40px)] border-[3px] border-solid md:left-[7%] md:top-[-2.08vw] md:w-[86%]",
              `border-${borderColor}`
            )}
          />
          <div className="relative w-full aspect-10/12">
            <Image
              alt="project-box"
              fill
              className="object-cover"
              src={imageSrc}
            />
          </div>
        </div>
        <div className="relative mt-10 pl-4">
          <span className="absolute inset-0 w-[2px] bg-gray-200 before:absolute before:inset-0 before:h-0 before:bg-gray-400 before:transition-all before:duration-500 before:ease-in-out group-hover:before:h-full group-hover:before:bg-gray-700" />

          <h2 className="text-lg font-bold">{title}</h2>
          <p className="mt-5">
            {captions.map((caption, index) => (
              <span key={index}>
                {caption}
                <br />
              </span>
            ))}
          </p>
        </div>
      </Link>
    </div>
  );
};

// const FeatureBox = ({}) => {
//   return (
//     <div className="group w-full px-8 py-6">
//       <a>
//         <div className="relative">
//           <span className="z-3 absolute left-[20px] top-[-26px] block h-full w-[calc(100%-40px)] border-[3px] border-solid border-red-500" />
//           <Image
//             alt="project-box"
//             width={960}
//             height={1167}
//             className="h-auto w-full"
//             src={`/artists/jesbery.jpeg`}
//           />
//         </div>
//         <div className="relative mt-10 pl-4">
//           <span className="absolute inset-0 w-[2px] bg-gray-200 before:absolute before:inset-0 before:h-0 before:bg-gray-400 before:transition-all before:duration-500 before:ease-in-out group-hover:before:h-full group-hover:before:bg-gray-700" />

//           <h2 className="text-lg font-bold">Festival 2020</h2>
//           <p className="mt-5">
//             This is the caption for this thing. <br /> There could be breaks or
//             it could be just a whole sausage of things that wraps eventually
//             hopefully
//           </p>
//         </div>
//       </a>
//     </div>
//   );
// };

// export default FeatureBox;
