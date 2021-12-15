import React from "react";
import Navbar from "../components/Navbar";
import * as Button from "../components/Button";

function Home(props) {
  return (
    <div className="bg-fixed">
      <header>
        <div className="container">
          <Navbar></Navbar>
        </div>
      </header>
      <content>
        <div className="container my-8">
          <div className="flex justify-center my-4">
            <div className="w-1/2 text-center">
              <div className="font-bold text-3xl lg:text-6xl">
                <ul>
                  <li className="py-2">Outstanding</li>
                  <li className="py-2">Golf Experience</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <div className="lg:w-2/6 text-center">
              <p className="font-medium text-gray-500">
                Feel Extraordinary experience with pure nature vibes while you
                playing golf with your partner
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <a className="block">
              <Button.pakaton className="px-7 py-3 rounded-2xl">
                BookTee Time
              </Button.pakaton>
            </a>
          </div>
        </div>
      </content>
    </div>
  );
}

export default Home;
