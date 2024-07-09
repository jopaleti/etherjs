# Ethers.js by Example
Learn how to use ethers.js from these examples

## Technology Stack & Tools

- Javascript (Writing scripts)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [Node.js](https://nodejs.org/en/) (To run our scripts and install ethers.js)
- [Infura](https://infura.io/) (Node provider)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
```
$ npm install
```

## Ethers.js scripts

### account.js - Reads balance of ether of wallet address
- Input your infura project ID 
```
$ node contract/account.js
```

### readContract  - Reads the balance of Dai wallet address from the Dai contract
- Input your infura project ID 
```
$ node contract/readContract.js
```

### sendSignedTransaction.js - Transfers 0.025 ether from account1 to account2
- Input your infura project ID 
- Input your account1 public key
- Input your account2 public key
- Input your account1 private key
```
$ node contract/sendSignedTransaction.js
```

### 4_deploy_contract.js - Deploys contract on Kovan testnet by using Factory contract
- Input your infura project ID 
- Input your account private key
```
$ node examples/4_deploy_contract.js
```

### writeContract.js - Transfers entire balance of token of your choosing from account1 to account2 (on Kovan testnet)
- Input your infura project ID 
- Input your account1 public key
- Input your account2 public key
- Input your account1 private key
- Input contract address of the token you want to transfer (You can use the deployed contract address from the previous script)
```
$ node contract/writeContract.js
```

### contractEvent - Queries a block for transfer events
- Input your infura project ID 
```
$ node contract/contractEvent
```

### inspectingBlock - Get transactions from block
- Input your infura project ID 
```
$ node contract/inspectingBlock.js
```