module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
    const { deploy, get, log } = deployments;
    const { deployer } = await getNamedAccounts();

    let args = [];

    log("----------------------------------------------------");
    const SaninInu = await deploy("SaninInu", {
      from: deployer,
      log: true,
    });
  
    log(`You have deployed an Token contract to ${SaninInu.address}`);
    log(
      `Verify with:\n npx hardhat verify --network rinkeby ${
        SaninInu.address
      } ${args.toString().replace(/,/g, " ")}`
    );
}

module.exports.tags = ["all", "Token"];