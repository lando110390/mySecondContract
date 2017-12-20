const Hello = artifacts.require('./Hello.sol'),
	ContractNameService = artifacts.require('./ContractNameService.sol');

module.exports = function(deployer) {
    deployer.deploy(Hello, ContractNameService.address).then(function(){
        return ContractNameService.deployed();
    }).then(function(instance) {
        return instance.setContract('Hello', 1, Hello.address, Hello.address);
    });
}
