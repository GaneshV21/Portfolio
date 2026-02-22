"use client";
import { useState } from "react";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between p-3 mx-5 ">
        <div>
          <p className="text-2xl cursor-pointer text-white font-semibol mx-2">
            LOGO
          </p>
        </div>

        {isNavOpen ? (
          <div className="flex flex-col justify-between md:hidden gap-5">
            <div className="flex gap-3 items-center">
              <p className="text-lg cursor-pointer text-gray-400 mx-2">About</p>
              <IoIosArrowDown
                size={24}
                className="text-gray-400"
                onClick={() => setIsNavOpen(false)}
              />
            </div>
            <p className="text-lg cursor-pointer text-gray-400 mx-2">
              Projects
            </p>
            <p className="text-lg cursor-pointer text-gray-400 mx-2">Contact</p>
          </div>
        ) : (
          <IoMdMenu
            className="block md:hidden  text-gray-400"
            size={24}
            onClick={() => setIsNavOpen(true)}
          />
        )}

        <div className="hidden md:flex justify-between gap-5">
          <p className="text-lg cursor-pointer text-gray-400 mx-2">About</p>
          <p className="text-lg cursor-pointer text-gray-400 mx-2">Projects</p>
          <p className="text-lg cursor-pointer text-gray-400 mx-2">Contact</p>
        </div>
      </div>
      <div className="h-1 border border-t-gray-400"></div>
    </>
  );
}

export default Navbar;
