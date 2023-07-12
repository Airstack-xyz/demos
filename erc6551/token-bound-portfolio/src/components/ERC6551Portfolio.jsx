/* eslint-disable react/prop-types */
import { Fragment } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

export default function StandardImageList({ data, loading }) {
  const navigate = useNavigate();
  const filteredData = data?.filter(({ address, tokenId, image }) =>
    Boolean(address && tokenId && image)
  );

  return (
    <Fragment>
      {loading ? (
        <CircularProgress sx={{ mt: 3 }} color="primary" />
      ) : (
        <Fragment>
          {filteredData && filteredData?.length > 0 ? (
            <ImageList cols={3} gap={50} sx={{ px: 10 }}>
              {filteredData?.map(
                ({ address, image, tokenId, symbol }, index) => (
                  <ImageListItem
                    key={index}
                    onClick={() => navigate(`/portfolio/${address}`)}
                    sx={{ cursor: "pointer" }}
                  >
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
                )
              )}
            </ImageList>
          ) : (
            "No ERC6551 Accounts Found"
          )}
        </Fragment>
      )}
    </Fragment>
  );
}
