// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "openzeppelin-solidity/contracts/access/Ownable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract CtrToken is Ownable, ERC20Burnable {
    uint256 public constant TOTAL_SUPPLY = 150 * 10**(6 + 18);

    constructor(address wallet) Ownable() ERC20("Creator Platform","CTR") {
        _mint(wallet, TOTAL_SUPPLY);
        transferOwnership(wallet);
    }
}
