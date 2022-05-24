import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import React from "react";
import Node from "./Images/nodejs-new-white.png";
import reactLogo from "./Images/react-2.png";
import jsLogo from "./Images/logo-javascript.png";
import htmlLogo from "./Images/html-1.png";

const Experience = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

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
        <Grid item xs={6} md={4}>
          <Paper elevation={10} sx={{ width: "100%" }}>
            <img src={reactLogo} style={{ width: "100%" }} />
          </Paper>
        </Grid>
        <Grid item xs={6} md={4}>
          <Paper elevation={10} sx={{ width: "100%", paddingTop: "100%" }}>
            <img src={Node} style={{ width: "100%" }} />
          </Paper>
        </Grid>
        <Grid item xs={6} md={4}>
          <Paper elevation={10} sx={{ width: "100%" }}>
            <img src={jsLogo} style={{ width: "100%" }} />
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
        {/* <Typography variant="h4" py={3} sx={{ color: "#40495fad" }}>
          Photoshop
        </Typography>
        <Typography variant="h4" sx={{ color: "#40495fad" }}>
          MongoDB
        </Typography>
        <Typography variant="h4" sx={{ color: "#40495fad" }}>
          Illustrator
        </Typography> */}
      </Box>
    </Box>
  );
};

export default Experience;
