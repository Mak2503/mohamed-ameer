import Navbar from "./Navbar";
import "../App.css";
import Hero from "./Hero";
import Projects from "./Projects";
import Banner from "./Banner";
import Footer from "./Footer";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ProjectById from "./../pages/project-by-id";
// import ScrollToTop from "./ScrollToTop";
import { projectData } from "../projects-data";
import "animate.css/animate.min.css";
import { useAnimationScroll } from "../utils";
import "./Menu.css";

const Main = () => {
  useAnimationScroll({ selector: ".animated-scroll" });

  return (
    <div className="bg-white">
      <Navbar />
      <div className="section-container">
        <div className="inner">
          {/* {items.map((item, idx) => (
            <section  className="animated-scroll" id={item.link}>
              <h2>{item.text}</h2>
            </section>
          ))} */}
          <section className="animated-scroll" id="#home">
            <Hero />
          </section>
          <section className="animated-scroll" id="#projects">
            <Projects
              heading="Case Studies"
              subHeading="projects"
              data={projectData}
            />
          </section>
          <section className="animated-scroll" id="#personal">
            <Projects
              heading="Personal Projects"
              subHeading="photography & drawings"
              data={projectData}
            />
          </section>
          <section className="animated-scroll" id="#banner">
            <Banner />
          </section>
          <section className="animated-scroll" id="#contact">
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Main;
