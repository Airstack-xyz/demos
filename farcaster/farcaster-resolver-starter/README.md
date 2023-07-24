# Farcaster Resolver

This folder contains the starter code for building a Farcaster resolver.

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

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Airstack-xyz/demos/tree/main/farcaster/farcaster-resolver-starter&project-name=farcaster-resolver-starter&repository-name=farcaster-resolver-starter&env=VITE_AIRSTACK_API_KEY)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Airstack-xyz/demos&base=farcaster/farcaster-resolver-starter#VITE_AIRSTACK_API_KEY=xxx)

## Option #2: Clone Locally

Clone the demo app with the following commands:

```sh
mkdir farcaster-resolver-starter
cd farcaster-resolver-starter
git init
git remote add -f origin https://github.com/Airstack-xyz/demos.git
git config core.sparseCheckout true
git sparse-checkout init
git sparse-checkout set farcaster-resolver
git pull origin main
rm -rf .git
mv farcaster/farcaster-resolver-starter/* .
mv farcaster/farcaster-resolver-starter/.* .
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
