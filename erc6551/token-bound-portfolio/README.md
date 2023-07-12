# Token Bound Portfolio (ERC6551)

This folder contains the final code for building a token-bound portfolio app.

This demo demonstrates how to use Airstack APIs to get all token-bound accounts of a user.

# Demo

# How to Use?

## Option #1: One-click Deploy

Deploy the Universal Resolver app in one click to either Vercel or Netlify:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Airstack-xyz/demos/tree/main/erc6551/token-bound-portfolio&project-name=token-bound-portfolio&repository-name=token-bound-portfolio&env=VITE_AIRSTACK_API_KEY)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Airstack-xyz/demos&base=erc6551/token-bound-portfolio#VITE_AIRSTACK_API_KEY=xxx)

## Option #2: Clone Locally

Clone the demo app with the following commands:

```sh
mkdir token-bound-portfolio
cd token-bound-portfolio
git init
git remote add -f origin https://github.com/Airstack-xyz/demos.git
git config core.sparseCheckout true
git sparse-checkout init
git sparse-checkout set token-bound-portfolio
git pull origin main
rm -rf .git
mv erc6551/token-bound-portfolio/* .
mv erc6551/token-bound-portfolio/.* .
rm -rf erc6551
```

Rename [`.env.example`](.env.example) to `.env.local`:

```bash
cp .env.example .env.local
```

then, update `VITE_AIRSTACK_API_KEY` with your [Airstack](https://app.airstack.xyz/profile-settings/api-keys) API key.

Run the Token Bound Portfolio app in development mode:

```bash
npm run dev
```
