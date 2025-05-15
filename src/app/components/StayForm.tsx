import React, { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

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
      <div className="p-2">
        <div className="bg-white h-15 rounded flex justify-between items-center px-3">
          <CiSearch className="text-xl" />
          <input
            type="search"
            value="Abuja"
            readOnly
            className="bg-white font-bold w-full px-2"
          />
          <IoMdClose className="text-xl" />
        </div>

        <div className="flex gap-1 mt-2">
          <div className="bg-white h-14 rounded px-3 py-1">
            <span className="text-sm block">Check-in Date</span>
            <input
              ref={checkInRef}
              type="text"
              className="rounded w-full text-md font-semibold text-black pt-1 "
              placeholder="Thu, May 29, 2025"
            />
          </div>
          <div className="bg-white h-14 rounded px-3 py-1">
            <span className="text-sm block">Check-out Date</span>
            <input
              ref={checkOutRef}
              type="text"
              className="rounded w-full text-md font-semibold text-black pt-1"
              placeholder="Mon, Jun 2, 2025"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayForm;
