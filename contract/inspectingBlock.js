const { ethers, JsonRpcProvider } = require("ethers");

const INFURA_ID = "";
const provider = new JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const main = async () => {
    const block = await provider.getBlockNumber()

    console.log(`\nBlock Number: ${block}\n`)
    const blockInfo = await provider.getBlock(block)
  console.log(blockInfo)
  
  const { transactions } = await provider.getBlockWithTransactions(block)
  
  console.log(`\nLogging first transaction in block:\n`)
  console.log(transactions[0])
}

main()