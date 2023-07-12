const UNIVERSAL_RESOLVER = `
query MyQuery($address: Identity!) {
  Wallet(input: {identity: $address, blockchain: ethereum}) {
    addresses
  }
}
`;

export default UNIVERSAL_RESOLVER;
