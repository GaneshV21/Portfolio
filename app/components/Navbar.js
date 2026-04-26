"use client";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <div className="flex justify-end p-3 mx-5 ">
        {isNavOpen ? (
          <div className="flex flex-col justify-between md:hidden gap-5">
            <div className="flex gap-3 items-center">
              <Link href="#experience">
                <p className="text-lg cursor-pointer mx-2 font-medium text-black">
                  Work
                </p>
              </Link>
              <IoIosArrowDown
                size={24}
                className="text-gray-400"
                onClick={() => setIsNavOpen(false)}
              />
            </div>
            <Link href="#projects">
              <p className="text-lg cursor-pointer font-medium mx-2 text-black">
                Projects
              </p>
            </Link>
            <Link href="#contact">
              <p className="text-lg cursor-pointer font-medium mx-2 text-black">
                Contact
              </p>
            </Link>
          </div>
        ) : (
          <IoMdMenu
            className="block md:hidden  text-gray-400"
            size={24}
            onClick={() => setIsNavOpen(true)}
          />
        )}

        <div className="hidden md:flex justify-between gap-5">
          <Link href="#experience">
            <p className="text-lg cursor-pointer font-medium mx-2 text-black">
              Work
            </p>
          </Link>

          <Link href="#projects">
            <p className="text-lg cursor-pointer font-medium mx-2 text-black">
              Projects
            </p>
          </Link>

          <Link href="#contact">
            <p className="text-lg cursor-pointer font-medium mx-2 text-black">
              Contact
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
