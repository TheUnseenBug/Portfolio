import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import Node from "./Images/nodejs-new-white.webp";
import reactLogo from "./Images/react-2.webp";
import jsLogo from "./Images/logo-javascript.webp";
import Illustator from "./Images/Adobe Illustrator Logo.webp";
import photoshop from "./Images/Adobe_Photoshop_CC_icon.svg.webp";
import CSS from "./Images/CSS_logo_PNG2.webp";
import Git from "./Images/Git-Logo-2Color.webp";
import Html from "./Images/html-1.webp";
import MongoDB from "./Images/Logomark_RGB_Default-Slate.webp";

const Experience = () => {
  return (
    <Box sx={{ marginTop: "100px", maxWidth: "100%" }}>
      <Typography
        py={2}
        variant="h3"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#40495f",
        }}
      >
        My Skillset
      </Typography>
      <Grid container direction="row" justifyContent="center" spacing={4}>
        <Grid item xs={3} md={2}>
          <Paper
            elevation={10}
            sx={{ width: "100%", paddingTop: "100%", position: "relative" }}
          >
            <img
              src={reactLogo}
              style={{
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                aspectRatio: 1,
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={3} md={2}>
          <Paper
            elevation={10}
            sx={{ width: "100%", paddingTop: "100%", position: "relative" }}
          >
            <img
              src={Node}
              style={{
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                aspectRatio: "1/1",
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={3} md={2}>
          <Paper
            elevation={10}
            sx={{ width: "100%", paddingTop: "100%", position: "relative" }}
          >
            <img
              src={jsLogo}
              style={{ width: "100%", position: "absolute", top: 0, left: 0 }}
            />
          </Paper>
        </Grid>
        <Grid item xs={3} md={2}>
          <Paper
            elevation={10}
            sx={{ width: "100%", paddingTop: "100%", position: "relative" }}
          >
            <img
              src={Html}
              style={{
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                aspectRatio: "1/1",
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={3} md={2}>
          <Paper
            elevation={10}
            sx={{ width: "100%", paddingTop: "100%", position: "relative" }}
          >
            <img
              src={Git}
              style={{
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                aspectRatio: "1/1",
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={3} md={2}>
          <Paper
            elevation={10}
            sx={{ width: "100%", paddingTop: "100%", position: "relative" }}
          >
            <img
              src={MongoDB}
              style={{
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                aspectRatio: "1/1",
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={3} md={2}>
          <Paper
            elevation={10}
            sx={{ width: "100%", paddingTop: "100%", position: "relative" }}
          >
            <img
              src={Illustator}
              style={{
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                aspectRatio: "1/1",
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={3} md={2}>
          <Paper
            elevation={10}
            sx={{ width: "100%", paddingTop: "100%", position: "relative" }}
          >
            <img
              src={photoshop}
              style={{
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                aspectRatio: "1/1",
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;
