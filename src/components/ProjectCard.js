import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./../App.css";

const ProjectCard = ({ imgUrl, year, description }) => {
  return (
    <div className="container">
      <img
        src={imgUrl}
        alt="Avatar"
        className="image"
        style={{ width: "100%", height: "100%" }}
      />
      <div className="absolute top-10 left-10 content">
        <span className="letterSpacedText">{year}</span>
        {/* <AnimationOnScroll
          initiallyVisible={false}
          animateIn="animate__bounceInDown"
          style={{ height: "50%" }}
        > */}
        <div
          className="mt-2 text-white mb-7 text-3xl w-2/3"
          style={{ fontWeight: 900 }}
        >
          {description}
        </div>
        {/* </AnimationOnScroll> */}
        <div className="middle" style={{ color: "#878a8f" }}>
          View Case Study &#8594;
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
