# Hardhat Simple Storage (TypeScript)

This is my first project and it demonstrates a basic Hardhat use case. It comes with a sample contract `SimpleStorage.sol`, a test for that contract `test-deploy.ts`, a custom task to see block numbers in network `tasks/block-number.ts`, and a script that deploys that contract `scripts/deploy.ts`.

# Getting Started

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Nodejs](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/getting-started/install) instead of `npm`

## Quickstart

```shell
git clone https://github.com/chaosrei/hardhat-simple-storage-ts.git
cd hardhat-simple-storage-ts
yarn
yarn typechain
git checkout typescript
```

## Usage

Deploy:

```shell
yarn hardhat run scripts/deploy.ts
```

Test:

```shell
yarn hardhat test
```

Test Coverage:

```shell
yarn hardhat coverage
```

# Deployment to a testnet or mainnet

1. Setup environment variabltes

Set your `SEPOLIA_RPC_URL` and `PRIVATE_KEY` as environment variables. You can add them to a `.env` file.

- `PRIVATE_KEY`: The private key of your account.
- `SEPOLIA_RPC_URL`: This is url of the sepolia testnet node you're working with. You can get setup with one for free from [Alchemy](https://alchemy.com/)
- `ETHERSCAN_API_KEY`: This is API from [etherscan.io](https://etherscan.io)
- `COINMARKETCAP_API_KEY` This is API from [coinmarketcap.com](https://coinmarketcap.com/). It helps us to see current token price (e.g. in USD)
  - To disable Gas Reporter change `enabled` value to `false` in `hardhat.config.ts`:

```
gasReporter: {
  enabled: false,
  ...
}
```

2. Get testnet ETH

Head over to [sepoliafaucet.com](https://sepoliafaucet.com/) and get some tesnet ETH.

3. Deploy

```
yarn hardhat run scripts/deploy.ts --network sepolia
```

## Estimate gas

You can estimate how much gas things cost by running:

```
yarn hardhat test
```

And you'll see and output file called `gas-report.txt`
You can also change output filename in `hardhat.config.ts`

## Verify on etherscan

If you deploy to a testnet or mainnet, you can verify it if you get an [API Key](https://etherscan.io/myapikey) from Etherscan and set it as an environemnt variable named `ETHERSCAN_API_KEY`. You can pop it into your `.env` file.
