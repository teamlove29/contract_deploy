const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {


  beforeEach(async () => {
    Greeter = await ethers.getContractFactory("Greeter");
    greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();
  });



  it("Should return the new greeting once it's changed", async function () {
    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
