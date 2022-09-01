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
  Paper,
  Box,
  Divider,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



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

function ShoppingCartMenu() {

  // it may be easier to move the ShoppingCartMenu into its own component since its going to need a lot of helper functions to work properly

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button startIcon={<ShoppingCartIcon />} onClick={handleClick}>Cart</Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Paper sx={{ width: 420, maxWidth: '100% ', margin: 1 }} >
          <Stack>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography component="div" variant="h6" color="inherit" align="center">
                Order
              </Typography>
              <Typography component="div" variant="h6" color="inherit" align="center">
                Edit Cart
              </Typography>
            </Grid>
            <Divider />
            {CartItem()}
            {CartItem()}
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography component="div" variant="body1" color="inherit" align="center">
                Subtotal
              </Typography>
              <Typography component="p" variant="body1" color="inherit" align="center" marginRight={3}>
                $69
              </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography component="div" variant="body1" color="inherit" align="center">
                Shipping
              </Typography>
              <Typography component="p" variant="body1" color="inherit" align="center" marginRight={3}>
                $10
              </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography component="div" variant="h6" color="inherit" align="center">
                Total
              </Typography>
              <Typography component="p" variant="h6" color="inherit" align="center" marginRight={3}>
                $69
              </Typography>
            </Grid>
            <Button color="secondary">Proceed To Checkout</Button>
          </Stack>
        </Paper>
      </Menu>
    </div>
  )
}

function CartItem() {

  // need to add functions which replace the item information from the database, or maybe via sockets?
  // could pass item information as props to this function, and get all the information higher up

  // need to add functionality to the add and remove buttons, needs error checking so you can't increase to 3 if theres only 2 items in stock

  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          display="flex"
          justifyContent="start"
          alignItems="center"
        >
          <Box
            component="img"
            sx={{ height: 60, width: 60 }}
            alt="The house from the offer."
            src="https://images.unsplash.com/photo-1615485737442-7d6ab9f64db9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"
          />
          <Stack width={120}>
            <Typography component="div" variant="body1" color="inherit" align="center">
              Item1
            </Typography>
            <Typography component="p" variant="caption" color="inherit" align="center">
              Delivery April 20th
            </Typography>
          </Stack>
        </Box>
        <Box
          width={80}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button startIcon={<RemoveIcon color="secondary" />} />
          <Typography component="p" variant="body2" color="inherit" align="center">
            0
          </Typography>
          <Button startIcon={<AddIcon color="secondary" />} />
        </Box>
        <Typography component="p" variant="body1" color="inherit" align="center" marginRight={3}>
          $69
        </Typography>
      </Grid>
      <Divider />
    </Box>
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
            {ShoppingCartMenu()}
          </Grid>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default NavbarAsh;
