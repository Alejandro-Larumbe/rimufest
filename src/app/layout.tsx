import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { AppMenu } from "../components/AppMenu/AppMenu";
import Footer from "~/components/Footer";

export const metadata: Metadata = {
  title: "RimuFest Chamber Music Festival - Empowering Young Musicians",
  description:
    "Join the RimuFest Chamber Music Festival, an inclusive and innovative event designed for young musicians aged 7-18. Experience high-quality music education, engaging performances, and collaborative learning opportunities in Tauranga, NZ. Discover our annual programs, masterclasses, and more!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="relative">
        <AppMenu />
        <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
