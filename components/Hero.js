export default function Hero({ bgImage, children }) {
  console.log(bgImage);
  return (
    <div
      style={{
        backgroundImage: `url("/${bgImage}.jpeg")`,
        backgroundRepeat: "repeat",
      }}
      className={`justify-end flex flex-col w-screen h-96 md:w-auto md:bg-cover md:bg-center-left md:h-100`}
    >
      <div className="p-8 text-white md:text-5xl text-3xl">{children}</div>
    </div>
  );
}
