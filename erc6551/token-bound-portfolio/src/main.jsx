import React from "react";
import ReactDOM from "react-dom/client";
import { init } from "@airstack/airstack-react";
import { ThemeProvider, createTheme } from "@mui/material";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

init(import.meta.env.VITE_AIRSTACK_API_KEY);

const client = new ApolloClient({
  uri: "https://api.airstack.xyz/gql",
  cache: new InMemoryCache(),
});

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
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);
