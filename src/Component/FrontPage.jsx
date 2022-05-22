import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";
import Experience from "./Experience";
import Info from "./Info";
import Project from "./Project";
import webShop from "./Images/webbshop.png";
import AiOnic from "./Images/Ai-Onic-Project.png";

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

      <Project
        image={webShop}
        link="https://www.thewebshop.ml/"
        github="https://github.com/TheUnseenBug/Webbshop"
        header="Webshop"
        bread="Hello this is my webshop sadf sadf asdf asdf sadf asdf asdfasddf hdsgh dsdfsgsdfgdsfgsdg"
      />
      <Project
        image={AiOnic}
        link="https://www.stripedpandastudios.com/"
        github="https://github.com/TheUnseenBug/Ai-Onic"
        header="Ai-Onic"
        bread="Hello this is my webshop sadf sadf asdf asdf sadf asdf asdfasddf hdsgh dsdfsgsdfgdsfgsdg"
      />
      <Project
        image={webShop}
        link="https://www.thewebshop.ml/"
        github="https://github.com/TheUnseenBug/Webbshop"
        header="Klarna-Checkout"
        bread="Hello this is my webshop sadf sadf asdf asdf sadf asdf asdfasddf hdsgh dsdfsgsdfgdsfgsdg"
      />
    </Box>
  );
}

export default FrontPage;
