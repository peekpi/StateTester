
pragma solidity ^0.6.2;

import "openzeppelin-solidity/contracts/access/Ownable.sol";

contract Demo is Ownable {
    event change(uint256 age);
    uint256 public age;
    bytes32 public _hash;
    constructor(uint256 _age) Ownable() public {
        changeAge(_age);
    }
    function changeAge(uint256 _age) public onlyOwner{
        age = _age;
        _hash = blockhash(block.number-1);
        emit change(age);
    }
}