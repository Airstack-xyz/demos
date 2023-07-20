const UNIVERSAL_RESOLVER = `
query MyQuery($address: Identity!) {
  Wallet(input: {identity: $address, blockchain: ethereum}) {
    socials {
      dappName
      profileName
    }
    domains {
      name
    }
    primaryDomain {
      name
    }
    addresses
  }
}
`;

export const ERC6551_USER_BALANCE = `
query MyQuery($address: Identity!) {
  TokenBalances(
    input: {filter: {owner: {_eq: $address}, tokenType: {_in: [ERC1155, ERC721]}}, blockchain: ethereum, limit: 200}
  ) {
    TokenBalance {
      tokenNfts {
        erc6551Accounts {
          address {
            addresses
            tokenBalances {
              tokenNfts {
                address
                contentValue {
                  image {
                    original
                  }
                }
                type
              }
            }
            socials {
              dappName
              profileName
              identity
            }
          }
          tokenId
        }
        contentValue {
          image {
            original
          }
        }
      }
      tokenId
      token {
        symbol
      }
    }
  }
}
`;

export const ERC6551_ALL_RECENT = `
query MyQuery {
  Accounts(
    input: {filter: {standard: {_eq: ERC6551}}, blockchain: ethereum, order: {createdAtBlockTimestamp: DESC}, limit: 50}
  ) {
    Account {
      nft {
        address
        tokenId
        token {
          symbol
        }
        contentValue {
          image {
            original
          }
        }
      }
    }
  }
}
`;

export default UNIVERSAL_RESOLVER;
