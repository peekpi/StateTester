
pragma solidity ^0.6.2;

contract StateTester {
    mapping(uint256=>uint256) public data;
    function set(uint256 key, uint256 value) public {
        data[key] = value;
    }
    function sets(uint256 size, uint256 mod) external {
        for(uint256 i = 0; i < size; i++) {
            set(i, i%mod);
        }
    }
}