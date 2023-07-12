/* eslint-disable react/prop-types */
import { Fragment } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import CircularProgress from "@mui/material/CircularProgress";

export default function StandardImageList({ data, loading }) {
  return (
    <Fragment>
      {loading ? (
        <CircularProgress sx={{ mt: 3 }} color="primary" />
      ) : (
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
              </ImageListItem>
            ) : (
              <Fragment key={index} />
            )
          )}
        </ImageList>
      )}
    </Fragment>
  );
}
