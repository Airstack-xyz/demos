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
  }
} 
`;

export default UNIVERSAL_RESOLVER;
