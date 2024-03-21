import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import useTranslation from "../intl/useTranslation";
import Button from "./primitives/button";

const tabs = [
  { path: "/about", name: "about" },
  { path: "/concerts", name: "concerts" },
  { path: "/annual-nz-2025", name: "nz2025" },
  { path: "/holiday-programme", name: "holidayProgramme" },
  { path: "/gallery", name: "gallery" },
  { path: "/press-room", name: "pressRoom" },
];

export default function Appbar() {
  const router = useRouter();
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div>
        <nav className="w-full fixed z-50  bg-white dark:bg-black  bg-opacity-50">
          <div className="container px-6 py-6 mx-auto">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="flex items-center justify-between">
                <Link href="/">
                  <a className="w-28 mt-3 h-14 lg:w-36 lg:h-18 bg-contain bg-no-repeat bg-logo-pink dark:bg-logo-dark" />
                </Link>

                {/* <!-- Mobile menu button --> */}
                <div className="flex lg:hidden">
                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === true ? false : true)
                    }
                    type="button"
                    className="-top-4 text-gray-500 dark:text-gray-200 hover:text-pink dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                    aria-label="toggle menu"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 pink h-6 fill-current"
                    >
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
                } lg:flex lg:items-center lg:justify-between`}
              >
                <div className="flex flex-col items-end -mx-4 lg:flex-row lg:items-center lg:mx-8">
                  {tabs.map(({ path: currentPath, name }) => {
                    console.log(router.asPath);
                    return (
                      <Link key={currentPath} href={currentPath}>
                        <a
                          onClick={() => setOpenMenu(false)}
                          className={`uppercase text-base font-bold hover:text-pink text-xs lg:text-base px-2 py-1 mx-2 mt-2 transition-colors duration-200 transform lg:mt-0 ${
                            router.asPath === currentPath ? " text-pink" : ""
                          }`}
                        >
                          {t(name)}
                        </a>
                      </Link>
                    );
                  })}
                </div>

                <div className="flex items-end lg:flex-row lg:items-center flex-col mt-4 lg:mt-0"></div>
              </div>
              <div className="hidden lg:block">
                <Button>
                  <a href="/support">Support</a>
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div />
    </>
  );
}
