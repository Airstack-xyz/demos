/* eslint-disable react/prop-types */
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function StandardImageList({ data }) {
  return (
    <ImageList cols={3} gap={50} sx={{ p: 10 }}>
      {data?.map(({ address, image, tokenId, symbol }, index) =>
        address && tokenId && image ? (
          <ImageListItem key={index}>
            <img
              src={`${image}`}
              srcSet={`${image}`}
              alt={tokenId}
              loading="lazy"
              style={{ borderRadius: "20px", objectFit: "cover" }}
            />
            <ImageListItemBar
              title={symbol ?? "<UNKNOWN>"}
              subtitle={`#${tokenId}`}
              style={{
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
            />
            {/* <Grid sx={{ position: "relative" }}>
              <Grid
                container
                spacing={3}
                direction="column"
                sx={{
                  position: "absolute",
                  bottom: "0",
                  width: "90%",
                  color: "white",
                  borderRadius: "17.396px",
                  background:
                    "linear-gradient(137deg, rgba(255, 255, 255, 0.04) 0.55%, rgba(255, 255, 255, 0.00) 100%)",
                  backdropFilter: "blur(48.322147369384766px)",
                }}
              >
                <Grid item>
                  {`${address.slice(0, 6)}...${address.slice(-6)}`}
                </Grid>
                <Grid item>
                  <Grid container>
                    <Grid item xs={7}>
                      {"#"}
                      {tokenId}
                    </Grid>
                    <Grid item xs={5}>
                      {symbol}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid> */}
          </ImageListItem>
        ) : (
          <></>
        )
      )}
    </ImageList>
  );
}
