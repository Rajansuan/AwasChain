//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.28;

interface IERC721 {
    function transferFrom(
        address _from,
        address _to,
        uint256 _id
    ) external;
}

contract Escrow {
    address public buyer;
    address payable public seller;
    address public inspector;
    address public lender;
    address public nftAddress;

    constructor(
        address _nftAddress,
        address _buyer,
        address payable _seller,
        address _inspector,
        address _lender
    ) {
        nftAddress = _nftAddress;
        buyer = _buyer;
        seller = _seller;
        inspector = _inspector;
        lender = _lender;
    }


}
