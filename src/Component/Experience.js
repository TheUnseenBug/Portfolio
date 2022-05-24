import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import Node from "./Images/nodejs-new-white.png";
import reactLogo from "./Images/react-2.png";
import jsLogo from "./Images/logo-javascript.png";

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: { lg: "12%", xs: 5 },
        }}
      >
        <Typography
          variant="h4"
          py={3}
          sx={{
            color: "#40495fad",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Git
        </Typography>
        <Typography variant="h4" sx={{ color: "#40495fad" }}>
          CSS
        </Typography>
        <Typography variant="h4" sx={{ color: "#40495fad" }}>
          HTML
        </Typography>
      </Box>
      <Grid container direction="row" justifyContent="center" spacing={4}>
        <Grid item xs={6} md={3}>
          <Paper
            elevation={10}
            sx={{ width: "100%", paddingTop: "100%", position: "relative" }}
          >
            <img
              src={reactLogo}
              style={{ width: "100%", position: "absolute", top: 0, left: 0 }}
            />
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper
            elevation={10}
            sx={{ width: "100%", paddingTop: "100%", position: "relative" }}
          >
            <img
              src={Node}
              style={{ width: "100%", position: "absolute", top: 0, left: 0 }}
            />
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
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
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: { lg: "6%", xs: 5 },
        }}
      >
        <Typography variant="h4" py={3} sx={{ color: "#40495fad" }}>
          Photoshop
        </Typography>
        <Typography variant="h4" sx={{ color: "#40495fad" }}>
          MongoDB
        </Typography>
        <Typography variant="h4" sx={{ color: "#40495fad" }}>
          Illustrator
        </Typography>
      </Box>
    </Box>
  );
};

export default Experience;
