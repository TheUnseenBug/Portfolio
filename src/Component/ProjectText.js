import React from "react";
import { Paper, Typography, Button, Stack, Chip, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectText = ({ header, bread, link, github, stack }) => {
  const chipStyle = {
    bgcolor: "primary.main",
    margin: {
      xs: "0px 5px 16px 5px",
      m: "0px 5px 16px 5px",
    },
    color: "#ffffff",
  };
  return (
    <Paper elevation="6" sx={{ borderRadius: "20px" }}>
      <Typography
        p={2}
        variant="h4"
        sx={{
          display: "flex",
          justifyContent: "flex-start",
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
          textAlign: "left",
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
      <Box justifyContent="center" display="flex">
        {stack.map((item, index) => (
          <Chip sx={chipStyle} label={item} key={index}></Chip>
        ))}
      </Box>
    </Paper>
  );
};

export default ProjectText;

{
  /* <ul
          style={{
            display: "flex",
            justifyContent: "flex-start",
            padding: "0px",
            listStyle: "none",
          }}
        >
          {stack.map((item) => (
            <li style={liStyle}>{item}</li>
          ))}
        </ul> */
}
