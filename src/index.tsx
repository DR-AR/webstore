import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { lightTheme } from "./style/theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => (
  <ThemeProvider theme={lightTheme}>
    <Navbar/>
    <h1>Hello World</h1>
    <Footer/>
  </ThemeProvider>
);

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline/>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);