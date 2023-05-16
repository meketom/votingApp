//SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.19;

contract Voting {

    struct Candidate {
        uint id;
        string name;
        uint votes;
    }

    struct Voter {
        bool voted;
    }

    address owner;
    uint public candidatesCounter;
    string public name;

    Candidate[] private candidates;
    mapping(address => Voter) public voters;

    constructor (string memory votingName) {
        name = votingName;
        candidatesCounter = 0;
        owner = msg.sender;
    }

    function addCandidate(string memory candidateName) public {
        Candidate memory newCandidate = Candidate({
            id: candidatesCounter,
            name: candidateName,
            votes: 0
        });

        candidates.push(newCandidate);
        candidatesCounter++;
    }

    function getCandidates() public view returns (Candidate[] memory) {
        return candidates;
    }

    function vote(uint id) public {
        require(!voters[msg.sender].voted, 'This person already voted');

        for (uint i=0; i< candidates.length; i++) {
            if (id == candidates[i].id) {
                candidates[i].votes++;
            }
        }
        voters[msg.sender].voted = true;
    }

    function winner() public onlyOwner view returns (Candidate memory) {
        Candidate memory winner = candidates[0];
        uint256 candidatesLength = candidates.length;
        for (uint256 i=1; i < candidatesLength;) {
            if (winner.votes < candidates[i].votes) {
                winner = candidates[i];
            }
        unchecked{ i++; }
        }

        return winner;
    }

    modifier onlyOwner () {
        require(owner == msg.sender, "Not owner");
        _;
    }
}
