import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../Component/About";
import Contact from "../Component/Contact";
import FrontPage from "../Component/FrontPage";
import Projects from "./Projects";
import NavBar from "./NavBar";

const ScreensRoot = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<FrontPage />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </Router>
  );
};

export default ScreensRoot;
