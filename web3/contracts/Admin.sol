// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Admin {
    address public admin;

    constructor() {
        admin = msg.sender;
    }

    function isAdmin(address _address) public view returns(bool) {
        return _address == admin;
    }
}
