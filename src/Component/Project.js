import React from "react";
import { Grid, Box, Paper, Typography, Button, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import Node from "./Images/nodejs-new-white.png";
import githubLogo from "./Images/GitHub-Mark.png";
import MongoDBLogo from "./Images/MongoDB_Logo_RGB_Logo_Forest-Green.png";
import reactLogo from "./Images/react-2.png";
import webShop from "./Images/webbshop.png";
import jsLogo from "./Images/logo-javascript.png";
import htmlLogo from "./Images/html-1.png";
import Logo from "./Images/logo2.png";

const Project = ({ link, image, github, bread, header }) => {
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
          sx={{
            justifyContent: { md: "flex-start", lg: "center" },
            display: "flex",
            maxWidth: "80%",
          }}
        >
          <Grid item xs={3} sx={{ marginLeft: { md: 5, lg: 0 } }}>
            <Paper elevation="6" sx={{ borderRadius: "25px", padding: "10px" }}>
              <Typography variant="h5">{header} </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: 10, md: 14, lg: 20 } }}
              >
                {bread}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <a href={`${link}`} style={{ textDecoration: "none" }}>
                  <Button variant="contained">website</Button>
                </a>
                <a href={`${github}`}>
                  <img
                    style={{
                      height: "30px",
                      borderRadius: "25px",
                      paddingTop: 10,
                    }}
                    src={githubLogo}
                  ></img>
                </a>
              </Box>
              <br />
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
            <Paper
              elevation="10"
              sx={{ borderRadius: "25px", width: { md: 650, lg: 800 } }}
            >
              <Box>
                <img
                  src={image}
                  style={{ width: "100%", borderRadius: "25px" }}
                ></img>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Project;
