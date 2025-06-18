import { ethers } from "ethers";

// Replace this with your actual deployed contract address
const CONTRACT_ADDRESS = "0x7D9d5eCdAE02eC73684B79E952AE256afA3F3a65";

// Replace this with the ABI from LexchainStorage.json
const CONTRACT_ABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "string",
          "name": "fileId",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "fileHash",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "fileName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "supabaseURL",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "uploader",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "version",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "FileUploaded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "enum LexchainStorage.Role",
          "name": "role",
          "type": "uint8"
        }
      ],
      "name": "RoleAssigned",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "enum LexchainStorage.Role",
          "name": "role",
          "type": "uint8"
        }
      ],
      "name": "assignRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "fileId",
          "type": "string"
        }
      ],
      "name": "getAllVersions",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "fileHash",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "fileName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "supabaseURL",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "uploader",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "version",
              "type": "uint256"
            }
          ],
          "internalType": "struct LexchainStorage.FileRecord[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "fileId",
          "type": "string"
        }
      ],
      "name": "getLatestFile",
      "outputs": [
        {
          "internalType": "string",
          "name": "fileHash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "fileName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "supabaseURL",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "uploader",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "version",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "fileId",
          "type": "string"
        }
      ],
      "name": "getVersionCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "roles",
      "outputs": [
        {
          "internalType": "enum LexchainStorage.Role",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "fileId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "fileHash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "fileName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "supabaseURL",
          "type": "string"
        }
      ],
      "name": "uploadFile",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
];

export const getContract = async (signer) => {
  return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
};
