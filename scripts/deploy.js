const { ethers } = require("hardhat");

async function main() {
  const initialSupply = ethers.parseUnits("1000000", 18); // 1 Million Tokens
  const Token = await ethers.getContractFactory("MyToken");
  const token = await Token.deploy(initialSupply);

  await token.waitForDeployment();
  console.log("Token deployed to:", token.target);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
