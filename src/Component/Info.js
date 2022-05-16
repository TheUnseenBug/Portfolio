import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import githubLogo from "./Images/GitHub-Mark.png";
import Logo from "./Images/logo2.png";

const Info = () => {
  return (
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
  );
};

export default Info;
