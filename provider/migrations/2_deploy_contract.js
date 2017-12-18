const Hello = artifacts.require('./Hello.sol');

module.exports = function(deployer, network, accounts) {
    deployer.deploy(Hello);
}
