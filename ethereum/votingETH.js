import web3 from "./web3";
import Voting from './build/Voting.json';

const instance = new web3.eth.Contract(
    Voting.abi,
    "0x5CeFF12f08bD2fffDdb974b6d81349B12FD729BE"
);

export default instance;
