require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/F1L7nP2fEfqIzjYTVFSjKKDKuvnkXgSE",
      accounts: ["5380d20185b3b7aaa1830dda1da0f6098472c215c26fe5516337221b3784641a"],
    },
  },
};