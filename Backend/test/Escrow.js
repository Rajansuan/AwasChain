const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("RealEstate", () => {
  it("deploys correctly and prints address", async () => {
    const RealEstateFactory = await ethers.getContractFactory("RealEstate");
    const realEstate = await RealEstateFactory.deploy();
    await realEstate.deployed();

    console.log("RealEstate deployed to:", realEstate.address);

    expect(realEstate.address);
  });
});
