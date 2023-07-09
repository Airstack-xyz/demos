# Universal Resolver

This demo demonstrates how to use Airstack APIs to resolve any web3 identities to another.

Web3 identities refer to:
- 0x address
- [ENS](https://ens.domains/)
- [Lens](https://lens.xyz) Profile
- [Farcaster](https://farcaster.xyz) Name & Id

# Demo

# How to Use?

## Option #1: One-click Deployment

## Option #2: Clone Locally

```sh
mkdir universal-resolver
cd universal-resolver
git init
git remote add -f origin https://github.com/Airstack-xyz/demos.git
git config core.sparseCheckout true
git sparse-checkout init
git sparse-checkout set universal-resolver
git pull origin main
rm -rf .git
mv universal-resolver/* .
mv universal-resolver/.* .
rm -rf universal-resolver 
```
