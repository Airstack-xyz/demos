import React from "react";
import ReactDOM from "react-dom/client.js";
import { init } from "@airstack/airstack-react";
import { ThemeProvider, createTheme } from "@mui/material";
import App from "./App.jsx";

init(import.meta.env.VITE_AIRSTACK_API_KEY);

const theme = createTheme({
  palette: {
    primary: {
      main: "#DE5C5F",
    },
    mode: "dark",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
