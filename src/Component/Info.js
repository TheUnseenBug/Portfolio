import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import githubLogo from "./Images/GitHub-Mark.webp";
import Logo from "./Images/logo2.png";

const Info = () => {
  return (
    <Grid
      container
      spacing={2}
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{
        bgcolor: "white",
        marginTop: "100px",
        marginLeft: "5px",
        marginBottom: "50px",
        width: "100%",
        justifyContent: { md: "flex-start", xs: "center" },
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ display: { md: "none", xs: "block" } }}>
          Hello, I'm Dennis Granheimer.
        </Typography>
        <Typography variant="h4" sx={{ display: { md: "none", xs: "block" } }}>
          I'm a full-stack web developer.
        </Typography>
        <Typography variant="h4" sx={{ display: { md: "block", xs: "none" } }}>
          Hello,
        </Typography>
        <Typography variant="h3" sx={{ display: { md: "block", xs: "none" } }}>
          I'm Dennis Granheimer.
        </Typography>
        <Typography variant="h4" sx={{ display: { md: "block", xs: "none" } }}>
          Full-stack web developer.
        </Typography>
        <Grid pb={1} item sx={{ width: "50%" }}>
          <Button variant="contained">Resume</Button>
        </Grid>
        <Grid item sx={{ width: "50%" }}>
          <a
            href="https://github.com/TheUnseenBug"
            style={{ textDecoration: "none" }}
          >
            <img style={{ height: "70px" }} src={githubLogo}></img>
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Info;
