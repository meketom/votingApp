import web3 from "./web3";
import Voting from './build/Voting.json';

const instance = new web3.eth.Contract(
    Voting.abi,
    "0x1eA73776fF0c50E99945C2E5F01232292306A12D"
);

export default instance;
