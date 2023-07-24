# Lens Resolver

This folder contains the final code for building a Lens resolver.

This demo demonstrates how to use Airstack APIs to resolve Lens profiles to other web3 identities.

Web3 identities refer to:
- 0x address
- [ENS](https://ens.domains/)
- [Farcaster](https://farcaster.xyz) Name & ID

# Demo

https://lens-resolver-final.vercel.app/

# How to Use?

## Option #1: One-click Deploy

Deploy the Universal Resolver app in one click to either Vercel or Netlify:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Airstack-xyz/demos/tree/main/lens/lens-resolver-final&project-name=lens-resolver-final&repository-name=lens-resolver-final&env=VITE_AIRSTACK_API_KEY)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Airstack-xyz/demos&base=lens/lens-resolver-final#VITE_AIRSTACK_API_KEY=xxx)

## Option #2: Clone Locally

Clone the demo app with the following commands:

```sh
mkdir lens-resolver-final
cd lens-resolver-final
git init
git remote add -f origin https://github.com/Airstack-xyz/demos.git
git config core.sparseCheckout true
git sparse-checkout init
git sparse-checkout set lens-resolver
git pull origin main
rm -rf .git
mv lens/lens-resolver-final/* .
mv lens/lens-resolver-final/.* .
rm -rf lens
```

Rename [`.env.example`](.env.example) to `.env.local`:

```bash
cp .env.example .env.local
```

then, update `VITE_AIRSTACK_API_KEY` with your [Airstack](https://app.airstack.xyz/profile-settings/api-keys) API key.

Run the Lens Resolver app in development mode:

```bash
npm run dev
```
