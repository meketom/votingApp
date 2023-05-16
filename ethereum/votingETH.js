import web3 from "./web3";
import Voting from './build/Voting.json';

const instance = web3.eth.Contract(
    Voting.abi,
    "0x3d6cD4CCAF1342399c7d1DaFB0715abaB5E0a8b3"
);

export default instance;
