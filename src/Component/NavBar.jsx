import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate, Link } from "react-router-dom";

function NavBar() {
  let navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "100%",
      }}
    >
      <AppBar position="static" sx={{ bottom: "0", bgcolor: "#848FAB" }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5rem",
          }}
        >
          <Button
            sx={{ color: "#5E553F" }}
            onClick={() => navigate("/")}
            color="inherit"
          >
            Home
          </Button>
          <Button
            sx={{ color: "#5E553F" }}
            onClick={() => navigate("/About")}
            color="inherit"
          >
            About
          </Button>
          <Button
            sx={{ color: "#5E553F" }}
            onClick={() => navigate("/Contact")}
            color="inherit"
          >
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
