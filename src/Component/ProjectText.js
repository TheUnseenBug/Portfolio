import React from "react";
import { Paper, Typography, Button, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectText = ({ header, bread, link, github, logos }) => {
  return (
    <Paper elevation="6" sx={{ borderRadius: "25px" }}>
      <Typography
        p={2}
        variant="h4"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "text.secondary",
        }}
      >
        {header}
      </Typography>
      <Typography
        variant="body1"
        px={2}
        pb={2}
        sx={{
          fontSize: {
            xs: 14,
            md: 14,
            lg: 18,
          },
          color: "text.secondary",
          lineHeight: { lg: "20px", xs: "14px" },
        }}
      >
        {bread}
      </Typography>

      <Stack
        mt={2}
        mb={2}
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
          <img src={logo} style={{ width: 30 }} key={i} alt="TechStack" />
        ))}
      </Stack>
    </Paper>
  );
};

export default ProjectText;
