import React from "react";
import { Grid, Box } from "@mui/material";
import ProjectText from "./ProjectText";

const Project = ({ link, image, github, bread, header, stack }) => {
  return (
    <Box>
      <Grid container item sx={{ marginTop: "50px" }}>
        <Grid item p={2} xs={12} md={4} lg={4}>
          <ProjectText
            link={link}
            github={github}
            bread={bread}
            header={header}
            stack={stack}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <img
            style={{
              width: "100%",
              borderRadius: "10px",
              filter: "grayscale(40%)",
            }}
            src={image}
            alt="project "
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Project;
