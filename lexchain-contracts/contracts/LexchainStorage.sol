// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract LexchainStorage {
    enum Role { None, Lawyer, Secretary }

    struct FileRecord {
        string fileHash;        // Integrity check
        string fileName;        // Descriptive name
        string supabaseURL;     // Off-chain URL to Supabase storage
        uint256 timestamp;      // Time of upload
        address uploader;       // Ethereum wallet address
        uint256 version;        // Version number of this file
    }

    address public owner;
    mapping(address => Role) public roles;
    mapping(string => FileRecord[]) private fileVersions;
    mapping(string => bool) private fileExists;

    event RoleAssigned(address indexed user, Role role);
    event FileUploaded(
        string indexed fileId,
        string fileHash,
        string fileName,
        string supabaseURL,
        address indexed uploader,
        uint256 version,
        uint256 timestamp
    );

    constructor() {
        owner = msg.sender;
        roles[msg.sender] = Role.Lawyer; // Contract deployer is default Lawyer
    }

    // --- Modifiers ---
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    modifier onlyLawyer() {
        require(roles[msg.sender] == Role.Lawyer, "Only lawyers can upload files");
        _;
    }

    modifier canView() {
        require(
            roles[msg.sender] == Role.Lawyer || roles[msg.sender] == Role.Secretary,
            "Not authorized to view files"
        );
        _;
    }

    // --- Role Management ---
    function assignRole(address user, Role role) external onlyOwner {
        roles[user] = role;
        emit RoleAssigned(user, role);
    }

    // --- File Upload ---
    function uploadFile(
        string memory fileId,
        string memory fileHash,
        string memory fileName,
        string memory supabaseURL
    ) external onlyLawyer {
        uint256 version = fileVersions[fileId].length + 1;

        FileRecord memory newRecord = FileRecord({
            fileHash: fileHash,
            fileName: fileName,
            supabaseURL: supabaseURL,
            timestamp: block.timestamp,
            uploader: msg.sender,
            version: version
        });

        fileVersions[fileId].push(newRecord);
        fileExists[fileId] = true;

        emit FileUploaded(fileId, fileHash, fileName, supabaseURL, msg.sender, version, block.timestamp);
    }

    // --- Get Latest File ---
    function getLatestFile(string memory fileId) public view canView returns (
        string memory fileHash,
        string memory fileName,
        string memory supabaseURL,
        uint256 timestamp,
        address uploader,
        uint256 version
    ) {
        require(fileExists[fileId], "File not found");
        FileRecord memory f = fileVersions[fileId][fileVersions[fileId].length - 1];
        return (f.fileHash, f.fileName, f.supabaseURL, f.timestamp, f.uploader, f.version);
    }

    // --- Get All Versions ---
    function getAllVersions(string memory fileId) public view canView returns (FileRecord[] memory) {
        require(fileExists[fileId], "File not found");
        return fileVersions[fileId];
    }

    // --- Get Version Count ---
    function getVersionCount(string memory fileId) public view canView returns (uint256) {
        return fileVersions[fileId].length;
    }
}
