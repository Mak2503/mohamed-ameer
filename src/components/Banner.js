import React from "react";
import "../App.css";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <span className="letterSpacedText">Need a designer ?</span>
      <div
        className="text-6xl my-5 cursor-pointer border-b-4 border-white hover:border-b-4 hover:border-black transition-all ease-in-out"
        style={{ fontWeight: 900 }}
      >
        Let's work together &#8594;
      </div>
    </div>
  );
};

export default Banner;
