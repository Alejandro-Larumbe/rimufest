"use client";

export function HomeHero() {
  return (
    <>
      <div className="relative bg-black z-10 h-screen w-screen overflow-hidden">
        <div
          className={`absolute inset-0 z-10 flex items-center justify-center transition-transform duration-300 ease-in-out`}
        >
          <span className="text-center text-3xl font-semibold text-pink-500">
            Rimufest Chamber Music Festival
          </span>
        </div>

        <video
          className="fixed inset-0 z-0 h-full w-full object-cover"
          src="/splash.mp4" // Path to the video file in the public folder
          autoPlay
          loop
          muted
          playsInline
          style={{ objectFit: "cover" }} // Ensures the video covers the entire area
        />
      </div>
    </>
  );
}
