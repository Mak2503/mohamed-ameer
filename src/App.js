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
                  />
                  <Projects
                    heading="Personal Projects"
                    subHeading="photography & drawings"
                    data={projectData}
                  />
                  <Banner />
                </div>
              }
            />
            <Route
              path="/projects/:id"
              element={
                <div>
                  <ProjectById />
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
