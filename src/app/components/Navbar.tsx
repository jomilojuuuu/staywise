import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  return (
    <div className="text-white bg-pink-200 font-bold px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="px-4 md:px-4 flex justify-between items-center max-w-8xl mx-auto">
        <h1 className="text-2xl font-bold text-[#6a6b4e]">STAYwise</h1>
        {/* display on medium screen upward */}
        <div className="space-x-4 hidden lg:flex gap-2 justify-between items-center">
          <button className="flex items-center justify-center gap-3 cursor-pointer text-[#6a6b4e]">
            <p className="text-xl">oke Oluwajomiloju </p>
            <FaRegUserCircle className="text-3xl" />
          </button>
        </div>

        {/* display on small screen alone */}
        <div className="flex w-20 justify-between lg:hidden">
          <FaRegUserCircle className="text-3xl" />
          <IoMdMenu className="text-3xl" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
