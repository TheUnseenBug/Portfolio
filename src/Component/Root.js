import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../Component/About";
import Contact from "../Component/Contact";
import FrontPage from "../Component/FrontPage";
import NavBar from "./NavBar";
import { Container, Box } from "@mui/material";
import MobileNav from "./MobileNav";

const ScreensRoot = () => {
  return (
    <Router>
      <NavBar />
      <Container sx={{ paddingBottom: "70px" }} maxWidth={"lg"}>
        <Routes>
          <Route path="/" element={<FrontPage />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </Container>
      <MobileNav />
    </Router>
  );
};

export default ScreensRoot;
