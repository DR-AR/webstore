import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Stack,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
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
            <Button startIcon={<MenuIcon />}>Menu</Button>
            <Button startIcon={<ShoppingCartIcon />}>Cart</Button>
          </Grid>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
