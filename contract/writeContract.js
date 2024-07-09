const { ethers, JsonRpcProvider } = require("ethers");

const INFURA_ID = "";
const provider = new JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const account1 = ""; // Sender
const account2 = ""; // Recipient

const privateKey1 =
  ""; // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider);

const ERC20_ABI = [
  "function balanceOf(address) view returns (uint)",
  "function transfer(address to, uint amount) returns (bool)",
];

const address = "";
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const balance = await contract.balanceOf(account1);

  console.log(`\nReading from ${address}\n`);
  console.log(`Balance of sender: ${ethers.formatEther(balance)}\n`);

    const contractWithWallet = contract.connect(wallet);
    const tx = await contractWithWallet.transfer(account2, balance);

    // Waiting for the transaction to be mined
    await tx.wait();
    console.log(tx);

    const balanceOfSender = await contract.balanceOf(account1);
    const balanceOfReceiver = await contract.balanceOf(account2);

    console.log(`\nBalance of sender: ${balanceOfSender}`);
    console.log(`\Balance of receiver: ${balanceOfReceiver}\n`);
};

main();
