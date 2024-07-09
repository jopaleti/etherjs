const { ethers, JsonRpcProvider } = require("ethers");

const INFURA_ID = "";
const provider = new JsonRpcProvider(
  `https://sepolia.infura.io/v3/${INFURA_ID}`
);

const account1 = ""; // Sender
const account2 = ""; // Recipient

const privateKey1 =
  ""; // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider);

const main = async () => {
  // Show account 1 balance before transfer
  const senderBalanceBefore = await provider.getBalance(account1);
  const receiverBalanceBefore = await provider.getBalance(account2);

  console.log(
    `\nSender balance before: ${ethers.formatEther(senderBalanceBefore)}`
  );
  console.log(
    `Receiver balance before: ${ethers.formatEther(receiverBalanceBefore)}\n`
  );

  // Send Ether
    const tx = await wallet.sendTransaction({
      to: account2,
      value: ethers.parseEther("0.0001"),
    });

    // Fetch Transaction
    await tx.wait();
    console.log(tx);

    // Your account 1 balance after transfer
    // Your account 2 balance after transfer
    const senderBalanceAfter = await provider.getBalance(account1);
    const receiverBalanceAfter = await provider.getBalance(account2);

    console.log(
      `\nSender balance after: ${ethers.formatEther(senderBalanceAfter)}`
    );
    console.log(
      `Receiver balance after: ${ethers.formatEther(receiverBalanceAfter)}\n`
    );
};

main();
