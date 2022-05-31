//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./libs/ERC2981ContractWideRoyalties.sol";
import "./libs/IERC721A.sol";

contract NTB_ERC721A is IERC721A, ERC2981ContractWideRoyalties, Ownable {
    using Strings for uint256;

    string public baseURI;
    string public baseExtension = ".json";
    string public notRevealedUri;
    uint256 public cost = 1 ether;
    uint256 public maxSupply = 8888;
    uint256 public maxMintAmount = 5;
    uint256 public nftPerAddressLimit = 5;
    bool public paused = false;
    bool public revealed = false;
    bool public isPublicSale = false;

    // free mint
    bool public freeMintOpened = true;
    mapping(address => uint256) public freeMintWhiteListAddresses;

    // price1 mint
    uint256 public price1Cost = 0.38 ether;
    bool public price1MintOpened = true;
    mapping(address => uint256) public price1MintWhiteListAddresses;

    uint256 public publicSaleCost = 0.48 ether;

    mapping(address => uint256) public addressMintedBalance;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _initBaseURI,
        string memory _initNotRevealedUri
    ) IERC721A(_name, _symbol) {
        setBaseURI(_initBaseURI);
        setNotRevealedURI(_initNotRevealedUri);
    }

    // internal
    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    /// @inheritdoc	ERC165
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(IERC721A, ERC2981Base)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function setRoyalties(address recipient, uint256 value) public onlyOwner {
        _setRoyalties(recipient, value); // value: 0...10000
    }

    function mint(uint256 _mintAmount) public payable {
        require(!paused, "the contract is paused");
        uint256 supply = totalSupply();
        require(_mintAmount > 0, "need to mint at least 1 NFT");
        require(
            _mintAmount <= maxMintAmount,
            "max mint amount per session exceeded"
        );
        require(supply + _mintAmount <= maxSupply, "max NFT limit exceeded");

        if (msg.sender == owner()) {
            addressMintedBalance[msg.sender] += _mintAmount;
            _safeMint(msg.sender, _mintAmount);
            return;
        }

        uint256 ownerMintedCount = addressMintedBalance[msg.sender];

        // check free mint
        uint256 freeMintMaxCount = freeMintWhiteListAddresses[msg.sender];

        if (
            freeMintOpened == true &&
            freeMintMaxCount > (ownerMintedCount + _mintAmount)
        ) {
            addressMintedBalance[msg.sender] += _mintAmount;
            _safeMint(msg.sender, _mintAmount);
            return;
        }

        // check price1 mint
        if (
            price1MintOpened == true &&
            price1MintWhiteListAddresses[msg.sender] > 0 &&
            price1MintWhiteListAddresses[msg.sender] >
            (ownerMintedCount + _mintAmount)
        ) {
            require(
                msg.value >= price1Cost * _mintAmount,
                "insufficient funds for price1 mint"
            );
            addressMintedBalance[msg.sender] += _mintAmount;
            _safeMint(msg.sender, _mintAmount);
            return;
        }

        // check public sale mint
        require(isPublicSale, "public sale not open yet");
        if (nftPerAddressLimit > (ownerMintedCount + _mintAmount)) {
            require(
                msg.value >= publicSaleCost * _mintAmount,
                "insufficient funds for public sale mint"
            );
            addressMintedBalance[msg.sender] += _mintAmount;
            _safeMint(msg.sender, _mintAmount);
            return;
        }
    }

    function walletOfOwner(address _owner)
        public
        view
        returns (uint256[] memory)
    {
        uint256 ownerTokenCount = balanceOf(_owner);
        uint256[] memory tokenIds = new uint256[](ownerTokenCount);
        for (uint256 i; i < ownerTokenCount; i++) {
            tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokenIds;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        if (revealed == false) {
            return notRevealedUri;
        }

        string memory currentBaseURI = _baseURI();
        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked(
                        currentBaseURI,
                        tokenId.toString(),
                        baseExtension
                    )
                )
                : "";
    }

    //only owner
    function reveal() public onlyOwner {
        revealed = true;
    }

    function setNftPerAddressLimit(uint256 _limit) public onlyOwner {
        nftPerAddressLimit = _limit;
    }

    function setPrice1Cost(uint256 _newCost) public onlyOwner {
        price1Cost = _newCost;
    }

    function setPublicSaleCost(uint256 _newCost) public onlyOwner {
        publicSaleCost = _newCost;
    }

    function setmaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner {
        maxMintAmount = _newmaxMintAmount;
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function setBaseExtension(string memory _newBaseExtension)
        public
        onlyOwner
    {
        baseExtension = _newBaseExtension;
    }

    function setNotRevealedURI(string memory _notRevealedURI) public onlyOwner {
        notRevealedUri = _notRevealedURI;
    }

    function pause(bool _state) public onlyOwner {
        paused = _state;
    }

    function setFreeMintWhiteList(
        address[] calldata userAddressArr,
        uint256[] calldata amountArr
    ) public onlyOwner {
        uint256 len = userAddressArr.length;
        for (uint256 i = 0; i < len; i++) {
            freeMintWhiteListAddresses[userAddressArr[i]] = amountArr[i];
        }
    }

    function setPrice1MintWhiteList(
        address[] calldata userAddressArr,
        uint256[] calldata amountArr
    ) public onlyOwner {
        uint256 len = userAddressArr.length;
        for (uint256 i = 0; i < len; i++) {
            price1MintWhiteListAddresses[userAddressArr[i]] = amountArr[i];
        }
    }

    function withdraw() public payable onlyOwner {
        (bool os, ) = payable(owner()).call{value: address(this).balance}("");
        require(os);
    }
}
