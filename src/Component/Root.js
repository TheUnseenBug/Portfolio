import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../Component/About";
import Contact from "../Component/Contact";
import FrontPage from "../Component/FrontPage";
import Projects from "./Projects";
import NavBar from "./NavBar";
import { Container } from "@mui/material";

const ScreensRoot = () => {
  return (
    <Router>
      <NavBar />
      <Container maxWidth={"lg"}>
        <Routes>
          <Route path="/" element={<FrontPage />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          {/* <Route path="/Project" element={<Projects />}></Route> */}
        </Routes>
      </Container>
    </Router>
  );
};

export default ScreensRoot;
