import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import githubLogo from "./Images/GitHub-Mark.webp";
import Logo from "./Images/logo2.png";

const Info = () => {
  return (
    <Grid
      container
      item
      xs={10}
      spacing={2}
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{
        bgcolor: "background.default",
        marginTop: "100px",
        marginLeft: "5px",
        marginBottom: "50px",
        width: "100%",
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
