import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { lightTheme } from "./style/theme";
import { List, ListSubheader } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import HomePage from "./components/HomePage";
import Catalog from "./components/Catalog";


const App = () => (
  <ThemeProvider theme={lightTheme}>
    <List disablePadding={true}>
      <ListSubheader disableGutters={true}>
        <Navbar />
      </ListSubheader>
      {/* <HomePage /> */}
      <Catalog/>
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