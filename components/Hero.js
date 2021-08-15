export default function Hero({ bgImage, children }) {
  return (
    <div
      style={{
        backgroundImage: `url("/${bgImage}.jpeg")`,
        backgroundSize: "cover",
      }}
      className={`justify-end flex flex-col w-screen h-96`}
    >
      <div className="p-8 text-white text-3xl">{children}</div>
    </div>
  );
}
