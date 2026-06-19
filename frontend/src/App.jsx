import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import ContactMe from "./pages/ContactMe";
import About from "./pages/About";
import Project from "./pages/Project";
// import LindinPost from "./pages/LindinPost";
import LinkedInData from "./pages/LindinPost";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/ContactMe" element={<ContactMe />} />
          <Route path="/About" element={<About />}/>
          <Route path="/postdata" element={<LinkedInData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
