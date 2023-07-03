import { init, useQueryWithPagination } from "@airstack/airstack-react";

init(import.meta.env.VITE_AIRSTACK_API_KEY);

function App() {
  const query = `
  query GetNFTCollection($contractAddress: Address!, $blockchain: TokenBlockchain!) {
    Tokens(
      input: {filter: {address: {_eq: $contractAddress}}, blockchain: $blockchain}
    ) {
      Token {
        projectDetails {
          collectionName
          description
        }
      }
    }
    TokenNfts(
      input: {filter: {address: {_eq: $contractAddress}}, blockchain: $blockchain, order: {tokenId: ASC}, limit: 12}
    ) {
      TokenNft {
        address
        chainId
        tokenId
        blockchain
        contentValue {
          image {
            medium
          }
          animation_url {
            original
          }
        }
      }
      pageInfo {
        nextCursor
        prevCursor
      }
    }
  }
  `;

  const { data, pagination } = useQueryWithPagination(
    query,
    {
      contractAddress: "0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03",
      blockchain: "ethereum",
    },
    { cache: false }
  );

  console.log(data, pagination.hasNextPage);

  return <div></div>;
}

export default App;
