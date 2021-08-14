import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-8 text-white bg-pink bg-opacity-75 shadow">
      <div className="flex flex-col items-start container p-8 mx-auto">
        {/* <p className="max-w-md mt-2 text-gray-500 dark:text-gray-400">rimufest@gmail.com</p> */}
        <div>
          <img src="/logo-dark.png" className="w-36" />
        </div>
        <div className="flex mt-4 -mx-2">
          <a
            target="blank"
            href="https://www.facebook.com/RimuFest/"
            className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
            </svg>
          </a>
          <a
            target="blank"
            href="https://www.instagram.com/rimufest/?hl=en"
            className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
        <div className="py-4">
          <h3 className="text-gray-700 dark:text-white">
            e-mail: rimufest@gmail.com
          </h3>
        </div>

        {/* <div className="mt-6  lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 xl:grid-cols-6">
              <div>
                <Link href="/about">
                  <h3 className="text-gray-700 uppercase dark:text-white">
                    About
                  </h3>
                </Link>
              </div>
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Concerts
                </h3>
              </div>
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Programmes
                </h3>
              </div>
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Artists
                </h3>
              </div>
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Join Us
                </h3>
              </div>
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Gallery
                </h3>
              </div>
            </div>
          </div> */}

        {/* <hr className="h-px my-6 bg-white border-none dark:bg-gray-700" /> */}

        <div className="py-8">
          <p className="text-center text-xs text-white">
            © Rimufest 2021 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
