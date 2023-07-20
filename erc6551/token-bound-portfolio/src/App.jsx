import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Portfolio from "./pages/Portfolio";
import { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "./components/AppBar";

function App() {
  return (
    <Fragment>
      <ResponsiveAppBar />
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "#0E0E12",
          color: "white",
          pt: "100px",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight: "100vh",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="explore" element={<Explore />} />
            <Route path="portfolio">
              <Route path=":identity" element={<Portfolio />} />
            </Route>
          </Routes>
        </Grid>
      </Box>
    </Fragment>
  );
}

export default App;
