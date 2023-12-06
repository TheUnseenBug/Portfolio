import React from "react";
import { Grid, Typography, Button, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Info = () => {
  const github = "https://www.github.com/TheUnseenBug";

  return (
    <Grid
      container
      spacing={2}
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      p={3}
      sx={{
        marginTop: { xs: "30px", md: "100px" },
        marginLeft: "auto",
        marginBottom: "50px",
        width: "100%",
        justifyContent: { md: "flex-start", xs: "center" },
        background:
          "linear-gradient(19deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
        backdropFilter: "blur(10px)",
        webkitBackdropFilter: "blur(10px)",
        borderRadius: "10px",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      }}
    >
      <Grid item xs={12}>
        <Typography sx={{ color: "text.primary" }}>
          <Typography
            variant="body1"
            sx={{
              display: { md: "none", xs: "block" },
              fontSize: 16,
            }}
          >
            Hello,
          </Typography>
          <Typography
            variant="h5"
            sx={{
              display: { md: "none", xs: "block" },
              fontSize: 26,
              lineHeight: "30px",
            }}
          >
            I'm Dennis Granheimer.
          </Typography>
          <Typography
            variant="h4"
            mb={2}
            sx={{
              display: { md: "none", xs: "block" },
              fontSize: 26,
              lineHeight: "30px",
            }}
          >
            I'm a full-stack web developer.
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: { md: "block", xs: "none" }, fontSize: "22px" }}
          >
            Hello,
          </Typography>
          <Typography
            variant="h2"
            my={4}
            sx={{ display: { md: "block", xs: "none" } }}
          >
            I'm Dennis Granheimer.
            <div>Full-stack web developer.</div>
          </Typography>
        </Typography>
        <Grid item>
          <Stack direction="row" spacing={1} alignItems="center">
            <Button
              onClick={() => window.open("/Download/Resume-2023.pdf", "_blank")}
              variant="contained"
              mr={3}
              sx={{ bgcolor: "#40495F", color: "text.primary" }}
            >
              Resume
            </Button>
            <Button
              variant="contained"
              endIcon={<GitHubIcon />}
              onClick={() => (window.location.href = github)}
              sx={{ bgcolor: "#40495F", color: "text.primary" }}
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
