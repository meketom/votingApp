"use client"

import React, {Component} from "react";
import votingETH from "../../../../ethereum/votingETH";
import web3 from "../../../../ethereum/web3";

class CandidateAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            errMessage: ''
        }
    }


    addCandidate = async (event) => {
        event.preventDefault();

        try {
            const accounts = await web3.eth.getAccounts();
            await votingETH.methods
                .addCandidate(this.state.name)
                .send({
                    from: accounts[0]
                });
        } catch (err) {
            this.setState({errMessage: err.message})
        }

    }


    render() {
        return (
            <div className="col-4">
                <form onSubmit={this.addCandidate}>
                    <div className="form-group mb-2">
                        <label htmlFor="name">Candidate name</label>
                        <input
                            onChange={event => this.setState({name: event.target.value})}
                            value={this.state.name}
                            type="text"
                            className="form-control"
                            id="name"
                            aria-describedby="emailHelp"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default CandidateAdd;
