import React from "react";
import "./../App.css";

const ProjectCard = ({ imgUrl, year, description, descColor }) => {
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
        <div
          className="mt-2 mb-7 text-3xl w-2/3"
          style={{ fontWeight: 900, color: descColor || "white" }}
        >
          {description}
        </div>
        <div className="middle" style={{ color: "#878a8f" }}>
          View Case Study &#8594;
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
