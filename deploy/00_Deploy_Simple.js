module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy, execute, log } = deployments
  const { deployer } = await getNamedAccounts()

  let args = ['SimpleToken', 'APE', "1000000000000000000000000000"]

  log('----------------------------------------------------')
  const deploymentName = 'SimpleToken'
  const SimpleToken = await deploy(deploymentName,{
    contract: 'SimpleToken',
    from: deployer,
    log: true,
    args: args,
    // skipIfAlreadyDeployed: true,
  })

  log(`Could be found at ....`)
  log(`/deployments/${network.name}/${deploymentName}.json`)

  log(`You have deployed an Token contract to ${SimpleToken.address}`)
  log(
    `Verify with:\n npx hardhat verify --network rinkeby ${
      SimpleToken.address
    } ${args.toString().replace(/,/g, ' ')}`,
  )

  // await execute(deploymentName, { from: deployer, log: true }, args)
  await run('verify:verify', {
    address: SimpleToken.address,
    constructorArguments: args,
    contract: "contracts/SimpleToken.sol:SimpleToken"
  })
}


module.exports.tags = ['all', 'Simple']
