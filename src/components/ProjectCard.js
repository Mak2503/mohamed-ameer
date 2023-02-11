import React from "react";
import "./../App.css";

const ProjectCard = ({ imgUrl, year, description }) => {
  return (
    <div class="container">
      <img src={imgUrl} alt="Avatar" class="image" style={{ width: "100%" }} />
      <div className="absolute top-10 left-10 content">
        <span className="letterSpacedText">{year}</span>
        <div
          className="mt-2 text-white mb-7 text-3xl"
          style={{ fontWeight: 900 }}
        >
          {description}
        </div>
        <div class="middle" style={{ color: "#878a8f" }}>
          View Case Study &#8594;
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
