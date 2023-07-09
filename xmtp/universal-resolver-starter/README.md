# Universal Resolver

This folder contains the starter code for building a universal resolver.

This demo demonstrates how to use Airstack APIs to resolve any web3 identities to another.

Web3 identities refer to:
- 0x address
- [ENS](https://ens.domains/)
- [Lens](https://lens.xyz) Profile
- [Farcaster](https://farcaster.xyz) Name & ID

# Demo

https://universal-resolver.vercel.app/

# How to Use?

## Option #1: One-click Deploy

Deploy the Universal Resolver app in one click to either Vercel or Netlify:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Airstack-xyz/demos/tree/main/xmtp/universal-resolver-start&project-name=universal-resolver-start&repository-name=universal-resolver-start&env=VITE_AIRSTACK_API_KEY)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Airstack-xyz/demos&base=xmtp/universal-resolver-start#VITE_AIRSTACK_API_KEY=xxx)

## Option #2: Clone Locally

Clone the demo app with the following commands:

```sh
mkdir universal-resolver-start
cd universal-resolver-start
git init
git remote add -f origin https://github.com/Airstack-xyz/demos.git
git config core.sparseCheckout true
git sparse-checkout init
git sparse-checkout set universal-resolver-start
git pull origin main
rm -rf .git
mv xmtp/universal-resolver-start/* .
mv xmtp/universal-resolver-start/.* .
rm -rf xmtp/universal-resolver-start
```

Rename [`.env.example`](.env.example) to `.env.local`:

```bash
cp .env.example .env.local
```

then, update `VITE_AIRSTACK_API_KEY` with your [Airstack](https://app.airstack.xyz/profile-settings/api-keys) API key.

Run the Universal Resolver app in development mode:

```bash
npm run dev
```
