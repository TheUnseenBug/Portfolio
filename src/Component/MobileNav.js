import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import { useNavigate } from "react-router-dom";
import ContactsIcon from "@mui/icons-material/Contacts";

export default function MobileNav() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        display: { xs: "block", md: "none" },
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <BottomNavigation
        sx={{
          bgcolor: "primary.main",
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          selected={true}
          sx={{
            "&.Mui-selected": {
              color: "#ffffff",
            },
          }}
          onClick={() => navigate("/")}
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          selected={true}
          sx={{
            "&.Mui-selected": {
              color: "#ffffff",
            },
          }}
          onClick={() => navigate("/About")}
          label="About"
          icon={<PeopleIcon />}
        />
        <BottomNavigationAction
          selected={true}
          sx={{
            "&.Mui-selected": {
              color: "#ffffff",
            },
          }}
          onClick={() => navigate("/Contact")}
          label="Contact"
          icon={<ContactsIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
