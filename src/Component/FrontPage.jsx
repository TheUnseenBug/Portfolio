import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";
import Experience from "./Experience";
import Info from "./Info";
import Project from "./Project";
import webShop from "./Images/webbshop.png";
import AiOnic from "./Images/Ai-Onic-Project.png";
import Klarna from "./Images/klarna.png";
import Node from "./Images/nodejs-new-white.png";
import githubLogo from "./Images/GitHub-Mark.png";
import MongoDBLogo from "./Images/MongoDB_Logo_RGB_Logo_Forest-Green.png";
import reactLogo from "./Images/react-2.png";
import jsLogo from "./Images/logo-javascript.png";
import htmlLogo from "./Images/html-1.png";
import Logo from "./Images/logo2.png";

function FrontPage() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box>
      {/* Personal info */}
      <Info />

      {/* Experience tab  */}
      <Experience />

      {/* <Project
        image={Klarna}
        link="https://techoverklarna.herokuapp.com/"
        github="https://github.com/TheUnseenBug/Webbshop"
        header="Klarna-Checkout"
        bread="Created a functioning Klarna Checkout using Klarna playground, Node and Express"
      />
      <Project
        image={webShop}
        link="https://www.thewebshop.ml/"
        github="https://github.com/TheUnseenBug/Webbshop"
        header="Webshop"
        bread="A webshop app where you can add products from a fake api to the cart and checkout via Klarna Checkout. Was created using React, MUI, Redux and my Klarna-Checkout"
      />
      <Project
        image={AiOnic}
        link="https://www.stripedpandastudios.com/"
        github="https://github.com/TheUnseenBug/Ai-Onic"
        header="Ai-Onic"
        bread="Developed a website for a indie game following instructions from the studio regarding design and features."
      /> */}
    </Box>
  );
}

export default FrontPage;
