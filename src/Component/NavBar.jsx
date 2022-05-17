import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Images/logo3.png";

function NavBar() {
  let navigate = useNavigate();

  return (
    <Box>
      <AppBar
        position="static"
        sx={{ bottom: "0", bgcolor: "#edf7fc", borderRadius: "25px" }}
      >
        <Toolbar>
          <img src={Logo} alt="logo"></img>
          <Typography sx={{ color: "text.secondary" }}>
            Dennis Granheimer
            <Button onClick={() => navigate("/")} color="inherit">
              page
            </Button>
            <Button onClick={() => navigate("/About")} color="inherit">
              About
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
