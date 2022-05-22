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
    <Box sx={{ marginTop: "100px" }}>
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
          gap: 18,
        }}
      >
        <Typography variant="h4" py={3} sx={{ color: "#40495fad" }}>
          MongoDB
        </Typography>
        <Typography variant="h4" sx={{ color: "#40495fad" }}>
          Git
        </Typography>
        <Typography variant="h4" sx={{ color: "#40495fad" }}>
          HTML
        </Typography>
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item xs={2}>
          <Paper elevation={5}>
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 18,
        }}
      >
        <Typography variant="h4" py={3} sx={{ color: "#40495fad" }}>
          Photoshop
        </Typography>
        <Typography variant="h4" sx={{ color: "#40495fad" }}>
          Illustrator
        </Typography>
        <Typography variant="h4" sx={{ color: "#40495fad" }}>
          Figma
        </Typography>
      </Box>
    </Box>
  );
};

export default Experience;
