import React from "react";
import { Box } from "@mui/material";
import Experience from "./Experience";
import Info from "./Info";
import Project from "./Project";
import webShop from "./Images/webbshop.png";
import AiOnic from "./Images/Ai-Onic-Project.webp";
import Klarna from "./Images/klarna.webp";

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
        github="https://github.com/TheUnseenBug/Klarna-Checkout"
        header="Klarna-Checkout"
        bread="Created a functioning Klarna Checkout using Klarna playground, Node and Express"
        stack={["Node", "KlarnaPlayground", "Express"]}
      />
      <Project
        image={webShop}
        link="https://webbshop.vercel.app/"
        github="https://github.com/TheUnseenBug/Webbshop"
        header="Webshop"
        bread="A webshop app where you can add products from a fake api to the cart and checkout via Klarna Checkout. Was created using React, MUI, Redux and my Klarna-Checkout"
        stack={["React", "Redux", "MUI"]}
      />
      {/* <Project
        image={AiOnic}
        link="https://www.stripedpandastudios.com/"
        github="https://github.com/TheUnseenBug/Ai-Onic"
        header="Ai-Onic"
        bread="Developed a website for a indie game following instructions from the studio regarding design and features."
        stack={["React", "HTML", "CSS"]}
      /> */}
    </Box>
  );
}

export default FrontPage;
