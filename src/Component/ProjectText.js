import React from "react";
import { Paper, Typography, Box, Grid, Button, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectText = ({ header, bread, link, github, logos }) => {
  return (
    <Paper elevation="6" sx={{ borderRadius: "25px" }}>
      <Typography p={2} variant="h5">
        {header}{" "}
      </Typography>
      <Typography
        variant="h6"
        px={2}
        sx={{ fontSize: { xs: 10, md: 14, lg: 20 } }}
      >
        {bread}
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Button
          variant="contained"
          size="small"
          onClick={() => (window.location.href = link)}
        >
          website
        </Button>

        <Button
          variant="contained"
          size="small"
          endIcon={<GitHubIcon />}
          onClick={() => (window.location.href = github)}
        >
          Github
        </Button>
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        {logos.map((logo, i) => (
          <img src={logo} style={{ width: 30 }} key={i} />
        ))}
      </Stack>
    </Paper>
  );
};

export default ProjectText;