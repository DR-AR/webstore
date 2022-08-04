import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { lightTheme } from "./style/theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import { List, ListSubheader } from "@mui/material";



const App = () => (
  <ThemeProvider theme={lightTheme}>
    <List disablePadding={true}>
      <ListSubheader disableGutters={true}>
        <Navbar />
      </ListSubheader>
      <HomePage />
      <Footer />
    </List>
  </ThemeProvider>
);

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);