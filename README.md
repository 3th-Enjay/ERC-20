# MyToken - ERC-20 Token

## Overview
MyToken (MTK) is an ERC-20 token deployed on the Ethereum blockchain. This project provides a simple implementation of a fungible token with minting and burning functionalities.

## Features
- **Standard ERC-20 Token**
- **Minting Functionality** (Only owner can mint new tokens)
- **Burning Functionality** (Users can burn their own tokens)
- **Deployed on Ethereum Sepolia Testnet**

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MetaMask](https://metamask.io/)
- [Alchemy](https://www.alchemy.com/) or [Infura](https://www.infura.io/) for an Ethereum RPC URL

## Installation
Clone the repository and install dependencies:

```sh
git clone https://github.com/your-username/erc20-token.git
cd erc20-token
npm install
```

## Configuration
Create a `.env` file in the project root and add the following:

```
PRIVATE_KEY=your_wallet_private_key
ALCHEMY_API_URL=https://eth-sepolia.alchemyapi.io/v2/YOUR_ALCHEMY_KEY
```

## Compile the Smart Contract
Run the following command to compile the contract:

```sh
npx hardhat compile
```

## Deploy the Smart Contract
To deploy the contract on the Sepolia testnet, run:

```sh
npx hardhat run scripts/deploy.ts --network sepolia
```

After deployment, you will see the contract address in the console output.

## Verify the Smart Contract
To verify the contract on Etherscan, use:

```sh
npx hardhat verify --network sepolia DEPLOYED_CONTRACT_ADDRESS
```

## Interact with the Token
You can interact with the deployed contract using Etherscan, Hardhat scripts, or a frontend.

### Mint Tokens
Only the owner can mint tokens to any address:

```ts
await token.mint("0xRecipientAddress", ethers.parseUnits("1000", 18));
```

### Burn Tokens
Users can burn their own tokens:

```ts
await token.burn(ethers.parseUnits("500", 18));
```

## License
This project is licensed under the MIT License.



## Acknowledgments
- OpenZeppelin for ERC-20 implementation
- Hardhat for development and deployment


