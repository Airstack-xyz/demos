import { useMemo } from "react";
import StandardImageList from "../components/ERC6551Portfolio";
import { useQuery, gql } from "@apollo/client";
import { ERC6551_ALL_RECENT } from "../graphql/erc6551";

const Explore = () => {
  const { data, loading } = useQuery(gql(ERC6551_ALL_RECENT));
  const erc6551Data = useMemo(
    () =>
      data?.Accounts?.Account?.map(({ nft }) => ({
        address: nft?.address,
        tokenId: nft?.tokenId,
        image:
          nft?.metaData?.image?.indexOf("ipfs://") !== -1
            ? nft?.metaData?.image?.replace("ipfs://", "https://ipfs.io/ipfs/")
            : nft?.metaData?.image,
        symbol: nft?.token?.symbol,
      })),
    [data?.Accounts?.Account]
  );
  return (
    <div>
      <StandardImageList data={erc6551Data} loading={loading} />
    </div>
  );
};

export default Explore;
