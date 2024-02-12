import React from "react";
import Primary from "./primary";

const Steppers = () => {
  return (
    <div className="bg-[#f7f8fa] border-b-gray-200 flex items-center justify-between">
      <div className="flex items-center">
        <div className="font-bold ml-5 text-sm">Entries</div>
        <ol className="flex items-center w-full p-3 space-x-2 text-sm  text-center text-gray-500  dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
          <li className="flex items-center text-gray-300 dark:text-blue-500">
            <span className="hidden sm:inline-flex sm:ms-2 text-sm">
              {" "}
              Org Name
            </span>
            <svg
              className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path stroke="currentColor" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
            </svg>
          </li>
          <li className="flex items-center">
            <span className="hidden sm:inline-flex sm:ms-2 text-[#7982da] text-sm">
              {" "}
              Account Info
            </span>
            <svg
              className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path stroke="currentColor" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
            </svg>
          </li>
        </ol>
      </div>
      <div className="mr-4">
        <Primary className="bg-[#7982da] text-white">+ New Entry</Primary>
      </div>
    </div>
  );
};

export default Steppers;
