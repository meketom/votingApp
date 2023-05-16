import styles from './page.module.css'

export default function Home() {
    return (
        <main>
            <div class="row">
                <h1>HOME</h1>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
