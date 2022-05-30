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
      pb={2}
      sx={{
        bgcolor: "#ffffff0f",
        marginTop: "100px",
        marginLeft: "5px",
        marginBottom: "50px",
        width: "100%",
        justifyContent: { md: "flex-start", xs: "center" },
        background:
          "linear-gradient(19deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
        backdropFilter: "blur(10px)",
        webkitBackdropFilter: "blur(10px)",
        borderRadius: "20px",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      }}
    >
      <Grid item xs={12}>
        <Typography sx={{ color: "#ffffff" }}>
          <Typography
            variant="h4"
            sx={{ display: { md: "none", xs: "block" } }}
          >
            Hello, I'm Dennis Granheimer.
          </Typography>
          <Typography
            variant="h4"
            sx={{ display: { md: "none", xs: "block" } }}
          >
            I'm a full-stack web developer.
          </Typography>
          <Typography
            variant="h4"
            sx={{ display: { md: "block", xs: "none" } }}
          >
            Hello,
          </Typography>
          <Typography
            variant="h3"
            sx={{ display: { md: "block", xs: "none" } }}
          >
            I'm Dennis Granheimer.
          </Typography>
          <Typography
            variant="h4"
            sx={{ display: { md: "block", xs: "none" } }}
          >
            Full-stack web developer.
          </Typography>
        </Typography>
        <Grid item>
          <Stack direction="row" spacing={1} alignItems="center">
            <Button
              variant="contained"
              mr={3}
              sx={{ bgcolor: "#40495F", color: "#AB9150" }}
            >
              Resume
            </Button>
            <Button
              variant="contained"
              endIcon={<GitHubIcon />}
              onClick={() => (window.location.href = github)}
              sx={{ bgcolor: "#40495F", color: "#AB9150" }}
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
