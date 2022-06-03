import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import Node from "./Images/nodejs-new-white.webp";
import reactLogo from "./Images/react-2.webp";
import jsLogo from "./Images/logo-javascript.webp";
import Illustator from "./Images/Adobe Illustrator Logo.webp";
import photoshop from "./Images/Adobe_Photoshop_CC_icon.svg.webp";
import Git from "./Images/Git-Logo-2Color.webp";
import html1 from "./Images/html-1.svg";
import MongoDB from "./Images/Logomark_RGB_Default-Slate.webp";

const Experience = () => {
  const logos = [
    Node,
    reactLogo,
    jsLogo,
    Illustator,
    photoshop,
    Git,
    html1,
    MongoDB,
  ];
  const paperStyle = {
    width: "100%",
    paddingTop: "100%",
    position: "relative",
  };

  const style = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transform: "scale(0.7)",
    transformOrigin: "center",
  };
  return (
    <Box sx={{ marginTop: "100px", maxWidth: "100%" }}>
      <Typography
        py={4}
        variant="h3"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "text.primary",
        }}
      >
        My Skillset
      </Typography>
      <Grid container direction="row" justifyContent="center" spacing={4}>
        {logos.map((logo) => {
          return (
            <Grid item xs={6} md={3}>
              <Paper elevation={10} sx={paperStyle}>
                <img src={logo} alt="logo" style={style} />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Experience;
