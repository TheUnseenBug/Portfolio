import React from "react";
import {
  Grid,
  Box,
  Avatar,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

function Contact() {
  const email = "1dennis.granheimer@gmail.com";
  const phone = "0708780589";
  return (
    <Box
      sx={{
        height: "calc(100vh - 64px)",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ height: "100px" }}>
          <Avatar
            src="/Images/Portfolio.webp"
            sx={{ width: "100px", height: "100px" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: 40, md: 60 }, color: "text.primary" }}
          >
            Looking forward to hearing from you!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation="2">
            <List subheader={<ListSubheader>Contact info:</ListSubheader>}>
              <ListItem>
                <ListItemButton
                  sx={{ color: "text.secondary" }}
                  onClick={() => (window.location.href = `tel:${phone}`)}
                >
                  <ListItemIcon>
                    <PhoneIcon />
                  </ListItemIcon>
                  <ListItemText primary={phone} />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  sx={{ color: "text.secondary" }}
                  onClick={() => (window.location.href = `mailto:${email}`)}
                >
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText primary={email} />
                </ListItemButton>
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
