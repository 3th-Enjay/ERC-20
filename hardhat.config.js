require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: process.env.INFURA_API_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
