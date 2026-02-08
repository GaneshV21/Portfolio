import React from "react";

function Navbar() {
  return (
    <>
      <div className="flex justify-between p-3 mx-5 ">
        <div>
          <p className="text-2xl cursor-pointer text-white font-semibol mx-2">
            LOGO
          </p>
        </div>
        <div className="flex justify-between gap-5">
          <p className="text-lg cursor-pointer text-white mx-2">About</p>
          <p className="text-lg cursor-pointer text-white mx-2">Projects</p>
          <p className="text-lg cursor-pointer text-white mx-2">Contact</p>
        </div>
      </div>
      <div className="h-[1px] bg-white w-full" />
    </>
  );
}

export default Navbar;
