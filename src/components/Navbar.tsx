import Link from "next/link";
import { useState } from "react";
// import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full flex items-center justify-center bg-slate-600 py-2">
      <div className="w-full flex px-5 md:px-5">
        <div className="w-full flex items-center justify-between">
          <div className="w-[20%] sm:w-[40%] text-white flex items-center font-extrabold">
            <p>PORTFOLIO</p>
          </div>
          <div className="hidden md:flex md:w-[60%] lg:w-[50%]">
            <div className="w-full flex justify-end">
              <div className="w-full flex justify-between text-white font-medium">
                <div className="bg-gray-800 px-1 py-1 rounded-md min-w-[80px] text-center">
                  <Link className="fire-link" href={""}>
                    HOME
                  </Link>
                </div>

                <div className="bg-gray-800 fire-link px-1 py-1 rounded-md min-w-[80px] text-center">
                  <Link className="" href={""}>
                    HOME
                  </Link>
                </div>

                <div className="bg-gray-800 px-1 py-1 rounded-md min-w-[80px] text-center">
                  <Link className="fire-link" href={""}>
                    HOME
                  </Link>
                </div>

                <div className="bg-gray-800 px-1 py-1 rounded-md min-w-[80px] text-center">
                  <Link className="fire-link" href={""}>
                    HOME
                  </Link>
                </div>

                <div className="bg-gray-800 px-1 py-1 rounded-md min-w-[80px] text-center">
                  <Link className="fire-link" href={""}>
                    HOME
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button className="text-white" onClick={toggleMenu}>
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute w-full bg-gray-800 text-white mt-[220px] py-2">
          <div className="flex flex-col items-center gap-3">
            <div className="bg-gray-800 border px-5 py-1 rounded-md min-w-[80px] text-center">
              <Link className="fire-link" href={""}>
                HOME
              </Link>
            </div>

            <div className="bg-gray-800 fire-link border px-5 py-1 rounded-md min-w-[80px] text-center">
              <Link className="" href={""}>
                HOME
              </Link>
            </div>

            <div className="bg-gray-800  px-5 border py-1 rounded-md min-w-[80px] text-center">
              <Link className="fire-link" href={""}>
                HOME
              </Link>
            </div>

            <div className="bg-gray-800 px-5 border py-1 rounded-md min-w-[80px] text-center">
              <Link className="fire-link" href={""}>
                HOME
              </Link>
            </div>

            <div className="bg-gray-800  px-5 border py-1 rounded-md min-w-[80px] text-center">
              <Link className="fire-link" href={""}>
                HOME
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
