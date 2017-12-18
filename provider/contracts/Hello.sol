pragma solidity ^0.4.2;

import '../../gmo/contracts/VersionContract.sol';

contract Hello is VersionContract {

    function Hello(ContractNameService _cns) VersionContract(_cns, "Hello") {}

    function sayHello() constant returns (string) {
        return "Hello call";
    }
}
