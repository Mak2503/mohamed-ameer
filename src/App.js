import "./App.css";
import "animate.css/animate.min.css";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ProjectById from "./pages/project-by-id";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Main />} />
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
  );
}

export default App;
