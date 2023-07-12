import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";

const Home = () => {
  const [identity, setIdentity] = useState("");

  return (
    <Fragment>
      <Grid item xs={12}>
        <img
          src="/airstack-top-bar.svg"
          alt="Airstack logo"
          style={{ height: "5rem" }}
        />
      </Grid>
      <Grid item xs={12}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // if (identity.length > 0) onButtonClick?.({ address: identity });
          }}
        >
          <TextField
            id="outlined-basic"
            hiddenLabel
            variant="outlined"
            placeholder="Enter 0x address, ENS, Lens, or Farcaster"
            sx={{ mt: "3rem", height: "50.27px", width: "645px" }}
            value={identity}
            onChange={(e) => setIdentity(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Box>Web3 Identity</Box>
                </InputAdornment>
              ),
              endAdornment: (
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    height: "35px",
                    borderRadius: "6px",
                    background: "#DE5C5F",
                  }}
                >
                  Go
                </Button>
              ),
            }}
          />
        </form>
      </Grid>
    </Fragment>
  );
};

export default Home;
