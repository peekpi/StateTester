const ProvethVerifier = artifacts.require("ProvethVerifier");

module.exports = function(deployer) {
  deployer.deploy(ProvethVerifier);
};
