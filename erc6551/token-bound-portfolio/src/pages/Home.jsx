import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useLazyQuery, gql } from "@apollo/client";
import UNIVERSAL_RESOLVER from "../graphql/resolve";

const Home = () => {
  const [identity, setIdentity] = useState("");
  const navigate = useNavigate();

  const [resolveIdentities, { loading }] = useLazyQuery(
    gql(UNIVERSAL_RESOLVER),
    {
      variables: { address: identity },
      onCompleted: (data) => {
        try {
          const { Wallet } = data ?? {};
          navigate(`/portfolio/${Wallet?.addresses?.[0]}`);
        } catch (e) {
          console.error(e);
        }
      },
    }
  );

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
            if (identity.length > 0) {
              resolveIdentities();
            }
          }}
        >
          <TextField
            id="outlined-basic"
            hiddenLabel
            variant="outlined"
            placeholder="Enter 0x address, ENS, Lens, or Farcaster"
            sx={{ mt: "3rem", height: "50.27px", width: "645px" }}
            value={identity}
            disabled={loading}
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
                  loading={loading}
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
