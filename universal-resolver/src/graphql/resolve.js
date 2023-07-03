const UNIVERSAL_RESOLVER = `
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

export default UNIVERSAL_RESOLVER;
