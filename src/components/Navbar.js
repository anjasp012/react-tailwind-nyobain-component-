import React, { useState } from "react";
import * as Button from "./Button";

function Navbar(props) {
  const active = "text-red-500 font-semibold";
  const [phone, setPhone] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex justify-between items-center px-4 py-4 border-b-2 lg:py-0 lg:pr-60 lg:border-0">
        <div>
          <a
            href=""
            className="font-semibold text-2xl text-red-500 hover:text-red-900"
          >
            Pakaton
          </a>
        </div>
        <div>
          <button
            onClick={() => setPhone(!phone)}
            className="text-gray-400 hover:text-gray-900 focus:outline-none lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          phone ? "block" : "hidden"
        } lg:flex flex-col lg:flex-row justify-between items-center w-full py-4 lg:py-0`}
      >
        <div className="flex flex-col lg:flex-row">
          <a
            href="#"
            className={`${active} block px-8 py-2 lg:py-5 font-medium text-gray-400 hover:text-red-500`}
          >
            About
          </a>
          <a
            href="#"
            className="block px-8 py-2 lg:py-5 font-medium text-gray-400 hover:text-red-500 "
          >
            Housing
          </a>
          <a
            href="#"
            className="block px-8 py-2 lg:py-5 font-medium text-gray-400 hover:text-red-500 "
          >
            Pricing
          </a>
          <a
            href="#"
            className="block px-8 py-2 lg:py-5 font-medium text-gray-400 hover:text-red-500 "
          >
            Contact Us
          </a>
        </div>
        <div className="flex flex-col lg:flex-row">
          <a href="#" className="block px-8 py-2 lg:px-2 lg:py-5">
            <Button.signUp className="px-7">Sign Up</Button.signUp>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
