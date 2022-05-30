import { Box, Typography, Grid } from "@mui/material";
import React from "react";

function About() {
  return (
    <Box
      px={{ xs: 3, md: 8, lg: 15, xl: 15 }}
      sx={{ height: { lg: "calc(100vh - 64px)", xs: "100%" } }}
      className="Box"
    >
      <Box
        py={{ xs: 4, lg: 8 }}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="h2" sx={{ color: "#AB9150" }}>
          Hello I'm Dennis Granheimer
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "100%", borderRadius: "20px" }}
            src="/Images/Portfolio.webp"
          />
        </Grid>
        <Grid
          xs={12}
          md={6}
          item
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 20, color: "#AB9150" }}>
            I'm a junior full-stack web developer at the beginning of his
            career. The last half year I have been enrolled in the Techover
            Academy which is a programming bootcamp that has helped me acquire
            skills such as: React, MongoDB, Express, Node, and Redux. Now I am
            on the hunt for an adventure in the tech industry and hopefully my
            problem solving capabilities can improve for my future workplace
            endeavours.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box pb={{ xs: 2, lg: 4 }}>
            <Typography variant="h3" sx={{ color: "#AB9150" }}>
              My Story
            </Typography>
          </Box>
          <Box pb={{ xs: 4, lg: 8 }}>
            <Typography sx={{ fontSize: 20, color: "#AB9150" }}>
              I have always been fascinated by computers and how they work, I
              got my first personal computer from my dad when I was 6 years old
              and have been hooked by the amazing possibilities ever since. I
              started building and tinkering with my pc and eventually my
              fascination over programming grew more each year. This year I
              finally took the big leap and decided to learn programming for
              real and here I am fluent in the MERN stack only 3 months later.{" "}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
