import React from "react";
import "./../App.css";

const Hero = () => {
  return (
    <div
      className="flex justify-between items-end w-full mt-14"
      style={{ height: "81vh" }}
    >
      <div className="w-1/2 mb-28">
        <span className="letterSpacedText">Mohamed Ameer</span>
        <h1 className="text-7xl my-5" style={{ fontWeight: 800 }}>
          Website and User interface designer
        </h1>
        <h3
          style={{ color: "#878a8f" }}
          className="font-medium font-family-regular text-xl"
        >
          I am a designer, Helping brands to stand out in the digital era.
          Together we will set the new status quo. As a designer, I enjoy being
          a generalist with a focus on craft and prototyping. I value beautiful
          visuals backed by smart systems thinking. I love the concept that a
          digital product is a living thing that can adapt and evolve over time.
        </h3>
        <button
          className="hover:border-b-2 hover:border-black transition-all ease-in-out mt-4"
          style={{ fontWeight: 900 }}
        >
          <a href="#projects">View Projects</a>
        </button>
      </div>
      <div className="w-1/2 flex justify-center">
        {/* <img src="/assets/hero-with-bg.jpg" alt="hero" /> */}
        <img src="/assets/hero.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
