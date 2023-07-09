# Universal Resolver

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

Deploy the Universal Resolver app in one-click to either Vercel or Netlify:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Airstack-xyz/demos/tree/main/universal-resolver&project-name=universal-resolver&repository-name=universal-resolver&env=VITE_AIRSTACK_API_KEY)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Airstack-xyz/demos&base=universal-resolver#VITE_AIRSTACK_API_KEY=xxx)

## Option #2: Clone Locally

Clone the demo app with the following commands:

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

Rename [`.env.example`](.env.example) to `.env.local`:

```bash
cp .env.example .env.local
```

then, update `VITE_AIRSTACK_API_KEY` with your [Airstack](https://app.airstack.xyz/profile-settings/api-keys) API key.

Run the Universal Resolver app in development mode:

```bash
npm run dev
```
