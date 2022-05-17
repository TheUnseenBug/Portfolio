import { Box, Typography } from "@mui/material";
import React from "react";

function About() {
  return (
    <Box px={{ xs: 3, md: 8, lg: 15, xl: 15 }} sx={{ boxSizing: "border-box" }}>
      <Box
        py={{ xs: 4, lg: 8 }}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="h2">Hello I'm Dennis Granheimer</Typography>
      </Box>

      <Box pb={{ xs: 4, lg: 8 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 7,
          }}
        >
          <img
            style={{ width: "440px", borderRadius: "20px" }}
            src="/Images/Portfolio.jpg"
          ></img>
          <Typography>
            I'm a junior web developer at the beginning of his career. The last
            half year I have been enrolled in the Techover Academy which is a
            programming bootcamp that has helped me acquire skills such as:
            React, MongoDB, Express, Node, and Redux. Now I am on the hunt for
            an adventure in the tech industry and hopefully my problem solving
            capabilities can improve for my future workplace endeavours.
          </Typography>
        </Box>
      </Box>

      <Box>
        <Box pb={{ xs: 2, lg: 4 }}>
          <Typography variant="h3">My Story</Typography>
        </Box>
        <Box pb={{ xs: 4, lg: 8 }}>
          <Typography>I have always liked computers yada yada</Typography>
        </Box>
      </Box>

      <Box>
        <Box pb={{ xs: 4, lg: 8 }}>
          <Typography>Tools I use</Typography>
        </Box>
        <Box>Insert image here</Box>
      </Box>
    </Box>
  );
}

export default About;
