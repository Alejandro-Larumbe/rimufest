export default function Hero({ bgImage, children }) {
  return (
    <div
      style={{
        backgroundImage: `url("/${bgImage}.jpeg")`,
        backgroundRepeat: "repeat",
      }}
      className={`justify-end flex flex-col w-screen h-96 md:w-auto bg-cover md:bg-center-left md:h-100`}
    >
      <div className="p-8 text-white md:text-5xl text-3xl">{children}</div>
    </div>
  );
}
