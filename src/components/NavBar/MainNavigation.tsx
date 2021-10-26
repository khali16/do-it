import {
  AppBar,
  Box,
  Button,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { useStyles } from "../Styles/styles";

const MainNavigation = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar className={classes.navigationMenu}>
          <IconButton
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon style={{ fill: "#7C9971" }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{ style: { width: "30ch" } }}
            classes={{ paper: classes.menuPaper }}
          >
            <MenuItem onClick={handleClose}>Add Todo</MenuItem>
            <MenuItem onClick={handleClose}>Done</MenuItem>
            <MenuItem onClick={handleClose}>Cos tam </MenuItem>
          </Menu>
          <Button className={classes.menuButton}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MainNavigation;
