import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../Component/About";
import Contact from "../Component/Contact";
import FrontPage from "../Component/FrontPage";
import NavBar from "./NavBar";
import { Container, Box } from "@mui/material";

const ScreensRoot = () => {
  return (
    <Router>
      <Box sx={{ bgcolor: "#40495F" }}>
        <NavBar />
        <Container maxWidth={"lg"}>
          <Routes>
            <Route path="/" element={<FrontPage />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
        </Container>
      </Box>
    </Router>
  );
};

export default ScreensRoot;
