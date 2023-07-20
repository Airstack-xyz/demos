/* eslint-disable react/prop-types */
import { Fragment } from "react";
import ImageList from "@mui/material/ImageList";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

export default function StandardImageList({ data, loading }) {
  const navigate = useNavigate();
  const filteredData = data?.filter(({ tokenId }) => Boolean(tokenId));

  return (
    <Fragment>
      {loading ? (
        <CircularProgress sx={{ mt: 3 }} color="primary" />
      ) : (
        <Fragment>
          {filteredData && filteredData?.length > 0 ? (
            <ImageList cols={3} gap={50} sx={{ px: 10 }}>
              {filteredData?.map(
                (
                  {
                    address,
                    image,
                    tokenId,
                    symbol,
                    name,
                    isErc6551Exist,
                    blockchain,
                    type,
                  },
                  index
                ) => (
                  <Card
                    variant="outlined"
                    sx={{ borderRadius: "20px", padding: "1rem" }}
                    elevation={3}
                    key={index}
                  >
                    <div
                      style={{
                        backgroundImage: `url(${
                          image ??
                          "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
                        })`,
                        width: "100%",
                        aspectRatio: "1/1",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        cursor: "pointer",
                        borderRadius: "20px",
                      }}
                      onClick={() => navigate(`/portfolio/${address}`)}
                    />
                    <Grid container direction="column" sx={{ pt: 3 }}>
                      <Grid item xs={12}>
                        <b>{name}</b>
                      </Grid>
                      <Grid item xs={12} sx={{ mt: 2 }}>
                        <Grid container justifyContent="space-between">
                          <Grid item xs={6}>
                            #
                            {tokenId?.length > 10
                              ? `${tokenId?.slice(0, 5)}...${tokenId?.slice(
                                  -5
                                )}`
                              : tokenId}
                          </Grid>
                          <Grid item xs={6} sx={{ textAlign: "right" }}>
                            {symbol}
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Chip
                          label={isErc6551Exist ? "ERC6551" : type}
                          key={index}
                          sx={{ mt: 2 }}
                          avatar={
                            <Avatar
                              src={isErc6551Exist ? "/tba.png" : "/nft.png"}
                            />
                          }
                        />
                        <Chip
                          label={
                            blockchain === "polygon" ? "Polygon" : "Ethereum"
                          }
                          key={index}
                          sx={{ mt: 2, ml: 1 }}
                          avatar={
                            <Avatar
                              src={
                                blockchain === "polygon"
                                  ? "/polygon.webp"
                                  : "/ethereum.png"
                              }
                            />
                          }
                        />
                      </Grid>
                    </Grid>
                  </Card>
                )
              )}
            </ImageList>
          ) : (
            "No NFTs Found"
          )}
        </Fragment>
      )}
    </Fragment>
  );
}
