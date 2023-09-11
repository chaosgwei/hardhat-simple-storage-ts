import { Addressable } from "ethers";
import { ethers, network, run } from "hardhat";

async function main() {
  const simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying contract...");
  const simpleStorage = await simpleStorageFactory.deploy();
  await simpleStorage.waitForDeployment();
  console.log(`Deployed contract to: ${simpleStorage.target}`);
  // what happens when we deploy our contract to our hardhat network?
  if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
    await simpleStorage.deploymentTransaction()?.wait(6);
    await verify(simpleStorage.target, []);
  }

  const currentValue = await simpleStorage.retrieve();
  console.log(`Current Value is: ${currentValue}`);
  // Update the current value
  const transactionResponse = await simpleStorage.store(7);
  await transactionResponse.wait(1);
  const updatedValue = await simpleStorage.retrieve();
  console.log(`Updated Value is: ${updatedValue}`);

  async function verify(contactAddress: string | Addressable, args: any[]) {
    console.log("Verifying contract...");
    try {
      await run("verify:verify", {
        address: contactAddress,
        constructorArguments: args,
      });
    } catch (e: any) {
      if (e.message.toLowerCase().includes("already verified")) {
        console.log("Already Verified!");
      } else {
        console.log(e);
      }
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
