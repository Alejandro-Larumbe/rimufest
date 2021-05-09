import Image from "next/Image";

export default function EventCard(props) {
  const { imgSrc, imageAlt, title, p, href } = props;

  return (
    <div className="max-w-md flex flex-col text-pink justify-between w-96 h-auto mb-24 px-8 py-8 mx-auto border-pink bg-white rounded-lg dark:bg-gray-800 border-2">
      <div className="flex justify-center -mt-16 md:justify-end">
        <h2 className="mt-2 text-4xl font-extrabold text-green dark:text-white md:mt-0 md:text-3xl">
          {title}
        </h2>
        <img
          src={`/${imgSrc}-icon.png`}
          className="object-cover ml-8 w-16 h-16"
          alt="Testimonial avatar"
        />
      </div>

      <p className="mt-2 text-gray-600 dark:text-gray-200">{p}</p>

      <div className="flex align-self-end justify-end mt-4">
        <a
          href="#"
          className="text-xl font-medium text-indigo-500 dark:text-indigo-300"
        >
          Apply
        </a>
      </div>
    </div>
  );
}
