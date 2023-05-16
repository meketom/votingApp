require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const voting = require('./build/Voting.json');

const provider = new HDWalletProvider(
    process.env.MNEMONIC_PHRASE,
    process.env.INFURA_API
)
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log("Attempting to deploy from account", accounts[0]);

    const result = await new web3.eth.Contract(voting.abi)
        .deploy({ data: voting.evm.bytecode.object, arguments: ['La mejor votacion'] })
        .send({
            gas: "1900000",
            from: accounts[0]
        });

    console.log("Contract deployed to", result.options.address);
    provider.engine.stop();
};
deploy();
