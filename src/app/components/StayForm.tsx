import React, { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { LiaBedSolid } from "react-icons/lia";

const StayForm: React.FC = () => {
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkInRef.current) {
      flatpickr(checkInRef.current, {
        dateFormat: "D, M d, Y",
        defaultDate: "2025-05-29",
        allowInput: true,
        disableMobile: true,
        onReady: (selectedDates, dateStr, instance) => {
          if (selectedDates.length > 0) {
            instance.input.value = instance.formatDate(
              selectedDates[0],
              "D, M d, Y"
            );
          }
        },
      });
    }

    if (checkOutRef.current) {
      flatpickr(checkOutRef.current, {
        dateFormat: "D, M d, Y",
        defaultDate: "2025-06-02",
        allowInput: true,
        disableMobile: true,
        onReady: (selectedDates, dateStr, instance) => {
          if (selectedDates.length > 0) {
            instance.input.value = instance.formatDate(
              selectedDates[0],
              "D, M d, Y"
            );
          }
        },
      });
    }
  }, []);

  return (
    <div className="bg-orange-300 rounded-md mt-4">
      <div className="p-2 lg:p-1 lg:flex lg:gap-1">
        <div className="bg-white h-15 lg:h-12 rounded flex justify-between items-center px-3">
          <CiSearch className="text-xl lg:hidden" />
          <LiaBedSolid className="hidden lg:block text-xl"/>
          <input
            type="search"
            value="Abuja"
            readOnly
            className="bg-white font-bold w-full px-2 lg:text-sm"
          />
          <IoMdClose className="text-xl" />
        </div>

        <div className="flex gap-1 mt-2 lg:hidden">
          <div className="bg-white h-14 rounded px-3 py-1">
            <span className="text-sm text-black block">Check-in Date</span>
            <input
              ref={checkInRef}
              type="text"
              className="rounded w-full text-md font-semibold text-black pt-1 "
              placeholder="Thu, May 29, 2025"
            />
          </div>
          <div className="bg-white h-14 rounded px-3 py-1">
            <span className="text-sm text-black block">Check-out Date</span>
            <input
              ref={checkOutRef}
              type="text"
              className="rounded w-full text-md font-semibold text-black pt-1"
              placeholder="Mon, Jun 2, 2025"
            />
          </div>
        </div>

        <div className="bg-white rounded text-sm h-12 w-[22%] hidden lg:flex px-3 items-center">
          <input type="date" name="" id="" />
        </div>

          <div className="bg-white hidden rounded w-[28%] lg:flex text-sm px-3 items-center h-12">
          <LuUserRound />
            <p>2 adults. 0 children. 1 room</p>
            <IoIosArrowDown />
          </div>

        <div className="flex mt-2 lg:hidden">
          <div className="bg-white h-14 rounded px-1 py-1">
            <span className="text-sm block text-black">Adults</span>
            <input
              type="text"
              className="rounded w-full text-md font-semibold text-black pl-1 pt-1"
              placeholder="2"
            />
          </div>
          <div className="bg-white h-14 rounded px-1 py-1">
            <span className="text-sm block text-black">Children</span>
            <input
              type="text"
              className="rounded w-full text-md font-semibold text-black pl-1 pt-1"
              placeholder="1"
            />
          </div>
          <div className="bg-white h-14 rounded px-1 py-1">
            <span className="text-sm block text-black">Rooms</span>
            <input
              type="text"
              className="rounded w-full text-md font-semibold text-black pl-1 pt-1"
              placeholder="1"
            />
          </div>
        </div>

        <button className="bg-blue-500 w-full px-3 h-14 rounded text-white font-semibold mt-2 lg:-mt-0 lg:h-12 lg:w-[13%]">
          Search
        </button>
      </div>
    </div>
  );
};

export default StayForm;
