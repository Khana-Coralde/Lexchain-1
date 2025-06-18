const { ethers } = require("hardhat");

async function main() {
  const LexchainStorage = await ethers.getContractFactory("LexchainStorage");
  const contract = await LexchainStorage.deploy(); // This already deploys

  await contract.waitForDeployment(); // Waits until mined

  console.log("Contract deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

