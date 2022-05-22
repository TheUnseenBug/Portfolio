import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "./Images/logo3.png";

function NavBar() {
  let navigate = useNavigate();

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <AppBar
        position="static"
        sx={{ bottom: "0", bgcolor: "#edf7fc", borderRadius: "25px" }}
      >
        <Toolbar>
          <Link to="/">
            <img src={Logo} alt="logo"></img>
          </Link>
          <Typography sx={{ color: "text.secondary" }}>
            Dennis Granheimer
            <Button onClick={() => navigate("/About")} color="inherit">
              About
            </Button>
            <Button onClick={() => navigate("/Project")} color="inherit">
              Projects
            </Button>
            <Button onClick={() => navigate("/Contact")} color="inherit">
              Contact
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
