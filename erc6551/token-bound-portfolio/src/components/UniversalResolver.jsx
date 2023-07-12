/* eslint-disable react/prop-types */
import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const UniversalResolver = ({ data, loading, onButtonClick }) => {
  const [identity, setIdentity] = useState("");

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "#0E0E12",
        color: "white",
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
              if (identity.length > 0) onButtonClick?.({ address: identity });
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
        {loading ? (
          <CircularProgress sx={{ mt: 3 }} />
        ) : (
          <Fragment>
            {data && (
              <Grid item xs={12} mt={3}>
                <List
                  sx={{
                    color: "white",
                    width: "645px",
                    borderRadius: "6px",
                    border: "1px solid #303241",
                  }}
                  disablePadding
                >
                  {data?.Wallet?.addresses?.length > 0 && (
                    <ListItem divider>
                      <Grid container alignItems="center">
                        <Grid item xs={7}>
                          <Grid container direction="row" alignItems="center">
                            <Grid item>
                              <ListItemAvatar>
                                <Avatar
                                  src="/ethereum.png"
                                  alt="Ethereum logo"
                                />
                              </ListItemAvatar>
                            </Grid>
                            <Grid item>
                              <ListItemText primary="Address" />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={5}>
                          {data?.Wallet?.addresses?.map((address, index) => (
                            <a
                              href={`https://etherscan.io/address/${address}`}
                              key={index}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <ListItemText
                                sx={{ color: "#96999C" }}
                                primary={`${address.slice(
                                  0,
                                  8
                                )}...${address.slice(-8)}`}
                              />
                            </a>
                          )) ?? ""}
                        </Grid>
                      </Grid>
                    </ListItem>
                  )}
                  {data?.Wallet?.primaryDomain && (
                    <ListItem divider>
                      <Grid container alignItems="center">
                        <Grid item xs={7}>
                          <Grid container direction="row" alignItems="center">
                            <Grid item>
                              <ListItemAvatar>
                                <Avatar src="/ens.svg" alt="ENS logo" />
                              </ListItemAvatar>
                            </Grid>
                            <Grid item>
                              <ListItemText primary="Primary ENS" />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={5}>
                          <ListItemText
                            sx={{ color: "#96999C" }}
                            primary={data?.Wallet?.primaryDomain?.name ?? ""}
                          />
                        </Grid>
                      </Grid>
                    </ListItem>
                  )}
                  {data?.Wallet?.domains?.length > 0 && (
                    <ListItem divider>
                      <Grid container alignItems="center">
                        <Grid item xs={7}>
                          <Grid container direction="row" alignItems="center">
                            <Grid item>
                              <ListItemAvatar>
                                <Avatar src="/ens.svg" alt="ENS logo" />
                              </ListItemAvatar>
                            </Grid>
                            <Grid item>
                              <ListItemText primary="Other ENS Names" />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={5}>
                          <ListItemText
                            sx={{ color: "#96999C" }}
                            primary={
                              data?.Wallet?.domains
                                ?.map(({ name }) => name)
                                .join(",\n") ?? ""
                            }
                          />
                        </Grid>
                      </Grid>
                    </ListItem>
                  )}
                  {data?.Wallet?.socials?.length > 0 && (
                    <>
                      {data?.Wallet?.socials?.map(
                        ({ dappName, profileName }, key) => (
                          <ListItem divider key={key}>
                            <Grid container alignItems="center">
                              <Grid item xs={7}>
                                <Grid
                                  container
                                  direction="row"
                                  alignItems="center"
                                >
                                  <Grid item>
                                    <ListItemAvatar>
                                      <Avatar
                                        src={`/${dappName}.svg`}
                                        alt={`${dappName} logo`}
                                      />
                                    </ListItemAvatar>
                                  </Grid>
                                  <Grid item>
                                    <ListItemText primary={dappName} />
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item xs={5}>
                                <ListItemText
                                  sx={{ color: "#96999C" }}
                                  primary={profileName ?? ""}
                                />
                              </Grid>
                            </Grid>
                          </ListItem>
                        )
                      )}
                    </>
                  )}
                </List>
              </Grid>
            )}
          </Fragment>
        )}
      </Grid>
    </Box>
  );
};

export default UniversalResolver;
