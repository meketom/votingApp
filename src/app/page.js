import styles from './page.module.css'
import votingETH from "../../ethereum/votingETH";
import CandidateCard from "../components/CandidateCard";

async function renderCandidates() {
    const candidates = await votingETH.methods.getCandidates().call();
    const candidatesRows = candidates.map((candidate) => {
        return (
            <CandidateCard candidate={candidate}></CandidateCard>
        )
    })

    return (candidatesRows)
}

export default function Home() {
    return (
        <div className="col">
            <h1>Candidates</h1>
            <div className="row">
                <div className="col-11">
                    <div className="row">
                            {renderCandidates()}
                    </div>
                </div>
                <div className="col-1">
                    <a type="button" className="btn btn-outline-primary" href="/candidate/add">Add +</a>
                </div>
            </div>

        </div>
    )
}
