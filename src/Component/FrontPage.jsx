import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Grid, Box, Button, Paper } from "@mui/material";
import "react-photo-view/dist/react-photo-view.css";
import Node from "./Images/nodejs-new-white.png";
import githubLogo from "./Images/GitHub-Mark.png";
import MongoDBLogo from "./Images/MongoDB_Logo_RGB_Logo_Forest-Green.png";
import reactLogo from "./Images/react-2.png";
import webShop from "./Images/webbshop.png";
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
      <Grid
        container
        item
        xs={12}
        spacing={2}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          bgcolor: "background.default",
          marginTop: "100px",
          marginLeft: "5px",
          marginBottom: "50px",
        }}
      >
        <Grid item sx={{ width: "45%" }}>
          <Typography variant="h4">Hello,</Typography>
          <Typography variant="h3">I'm Dennis Granheimer.</Typography>
          <Typography variant="h4">Full-stack web developer.</Typography>
          <Grid item sx={{ width: "50%" }}>
            <Button variant="contained">Resume</Button>
          </Grid>
          <Grid item sx={{ width: "50%" }}>
            <img style={{ height: "70px" }} src={githubLogo}></img>
          </Grid>
        </Grid>
        <Grid item sx={{ width: "55%" }}>
          <img
            src={Logo}
            alt="logo"
            style={{ borderRadius: "35px", border: "1px solid #1b1b1b" }}
          ></img>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: "400px" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item xs={2}>
            <Paper elevation={10}>
              <Item sx={{ height: "100px" }}>
                <img src={Node} style={{ height: "100px" }}></img>
              </Item>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper elevation={10}>
              <Item>
                <img src={reactLogo} style={{ height: "100px" }}></img>
              </Item>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper elevation={10}>
              <Item>
                <img src={jsLogo} style={{ height: "100px" }}></img>
              </Item>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper elevation={10}>
              <Item>
                <img src={htmlLogo} style={{ height: "100px" }}></img>
              </Item>
            </Paper>
          </Grid>
        </Grid>
      </Box>

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
                <Typography variant="h4">Hello this is my project</Typography>
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
              </Paper>
            </Grid>
            <Grid item xs={2} sx={{ width: "100%" }}>
              <Paper
                elevation="10"
                sx={{ borderRadius: "25px", width: "700px" }}
              >
                <img
                  src={webShop}
                  style={{ width: "100%", borderRadius: "25px" }}
                ></img>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Grid item>Project</Grid>
        <Grid item>Project</Grid>
        <Grid item>Project</Grid>
        <Grid item>Project</Grid>
        <Grid item>Project</Grid>
      </Grid>
    </Box>
  );
}

export default FrontPage;
