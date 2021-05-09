import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { Switch } from "@headlessui/react";
import { MoonIcon as MoonSolid } from "@heroicons/react/solid";
import { MoonIcon as MoonOutline } from "@heroicons/react/outline";
import { SunIcon as SunSolid } from "@heroicons/react/solid";

import { max } from "date-fns";

import useTranslation from "../intl/useTranslation";
import { LanguageContext, locales } from "../intl/LanguageProvider";

export default function Appbar({ children }) {
  const router = useRouter();
  const { t } = useTranslation();
  const [locale, setLocale] = useContext(LanguageContext);
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(theme !== "dark");
  const [openMenu, setOpenMenu] = useState(false);
  const [path] = useState(router.asPath);

  function handleLocaleChange(language) {
    if (!window) {
      return;
    }
    const regex = new RegExp(`^/(${locales.join("|")})`);
    localStorage.setItem("lang", language);
    setLocale(language);

    // router.push(router.pathname, router.asPath.replace(regex, `/${language}`));
  }

  console.log("path", path);

  function onSwitch() {
    setTheme(theme === "dark" ? "light" : "dark");
    setEnabled();
  }

  return (
    <nav className="bg-green  opacity-90">
      <div className="container px-6 py-6 mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            {/* <div> */}
            <Link href="/">
              <div className="w-28 h-14 md:w-36 md:h-18 bg-contain bg-no-repeat bg-logo-dark" />
            </Link>
            {/* <Link href='/'>
                <Image
                  src={`/logo-dark.svg`}
                  className={"hover:cursor-pointer"}
                  width={200}
                  height={100}
                  alt="avatar"
                  objectFit="contain"
                />
              </Link> */}
            {/* </div> */}

            {/* <!-- Mobile menu button --> */}
            <div className="flex md:hidden">
              <button
                onClick={() => setOpenMenu(openMenu === true ? false : true)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <div
            className={`flex-1 ${
              openMenu ? "block" : "hidden"
            } md:flex md:items-center md:justify-between`}
          >
            <div className="flex flex-col items-end -mx-4 md:flex-row md:items-center md:mx-8">
              <Link href="/about">
                <a className="uppercase px-2 py-1 mx-2 mt-2 text-xl font-extrabold text-pink transition-colors duration-200 transform md:mt-0 dark:text-gray-200 border-b-green hover:border-pink hover:border-b-2">
                  {t("about")}
                </a>
              </Link>
              <Link href="/concerts">
                <h3
                  className={`uppercase  px-2 py-1 mx-2 mt-2 text-xl font-extrabold text-pink transition-colors duration-200 transform md:mt-0 dark:text-gray-200 border-b-green hover:border-pink hover:border-b-2`}
                >
                  {t("concerts")}
                </h3>
              </Link>
              <Link href="/festivals">
                <a className="uppercase font-extrabold px-2 py-1 mx-2 mt-2 text-xl font-extrabold text-pink transition-colors duration-200 transform md:mt-0 dark:text-gray-200 border-b-green hover:border-pink hover:border-b-2">
                  {t("festivals")}
                </a>
              </Link>
              <Link href="/artists">
                <a className="uppercase px-2 py-1 mx-2 mt-2 text-xl font-extrabold text-pink transition-colors duration-200 transform md:mt-0 dark:text-gray-200 border-b-green hover:border-pink hover:border-b-2">
                  {t("artists")}
                </a>
              </Link>
              <Link href="/gallery">
                <a className="uppercase px-2 py-1 mx-2 mt-2 text-xl font-extrabold text-pink transition-colors duration-200 transform md:mt-0 dark:text-gray-200 border-b-green hover:border-pink hover:border-b-2">
                  {t("gallery")}
                </a>
              </Link>
              <Link href="/support">
                <a className="uppercase px-2 py-1 mx-2 mt-2 text-xl font-extrabold text-pink transition-colors duration-200 transform md:mt-0 dark:text-gray-200 border-b-green hover:border-pink hover:border-b-2">
                  {t("support")}
                </a>
              </Link>
            </div>

            <div className="flex items-end md:flex-row md:items-center flex-col mt-4 md:mt-0">
              <div className="mb-5 md:mb-0 overflow-hidden ">
                <button className="h-6 w-6 text-pink focus:outline-none">
                  {theme === "dark" ? (
                    <SunSolid onClick={() => setTheme("light")} />
                  ) : (
                    <MoonSolid onClick={() => setTheme("dark")} />
                  )}
                </button>
              </div>
              <div className="w-7 h-7 md:w-8 md:h-8 ml-4 overflow-hidden rounded-full">
                <button
                  onClick={() =>
                    handleLocaleChange(locale === "nz" ? "mx" : "nz")
                  }
                  type="button"
                  className="flex items-center focus:outline-none"
                  aria-label="toggle profile dropdown"
                >
                  <Image
                    src={`/${locale}.svg`}
                    className="object-cover w-full h-full"
                    width={50}
                    height={50}
                    alt="avatar"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
