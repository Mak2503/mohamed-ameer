import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectById from "./pages/project-by-id";
import ScrollToTop from "./components/ScrollToTop";
import { projectData } from "./projects-data";
import { photographyData } from "./photography-data";

function App() {
  return (
    <div className="m-10 bg-white">
      <Navbar />
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Hero />
                  <Projects
                    heading="Case Studies"
                    subHeading="projects"
                    data={projectData}
                    link="project"
                  />
                  <Projects
                    heading="Personal Projects"
                    subHeading="photography & drawings"
                    data={photographyData}
                    link="photography"
                  />
                  <Banner />
                </div>
              }
            />
            <Route
              path="/projects/:id"
              element={
                <div>
                  <ProjectById
                    subHeading="case study"
                    data={projectData}
                    view="list"
                  />
                </div>
              }
            />
            <Route
              path="/photography/:id"
              element={
                <div>
                  <ProjectById
                    subHeading="photography"
                    data={photographyData}
                    view="grid"
                  />
                </div>
              }
            />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
