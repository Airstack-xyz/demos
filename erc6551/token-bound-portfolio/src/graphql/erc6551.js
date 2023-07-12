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
  Wallet(input: {identity: $address, blockchain: ethereum}) {
    tokenBalances {
      tokenNfts {
        erc6551Accounts {
          address {
            addresses
          }
        }
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
        metaData {
          image
        }
        tokenId
        token {
          symbol
        }
      }
    }
  }
}
`;

export default UNIVERSAL_RESOLVER;
