// For deploy
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");

// For test
require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-ganache");

// For environment
require('dotenv').config();

const INFURA_API_KEY = process.env.INFURA_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const SCAN_API_KEY = process.env.SCAN_API_KEY

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      // forking: {
      //   url: `https://eth-mainnet.alchemyapi.io/v2/${INFURA_API_KEY}`,
      // },
      // accounts: accountList.accounts,
      timeout: 200000
    },
    development: {
      url: "http://127.0.0.1:8545",
      gas: 6000000,
      timeout: 200000
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY],
      timeout: 20000
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY],
      timeout: 20000
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test/",
  },
  mocha: {
    timeout: 0,
  },
  etherscan: {
    apiKey: SCAN_API_KEY
  },
};
