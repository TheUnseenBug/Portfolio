import React from "react";
import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import Node from "./Images/nodejs-new-white.png";
import githubLogo from "./Images/GitHub-Mark.png";
import MongoDBLogo from "./Images/MongoDB_Logo_RGB_Logo_Forest-Green.png";
import reactLogo from "./Images/react-2.png";
import webShop from "./Images/webbshop.png";
import jsLogo from "./Images/logo-javascript.png";
import htmlLogo from "./Images/html-1.png";
import Logo from "./Images/logo2.png";

const Project = ({ name, link, image }) => {
  return (
    <Grid
      container
      item
      xs={12}
      spacing={2}
      flexDirection="column"
      sx={{ marginTop: "50px" }}
    >
      <Box>
        <Grid
          container
          gridTemplateRows="repeat(12,minmax(0,1fr))"
          spacing={2}
          justifyContent="flexStart"
        >
          <Grid item xs={2} sx={{ marginLeft: "50px" }}>
            <Paper
              elevation="10"
              sx={{ borderRadius: "25px", padding: "20px" }}
            >
              <Typography variant="h3">Hello </Typography>
              <Typography variant="h4">Hello this is my {name}</Typography>
              {/* fungerar ej */}
              <Button onClick={(event) => (window.location.href = { link })}>
                website
              </Button>
              <img
                style={{ height: "30px", borderRadius: "25px" }}
                src={githubLogo}
              ></img>
              <img
                style={{ height: "30px", borderRadius: "25px" }}
                src={reactLogo}
              ></img>
              <img
                style={{ height: "30px", borderRadius: "25px" }}
                src={htmlLogo}
              ></img>
              <img
                style={{ height: "30px", borderRadius: "25px" }}
                src={Node}
              ></img>
            </Paper>
          </Grid>
          <Grid item xs={2} sx={{ width: "100%" }}>
            <Paper elevation="10" sx={{ borderRadius: "25px", width: "700px" }}>
              <a href="https://github.com/TheUnseenBug/Webbshop">
                <Box>
                  <img
                    onClick="https://github.com/TheUnseenBug/Webbshop"
                    src={image}
                    style={{ width: "100%", borderRadius: "25px" }}
                  ></img>
                </Box>
              </a>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Grid item></Grid>
      <Grid item>Project</Grid>
      <Grid item>Project</Grid>
      <Grid item>Project</Grid>
      <Grid item>Project</Grid>
    </Grid>
  );
};

export default Project;
