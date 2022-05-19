import React, { useState } from "react";

export default function About() {
  const [light, dark] = useState("Enable Dark Mode");
  const [lightMode, darkMode] = useState({
    backgroundColor: "white",
    color: "black",
  });

  const toggleColor = () => {
    if (lightMode.color == "black") {
      darkMode({
        backgroundColor: "black",
        color: "white",
      });
      dark("Enable Light Mode");
    } else {
      darkMode({
        backgroundColor: "white",
        color: "black",
      });
      dark("Enable Dark Mode");
    }
  };
  return (
    <div style={lightMode}>
      <div className="pt-32 pb-20 md:pt-40">
        <div className="container m-auto px-6 md:px-12 lg:px-6">
          <div className="lg:flex lg:items-center lg:gap-x-16">
            <div className="space-y-10 lg:w-7/12 mb-36">
              <h1 className=" text1 font-bold text-gray-900 text-4xl md:text-5xl">
                Run successful remote and hybrid teams
              </h1>
              <p className="text-gray-600 lg:w-11/12 info">
                DailyBot takes chat and collaboration to the next level: daily
                standups, team check-ins, surveys, kudos, best companion bot for
                your virtual watercooler, 1:1 intros, motivation tracking and
                more.
              </p>
              <button
                onClick={toggleColor}
                className="dark flex mt-4 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg"
              >
                {light}
              </button>
            </div>

            <div hidden className=" im lg:block lg:w-5/12">
              <img
                src="https://addons.mozilla.org/user-media/previews/full/189/189816.png?modified=1622132788"
                className="w-full rounded-lg"
                alt="wath illustration"
                loading="lazy"
                width="320"
                height="280"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
