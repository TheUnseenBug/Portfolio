import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import Node from "./Images/nodejs-new-white.webp";
import reactLogo from "./Images/react-2.webp";
import jsLogo from "./Images/logo-javascript.webp";
import Illustator from "./Images/Adobe Illustrator Logo.webp";
import photoshop from "./Images/Adobe_Photoshop_CC_icon.svg.webp";
import Git from "./Images/Git-Logo-2Color.webp";
import html1 from "./Images/html-1.svg";
import html from "./Images/html-1.webp";
import MongoDB from "./Images/Logomark_RGB_Default-Slate.webp";

const Experience = () => {
  const paperStyle = {
    width: "100%",
    paddingTop: "100%",
    position: "relative",
  };

  const style = {
    width: "calc(100% - 20px)",
    position: "absolute",
    top: "10%",
    left: "10px",
  };
  return (
    <Box sx={{ marginTop: "100px", maxWidth: "100%" }}>
      <Typography
        py={2}
        variant="h3"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "text.primary",
        }}
      >
        My Skillset
      </Typography>
      <Grid container direction="row" justifyContent="center" spacing={4}>
        <Grid item xs={3} md={3}>
          <Paper elevation={10} sx={paperStyle}>
            <img src={reactLogo} alt="react logo" style={style} />
          </Paper>
        </Grid>
        <Grid item xs={3} md={3}>
          <Paper elevation={10} sx={paperStyle}>
            <img
              alt="node logo"
              src={Node}
              style={{
                width: "calc(100% - 20px)",
                position: "absolute",
                top: "25%",
                left: "10px",
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={3} md={3}>
          <Paper elevation={10} sx={paperStyle}>
            <img
              alt="javascript logo"
              src={jsLogo}
              style={{
                top: "10px",
                left: "10px",
                width: "calc(100% - 20px)",
                position: "absolute",
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={3} md={3}>
          <Paper elevation={10} sx={paperStyle}>
            <img alt="html logo" src={html1} style={style} />
          </Paper>
        </Grid>
        <Grid item xs={3} md={3}>
          <Paper elevation={10} sx={paperStyle}>
            <img alt="Git logo" src={Git} style={style} />
          </Paper>
        </Grid>
        <Grid item xs={3} md={3}>
          <Paper elevation={10} sx={paperStyle}>
            <img alt="MongoDB logo" src={MongoDB} style={style} />
          </Paper>
        </Grid>
        <Grid item xs={3} md={3}>
          <Paper elevation={10} sx={paperStyle}>
            <img alt="Illustrator logo" src={Illustator} style={style} />
          </Paper>
        </Grid>
        <Grid item xs={3} md={3}>
          <Paper elevation={10} sx={paperStyle}>
            <img alt="Photoshop logo" src={photoshop} style={style} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;
