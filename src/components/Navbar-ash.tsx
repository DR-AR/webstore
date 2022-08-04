import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

// Seperated menu button into its own function 
function MenuButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  // will have to expand this function to handle routing to different pages
  // depending on whats clicked in the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button startIcon={<MenuIcon />} onClick={handleClick}>Menu</Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Catalog</MenuItem>
        <MenuItem onClick={handleClose}>About</MenuItem>
      </Menu>
    </div>
  )
}

function NavbarAsh() {

  return (
    <AppBar
      position="static"
      color="secondary"
    >
      <Toolbar>
        <Stack direction="column" sx={{ flexGrow: 1 }}>
          <Typography component="div" variant="h6" color="inherit" align="center">
            Webstore
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {MenuButton()}
            <Button startIcon={<ShoppingCartIcon />}>Cart</Button>
          </Grid>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default NavbarAsh;
