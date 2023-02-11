import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="m-10 bg-white">
      <Navbar />
      <Hero />
      <Projects />
      <Banner />
    </div>
  );
}

export default App;
