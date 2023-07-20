import { useMemo } from "react";
import StandardImageList from "../components/ERC6551Portfolio";
import { useQuery } from "@airstack/airstack-react";
import { ERC6551_ALL_RECENT } from "../graphql/erc6551";

const Explore = () => {
  const { data, loading } = useQuery(ERC6551_ALL_RECENT);
  const erc6551Data = useMemo(
    () =>
      data?.Accounts?.Account?.map(({ nft }) => ({
        address: nft?.address,
        tokenId: nft?.tokenId,
        image: nft?.contentValue?.image?.original,
        symbol: nft?.token?.symbol,
      })),
    [data?.Accounts?.Account]
  );
  console.log(data, erc6551Data);
  return (
    <div>
      <StandardImageList data={erc6551Data} loading={loading} />
    </div>
  );
};

export default Explore;
