import React from "react";
import { Grid, Typography, Button, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Info = () => {
  const github = "www.github.com/TheUnseenBug";
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
        <Grid item>
          <Stack direction="row" spacing={1} alignItems="center">
            <Button variant="contained" mr={3}>
              Resume
            </Button>
            <Button
              variant="contained"
              endIcon={<GitHubIcon />}
              onClick={() => (window.location.href = github)}
            >
              Github
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Info;
