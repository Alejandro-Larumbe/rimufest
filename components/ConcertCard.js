import Date from "./date";
import Button from "./primitives/button";

export default function ParagraphWithImage(props) {
  const { path, imgSrc, title, title2, p, ticketsUrl, date, time, subtitle } =
    props;

  // console.log(imgSrc)

  return (
    <div className="my-8 border-2 text-pink border-pink rounded-lg w-full sm:w-101 p-6">
      <h2 className="text-2xl uppercase font-title font-extrabold sm:text-3xl">
        {title}
        <span className="text-indigo-600 dark:text-indigo-400">{title2}</span>
      </h2>
      {subtitle && (
        <h3 className="text-base font-extrabold sm:text-l">{subtitle}</h3>
      )}
      <h3 className="text-sm mt-2 font-bold sm:text-l">
        {Date(date)}, {time}
      </h3>

      <div className="flex mt-8">
        <a href={path}>
          <Button>More...</Button>
        </a>
        {!!ticketsUrl && (
          <a href={ticketsUrl} target="_blank">
            <Button>Tickets</Button>
          </a>
        )}
      </div>
    </div>
  );
}
