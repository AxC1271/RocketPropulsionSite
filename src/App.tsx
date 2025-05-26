import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Project from "./pages/projects/Project";
import Team from "./pages/team/Team";
import Contact from "./pages/contact/Contact";

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="our-team" element={<Team />} />
        <Route path="contact-us" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;