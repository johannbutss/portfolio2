import React from "react";

import { appleImg, bagImg, searchImg } from "../assets";
import { navLists, sourceCode } from "../constants";

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between p-5 sm:px-10">
      <nav className="screen-max-width flex w-full">
        <a href="#">
        </a>

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="text-gray cursor-pointer px-5 text-sm transition-all hover:text-white"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <a href="#">
          </a>
          <a href="#">
          </a>
          <a href={sourceCode} target="_blank" rel="noreferrer noopener">
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
