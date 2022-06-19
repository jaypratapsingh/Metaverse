const Land = artifacts.require("Land");

module.exports = async function (deployer) {

    const NAME = "Dapp U Building"
    const SYMBOL = "DUB"
    const COST = 10

  await deployer.deploy(Land, NAME, SYMBOL, COST);
};
