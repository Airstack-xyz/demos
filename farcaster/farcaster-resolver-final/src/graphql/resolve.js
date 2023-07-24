const FARCASTER_RESOLVER = `
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
    xmtp {
      isXMTPEnabled
    }	
  }
}
`;

export default FARCASTER_RESOLVER;
