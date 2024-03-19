import React from "react";
import { Box } from "@mui/material";
import Experience from "./Experience";
import Info from "./Info";
import Project from "./Project";
import webShop from "./Images/webbshop.webp";
import AiOnic from "./Images/Ai-Onic-Project.webp";
import Klarna from "./Images/klarna.webp";
import Node from "./Images/nodejs-new-white.png";
import reactLogo from "./Images/react-2.webp";
import jsLogo from "./Images/logo-javascript.png";
import htmlLogo from "./Images/html-1.png";

function FrontPage() {
  return (
    <Box>
      {/* Personal info */}
      <Info />

      {/* Experience tab  */}
      <Experience />

      <Project
        image={Klarna}
        link="https://techoverklarna.herokuapp.com/"
        github="https://github.com/TheUnseenBug/Webbshop"
        header="Klarna-Checkout"
        bread="Created a functioning Klarna Checkout using Klarna playground, Node and Express"
        logos={[Node, jsLogo]}
      />
      <Project
        image={webShop}
        link="https://webbshop.vercel.app/"
        github="https://github.com/TheUnseenBug/Webbshop"
        header="Webshop"
        bread="A webshop app where you can add products from a fake api to the cart and checkout via Klarna Checkout. Was created using React, MUI, Redux and my Klarna-Checkout"
        logos={[reactLogo, htmlLogo, jsLogo]}
      />
      <Project
        image={AiOnic}
        link="https://www.stripedpandastudios.com/"
        github="https://github.com/TheUnseenBug/Ai-Onic"
        header="Ai-Onic"
        bread="Developed a website for a indie game following instructions from the studio regarding design and features."
        logos={[reactLogo, htmlLogo]}
      />
    </Box>
  );
}

export default FrontPage;
