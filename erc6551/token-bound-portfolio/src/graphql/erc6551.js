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
  Accounts(input: {filter: {address: {_eq: $address}}, blockchain: ethereum}) {
    Account {
      nft {
        contentValue {
          image {
            original
          }
        }
        tokenId
        address
        token {
          name
          symbol
          type
        }
      }
    }
  }
  TokenBalances(
    input: {filter: {owner: {_eq: $address}, tokenType: {_in: [ERC1155, ERC721]}}, blockchain: ethereum, limit: 200}
  ) {
    TokenBalance {
      owner {
        addresses
        primaryDomain {
          name
        }
        socials {
          dappName
          profileName
        }
      }
      tokenNfts {
        blockchain
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
        name
        symbol
        type
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
        blockchain
        tokenId
        token {
          name
          symbol
        }
        type
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
