import React from "react";
import { Grid, Box, Paper, Typography, Button, Avatar } from "@mui/material";
import ProjectText from "./ProjectText";

const Project = ({ link, image, github, bread, header, logos }) => {
  return (
    <Box>
      <Grid container item sx={{ marginTop: "50px" }}>
        <Grid item p={2} xs={12} md={3} lg={3}>
          <ProjectText
            link={link}
            github={github}
            bread={bread}
            header={header}
            logos={logos}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={image}
            style={{
              width: "100%",
              borderRadius: "25px",
              filter: "grayscale(0.5)",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Project;
