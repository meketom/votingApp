"use client"

import React, {Component} from "react";
import votingETH from "../../ethereum/votingETH";
import web3 from "../../ethereum/web3";

class CandidateCard extends Component {

    constructor(props) {
        super(props);
    }

    vote = async () => {
        const accounts = await web3.eth.getAccounts();
        console.log(this.props.candidate)
        await votingETH.methods.vote(this.props.candidate[0]).send({
            from: accounts[0]
        });
    }

    render() {
        return (
            <div className="col-sm-3">
                <div className="card mt-2">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.candidate[1]}</h5>
                        <button onClick={this.vote} className="btn btn-outline-primary">Vote!</button>
                    </div>
                    <div className="card-footer text-muted">
                        Votes: {this.props.candidate[2]}
                    </div>
                </div>
            </div>
        );
    }
}

export default CandidateCard;
