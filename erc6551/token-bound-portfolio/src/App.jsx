// import { useQuery } from "@airstack/airstack-react";
import { useMemo } from "react";
import { useQuery, gql } from "@apollo/client";
import { ERC6551_ALL_RECENT } from "./graphql/erc6551";
import UniversalResolver from "./components/UniversalResolver";
import StandardImageList from "./components/ERC6551Portfolio";

function App() {
  const { data } = useQuery(gql(ERC6551_ALL_RECENT));
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

  console.log(erc6551Data);

  return (
    <>
      <UniversalResolver
      // data={data}
      // loading={loading}
      />
      <StandardImageList data={erc6551Data} />
    </>
  );
}

export default App;
