import classNames from "classnames";
import React from "react";

const Primary = ({ children, className = "", ...props }) => {
  return (
    <button
      className={classNames(
        "items-center rounded-md border border-transparent bg-white px-4 py-2 text-xs font-medium text-white shadow-sm hover:opacity-80 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-opacity-50 disabled:opacity-30 sm:text-sm",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Primary;
