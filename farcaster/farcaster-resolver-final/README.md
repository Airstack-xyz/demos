# Farcaster Resolver

This folder contains the final code for building a Farcaster resolver.

This demo demonstrates how to use Airstack APIs to resolve Farcaster names or IDs to other web3 identities.

Web3 identities refer to:
- 0x address
- [ENS](https://ens.domains/)
- [Lens](https://www.lens.xyz/) Profiles

# Demo

https://farcaster-resolver.vercel.app/

# How to Use?

## Option #1: One-click Deploy

Deploy the Farcaster Resolver app in one click to either Vercel or Netlify:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Airstack-xyz/demos/tree/main/farcaster/farcaster-resolver-final&project-name=farcaster-resolver-final&repository-name=farcaster-resolver-final&env=VITE_AIRSTACK_API_KEY)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Airstack-xyz/demos&base=farcaster/farcaster-resolver-final#VITE_AIRSTACK_API_KEY=xxx)

## Option #2: Clone Locally

Clone the demo app with the following commands:

```sh
mkdir farcaster-resolver-final
cd farcaster-resolver-final
git init
git remote add -f origin https://github.com/Airstack-xyz/demos.git
git config core.sparseCheckout true
git sparse-checkout init
git sparse-checkout set farcaster-resolver
git pull origin main
rm -rf .git
mv farcaster/farcaster-resolver-final/* .
mv farcaster/farcaster-resolver-final/.* .
rm -rf farcaster
```

Rename [`.env.example`](.env.example) to `.env.local`:

```bash
cp .env.example .env.local
```

then, update `VITE_AIRSTACK_API_KEY` with your [Airstack](https://app.airstack.xyz/profile-settings/api-keys) API key.

Run the Farcaster Resolver app in development mode:

```bash
npm run dev
```
