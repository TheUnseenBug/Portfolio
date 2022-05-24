import React from "react";
import { Grid, Box, Paper, Typography, Button, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import Node from "./Images/nodejs-new-white.png";
import githubLogo from "./Images/GitHub-Mark.webp";
import MongoDBLogo from "./Images/MongoDB_Logo_RGB_Logo_Forest-Green.png";
import reactLogo from "./Images/react-2.webp";
import webShop from "./Images/webbshop.webp";
import jsLogo from "./Images/logo-javascript.png";
import htmlLogo from "./Images/html-1.webp";
import Logo from "./Images/logo2.png";

const Project = ({ link, image, github, bread, header }) => {
  return (
    <Box>
      <Grid container item sx={{ marginTop: "50px", maxWidth: "100%" }}>
        <Grid item p={2} xs={12} md={4} lg={3} sx={{ width: "100%" }}>
          <Paper elevation="6" sx={{ borderRadius: "25px" }}>
            <Typography p={2} variant="h5">
              {header}{" "}
            </Typography>
            <Typography
              variant="h6"
              px={2}
              sx={{ fontSize: { xs: 10, md: 14, lg: 20 } }}
            >
              {bread}
            </Typography>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <a href={`${link}`} style={{ textDecoration: "none" }}>
                <Button variant="contained" size="small">
                  website
                </Button>
              </a>
              <a href={`${github}`}>
                <img src={githubLogo} style={{ width: "50%" }} />
              </a>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <img src={reactLogo} style={{ width: "30%" }} />
              <img src={htmlLogo} style={{ width: "30%" }} />
              <img src={Node} style={{ width: "30%" }} />
            </Box>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Paper
            elevation="10"
            sx={{
              borderRadius: "25px",
            }}
          >
            <img src={image} style={{ width: "100%", borderRadius: "25px" }} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Project;
