import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  let navigate = useNavigate();

  return (
    <Box
      sx={{
        display: { md: "flex", xs: "none" },
        justifyContent: "center",
        top: 0,
        left: 0,
        right: 0,
        position: "fixed",
        alignItems: "center",
        minWidth: "100%",
        zIndex: 1,
      }}
    >
      <AppBar position="static" sx={{ bottom: "0", bgcolor: "primary.main" }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "3rem",
          }}
        >
          <Button
            sx={{ color: "#ffffff" }}
            onClick={() => navigate("/")}
            color="inherit"
          >
            Home
          </Button>
          <Button
            sx={{ color: "#ffffff" }}
            onClick={() => navigate("/About")}
            color="inherit"
          >
            About
          </Button>
          <Button
            sx={{ color: "#ffffff" }}
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
