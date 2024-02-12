import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

const Search = ({
  onChange,
  showSearchIcon,
  defaultValue,
  searchProps,
  className,
  fieldRef,
  ...props
}) => {
  return (
    <div className="flex items-center">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
            />
          </svg>
        </div>
        <input
          type="search"
          placeholder="Search in Entries"
          id="search"
          name="search"
          autoComplete="off"
          value={defaultValue}
          onChange={(e) => {
            onChange?.(e);
            searchProps.search(e.target.value);
          }}
          ref={fieldRef}
          {...props}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#7982da] focus:border-[#7982da] block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#7982da] dark:focus:border-[#7982da]"
          required
        />
      </div>
      <button className="p-2.5 ms-2 text-sm font-medium text-white bg-[#7982da] rounded-lg border hover:bg-purple-300 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
        <div className="flex items-center">
          <MagnifyingGlassIcon className="w-4 h-4 mr-3" />
          <span>Search</span>
        </div>
      </button>
    </div>
  );
};

export default Search;
