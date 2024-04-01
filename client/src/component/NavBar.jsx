import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link, useNavigate } from "react-router-dom";

const drawerWidth = 240;

export default function NavBar() {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Library Management System
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" sx={{ width: drawerWidth, flexShrink: 0 }}>
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              { text: "Dashboard", route: "/Dashboard", icon: <InboxIcon /> },
              { text: "Add Book", route: "/AddBook", icon: <MailIcon /> },
              { text: "Logout", onClick: handleLogout, icon: <ExitToAppIcon /> }, // Logout button
            ].map(({ text, route, icon, onClick }) => (
              <ListItem key={text} disablePadding>
                {onClick ? ( // Handle click event for logout
                  <ListItemButton onClick={onClick}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                ) : (
                  <ListItemButton component={Link} to={route}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                )}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
