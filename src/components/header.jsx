import {
  BookOpenIcon,
  QuestionMarkCircleIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import React from "react";
import logo from "./logo.png";
import profile from "./profile.png";

const Header = () => {
  return (
    <div
      className={classNames(
        "sticky top-0 z-30 flex h-14 items-center justify-between bg-white px-4 shadow-sm"
      )}
    >
      <img src={logo} alt="logo" className="w-32" />
      <div className="flex items-center space-x-3">
        <QuestionMarkCircleIcon className="text-black w-6" />
        <BookOpenIcon className="text-black w-6" />
        <Squares2X2Icon className="text-black w-6 border-r-2" />
        <img src={logo} alt="logo" className="w-32" />
        <div className="relative w-10 h-10">
          <img
            src={profile}
            alt="profile"
            className="rounded-full border border-gray-100 shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
